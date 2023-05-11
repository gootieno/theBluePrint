# pylint: disable=missing-module-docstring
from app.models import BluePrint as CarBlueprint
from app.models import Category, Garage, Spec
from flask import Blueprint

garage_routes = Blueprint('garage', __name__)


# get garage blueprints, specs and categories
@garage_routes.route('/<int:id>/blueprints', methods=['GET'])
def get_garage_blueprints(id):
    garage = Garage.query.get(id)
   
    blueprint = Blueprint.query.options(
    joinedload(Blueprint.categories).joinedload(Category.specs)
    ).filter_by(id=1).first()

    print('garage ', blueprint)
    return {'garage':garage.load_blueprints()}
