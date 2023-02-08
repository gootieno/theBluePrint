# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Project, Step, db


project_routes = Blueprint("projects", __name__)


# create category projects
@project_routes.route("", methods=["POST"])
def create_project():
    data = request.form

    completed = False
    if (data['completed'] == 'true'):
        completed = True
    
    project = Project(
        name=data["name"], completed=completed,
        category_id=data["categoryId"],
        blueprint_id=data['blueprintId']
    )

    db.session.add(project)
    db.session.commit()

    return jsonify({"project" : project.to_dict()})



# update project
@project_routes.route("/<int:id>", methods=["PUT", "PATCH"])
def update_project(id):
    data = request.form

    updated_name = data["name"]
    completed = True if data['completed'] == 'true' else False
    category_id = data["categoryId"]
 
    project = Project.query.filter_by(id=id, category_id=category_id).first()

    if updated_name:
        project.name = updated_name

    project.completed = completed

    db.session.add(project)
    db.session.commit()

    return jsonify({"updated_project": project.to_dict()})


# delete project
@project_routes.route("<int:id>", methods=["DELETE"])
def delete_project(id):
    project = Project.query.get(id)

    if project:
        db.session.delete(project)
        db.session.commit()

        return jsonify({"deleted": True})

    else:
        return jsonify({"deleted": False, "message": "No project found"})


# get project steps
@project_routes.route("/<int:id>/steps", methods=["GET"])
def get_project_steps(id):
    project_steps = Step.query.filter_by(project_id=id).all()

    steps = [project_step.to_dict() for project_step in project_steps]

    return jsonify({"steps": steps})
