# pylint: disable=missing-module-docstring
from flask import Blueprint
from app.models import Project


category_routes = Blueprint("categories", __name__)


@category_routes.route("/<int:id>/projects", methods=["GET"])
def blueprint_projects(id):
    category_projects = Project.query.filter_by(category_id=id).all()

    category_projects = [
        category_project.to_dict() for category_project in category_projects
    ]

    print("garage  ", category_projects)

    return {"category_projects": category_projects}
