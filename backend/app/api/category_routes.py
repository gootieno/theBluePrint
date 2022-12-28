# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Project, Category, db


category_routes = Blueprint("categories", __name__)


# create blueprint categories
@category_routes.route("/", methods=["POST"])
def create_category():
    data = request.json

    category = Category(name=data["name"], blueprint_id=data["blueprintId"])
    db.session.add(category)
    db.session.commit()

    return jsonify(category.to_dict())


# update blueprint category
@category_routes.route("/<int:id>", methods=["PUT", "PATCH"])
def update_category(id):
    data = request.json

    blueprint_id = data["blueprintId"]
    updated_name = data["name"]

    category = Category.query.get(id)

    if category:
        if blueprint_id:
            category.blueprint_id = blueprint_id

        if updated_name:
            category.name = updated_name

        db.session.commit()

    return jsonify(category.to_dict())
