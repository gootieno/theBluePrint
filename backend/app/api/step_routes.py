# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Step, db


step_routes = Blueprint("steps", __name__)


@step_routes.route("/", methods=["POST"])
def create_step():
    data = request.json

    step = Step(
        title=data["title"],
        description=data["description"],
        media=data["media"],
        project_id=data["projectId"],
    )

    db.session.add(step)
    db.session.commit()

    return jsonify(step.to_dict())
