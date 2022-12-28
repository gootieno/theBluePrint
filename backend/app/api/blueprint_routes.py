# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Category, db


blueprint_routes = Blueprint("blueprints", __name__)


# get blueprint categories
@blueprint_routes.route("/<int:id>/categories", methods=["GET"])
def blueprint_categories(id):
    blueprint_categories = Category.query.filter_by(blueprint_id=id).all()

    blueprint_categories = [
        blueprint_category.to_dict() for blueprint_category in blueprint_categories
    ]

    print("garage  ", blueprint_categories)

    return jsonify({"blueprint_categories": blueprint_categories})
