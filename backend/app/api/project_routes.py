# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Project, db


project_routes = Blueprint("projects", __name__)


# create category projects
@project_routes.route("/", methods=["POST"])
def create_project():
    data = request.json

    project = Project(
        name=data["name"], completed=data["completed"], category_id=data["categoryId"]
    )

    db.session.add(project)
    db.session.commit()

    return jsonify(project.to_dict())

