# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Spec, db


spec_routes = Blueprint("specs", __name__)

# create spec
@spec_routes.route('', methods=['POST'])
def create_spec():
    data = request.form
    spec = Spec(name=data['name'], category_id=data['associationId'])
    
    db.session.add(spec)
    db.session.commit()
    return jsonify({'spec': spec.to_dict()})

# update spec
@spec_routes.route('/<int:id>', methods=['PUT', 'PATCH'])
def update_spec(id):
    data = request.form
    spec = Spec.query.filter(Spec.id == id,
                             Spec.category_id == data['associationId']).first()
    
    if (spec):
        spec.name = data['name']
        db.session.commit()
        return jsonify({"spec": spec.to_dict()})
    
# delete spec
@spec_routes.route('<int:id>', methods=['DELETE'])
def delete_spec(id):
    spec = Spec.query.get(id)
    db.session.delete(spec)
    db.session.commit()
    return jsonify({"deleted": True, 'specId': id})