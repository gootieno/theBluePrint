# pylint: disable=missing-module-docstring
from app.models import BluePrint as CarBlueprint, Garage
from sqlalchemy.orm import joinedload
from flask_jwt_extended import jwt_required, get_jwt
from flask import Blueprint, jsonify

garage_routes = Blueprint('garage', __name__)


# get garage blueprints, specs and categories
@garage_routes.route('/<int:id>/blueprints', methods=['GET'])
@jwt_required()
def get_garage_blueprints(id):
    
    claims = get_jwt()
    
    user_id = claims["user_id"]
    garage_id = claims['garage_id']
    
    print('user id and garage id ', user_id, garage_id)
    
    garage_query = (
        CarBlueprint.query
        .join(Garage)
        .options(joinedload('categories').joinedload('specs'))
        .filter(CarBlueprint.garage_id == id, Garage.user_id == 1)
        .all()
    )
    
    garage = Garage.query.filter_by(id=id).first()

    blueprints = []
    
    for blueprint in garage_query:
        bp_dict = {
            'id': blueprint.id,
            'name': blueprint.name,
            'imageUrl': blueprint.image_url,
            'garage_id': id,
            'categories': {},
            'specs': []
        }

        for category in blueprint.categories:
            category_dict = {
                'id': category.id,
                'name': category.name,
                'blueprintId': category.blueprint_id
            }
            bp_dict['categories'][category.id] = category_dict
            bp_dict['specs'].extend(
                {'id': spec.id, 'name': spec.name, 'category_id': spec.category_id}
                for spec in category.specs
            )

        blueprints.append(bp_dict)
        

    return jsonify({'garage': {'name': garage.name}, 'blueprints': blueprints, "user" :[user_id, garage_id]})