# pylint: disable=missing-module-docstring
from app.models import BluePrint as CarBlueprint, Garage
from sqlalchemy.orm import joinedload
from flask_jwt_extended import jwt_required, get_jwt
from flask import Blueprint, jsonify

garage_routes = Blueprint('garage', __name__)


# get garage blueprints, specs and categories
@garage_routes.route('/<int:id>', methods=['GET'])
@jwt_required()
def get_garage_blueprints(id):
    
    claims = get_jwt()
    
    user_id = claims["user_id"]
    
    garage = Garage.query.filter_by(id=id).first()
    
    #eager loading categories and specs. All models needed to display garage on login and refresh. 
    garage_query = (
        CarBlueprint.query
        .join(Garage)
        .options(joinedload('categories').joinedload('specs'))
        .filter(CarBlueprint.garage_id == id, Garage.user_id == user_id)
        .all()
    )
    

    blueprints = {}
    categories = {}
    specs = {}

    for bp in garage_query:
        blueprint_id = bp.id
        blueprints[blueprint_id] = bp.to_dict()

        for category in bp.categories:
            category_id = category.id
            categories[category_id] = category.to_dict()

            for spec in category.specs:
                spec_id = spec.id
                specs[spec_id] = spec.to_dict()
        

    return jsonify({
        'blueprints': blueprints,
        'categories': categories,
        'specs': specs,
        'garage': {'name': garage.name, 'id': garage.id}
    }), 200