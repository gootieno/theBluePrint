# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Spec, db


spec_routes = Blueprint("specs", __name__)

@spec_routes.route('', methods=['POST'])
def create_spec():
    data = request.form
    
    spec = Spec(name=data['name'], category_id=data['categoryId'])
    
    return jsonify({'spec': spec.to_dict()})