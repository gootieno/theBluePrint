# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Project, Category, Spec, db


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


# delete category
@category_routes.route("/<int:id>", methods=["DELETE"])
def delete_category(id):

    category = Category.query.get(id)

    if category:
        db.session.delete(category)
        db.session.commit()

        return jsonify({"deleted": True})
    else:
        return jsonify({"deleted": False, "message": "No category found"})


# get category projects
@category_routes.route("/<int:id>/projects", methods=["GET"])
def category_projects(id):
    category_projects = Project.query.filter_by(category_id=id).all()

    projects = [
        category_project.to_dict() for category_project in category_projects
    ]

    return jsonify({"category_projects": projects})


# get category specs
@category_routes.route("/<int:id>/specs", methods=["GET"])
def category_specs(id):
    category_specs = Spec.query.filter_by(category_id=id).all()

    specs = [category_spec.to_dict() for category_spec in category_specs]

    return jsonify(specs.to_dict())
