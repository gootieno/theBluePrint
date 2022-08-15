from flask import Blueprint
from flask_login import login_required
from app.models import Garage

garage_routes = Blueprint('blueprints', __name__)


@garage_routes.route('/<int:id>/blueprints')
def load_garage(id):
    garage = Garage.query.all()
    return {'garage': [garageItem.to_dict() for garageItem in garage]}
