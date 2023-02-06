# pylint: disable=missing-module-docstring
from app.models import Blueprint as CarBlueprint
from app.models import Garage
from flask import Blueprint

garage_routes = Blueprint('garage', __name__)


# get garage blueprints, specs and categories
@garage_routes.route('/<int:id>/blueprints', methods=['GET'])
def get_garage_blueprints(id):
    garage = Garage.query.get(id)

    print('garage  ', garage.eager_load())

    return {'garage':garage.eager_load()}
