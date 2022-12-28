# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Step, db


step_routes = Blueprint("steps", __name__)


# create project steps
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

# delete step 
@step_routes.route('/<int:id>', methods=['DELETE'])
def delete_step(id):
    
    step = Step.query.get(id)
    
    if step:
        db.session.delete(step)
        db.session.commit()
        
        return jsonify({'deleted': True})
    
    else:
        return jsonify({'deleted': False, 'message': 'No step found'})