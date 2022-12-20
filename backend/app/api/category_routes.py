# pylint: disable=missing-module-docstring
from flask import Blueprint
from app.models import Project


category_blueprints = Blueprint("blueprints", __name__)


@category_blueprints.route("/<int:id>/projects", methods=["GET"])
def blueprint_projects(id):
    category_projects = Project.query.filter_by(category_id=id).all()

    print("garage  ", category_projects.to_dict())

    return {"category_projects": category_projects.to_dict()}
