# pylint: disable=missing-module-docstring
from app.models import BluePrint as CarBlueprint
from sqlalchemy.orm import subqueryload
from flask import Blueprint
from collections import defaultdict

garage_routes = Blueprint('garage', __name__)


# get garage blueprints, specs and categories
@garage_routes.route('/<int:id>/blueprints', methods=['GET'])
def get_garage_blueprints(id):
   
    garage_query = CarBlueprint.query \
    .options(subqueryload('categories').subqueryload('specs')) \
    .filter(CarBlueprint.garage_id == id) \
    .all()
    

    bp_dict = defaultdict(lambda: {
        'id': None,
        'name': None,
        'imageUrl': None,
        'garage_id': None,
        'categories': defaultdict(lambda: {
            'id': None,
            'name': None,
            'blueprintId': None
        }),
        'specs': []
    })
    

    for bp in garage_query:
        bp_dict[bp.id]['id'] = bp.id
        bp_dict[bp.id]['name'] = bp.name
        bp_dict[bp.id]['imageUrl'] = bp.image_url
        bp_dict[bp.id]['garage_id'] = bp.garage_id

        for category in bp.categories:
            bp_dict[bp.id]['categories'][category.id]['id'] = category.id
            bp_dict[bp.id]['categories'][category.id]['name'] = category.name
            bp_dict[bp.id]['categories'][category.id]['blueprintId'] = category.blueprint_id
                    
            for spec in category.specs:
                bp_dict[bp.id]['specs'].append({
                    'id': spec.id,
                    'name': spec.name,
                    "category_id": spec.category_id
                })

    blueprints = list(bp_dict.values())
    return {'blueprints': blueprints}
