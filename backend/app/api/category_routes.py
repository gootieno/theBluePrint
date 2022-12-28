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

    return jsonify({"category": category})
