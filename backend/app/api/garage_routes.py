# pylint: disable=redefined-builtin
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Garage

from sqlalchemy.orm import joinedload


garage_routes = Blueprint('blueprints', __name__)


@garage_routes.route('/<int:id>/blueprints', methods=['GET'])
def get_garage_blueprints(id):
    garage = Garage.query.filter(Garage.user_id == id).all()

    garage_blueprints = [garage_blueprint.to_dict()
                         for garage_blueprint in garage]

    return jsonify({"garage": garage_blueprints[0]})
