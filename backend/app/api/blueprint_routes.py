# pylint: disable=missing-module-docstring
from flask import Blueprint, jsonify, request
from app.models import BluePrint as CarBlueprint, Category, db


blueprint_routes = Blueprint("blueprints", __name__)


# create blueprint 
@blueprint_routes.route("", methods=['POST'])
def create_blueprint():
    data = request.form
    
    blueprint = CarBlueprint(name=data['name'],
                             image_url=data['media'],
                             garage_id=data['associationId'])
    
    db.session.add(blueprint)
    db.session.commit()
    
    return jsonify({"blueprint": blueprint.to_dict()})


# update blueprint
@blueprint_routes.route('/<int:id>', methods=['PUT', 'PATCH'])
def update_blueprint(id):
    data = request.form
    blueprint = CarBlueprint.query.filter(CarBlueprint.id == id,
                                          CarBlueprint.garage_id
                                          == data['associationId']).first()
    
    if (blueprint):
        if (data['name']):
            blueprint.name = data['name']
        if (data['media']):
            blueprint.image_url = data['media']
        
        db.session.commit()
        return jsonify({"blueprint": blueprint.to_dict()})
    
    else:
        return jsonify({"message": f"No blueprint found with ID {id}"})
    
# delete blueprint
@blueprint_routes.route('/<int:id>', methods=['DELETE'])
def delete_blueprint(id):
    blueprint = CarBlueprint.query.get(id)
    
    if (blueprint):
        db.session.delete(blueprint)
        db.session.commit()
        
        return jsonify({"blueprintId": id, "deleted": True})
        
    else:
        return jsonify({"message": f"No blueprint found with id {id}."})

# get blueprint categories
@blueprint_routes.route("/<int:id>/categories", methods=["GET"])
def blueprint_categories(id):
    blueprint_categories = Category.query.filter_by(blueprint_id=id).all()

    blueprint_categories = [
        blueprint_category.to_dict() for
        blueprint_category in blueprint_categories
    ]

    return jsonify({"blueprint_categories": blueprint_categories})
