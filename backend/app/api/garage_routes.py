# pylint: disable=missing-module-docstring
from flask import Blueprint
from app.models import Garage, Blueprint as CarBlueprints, Category


garage_routes = Blueprint('garage', __name__)


@garage_routes.route('/<int:id>/blueprints', methods=['GET'])
def get_garage_blueprints(id):
    garage = Garage.query.get(id)

    print('garage  ', garage.eager_load())

    return {'garage':garage.eager_load()}
