# pylint: disable=missing-module-docstring
from flask import Blueprint, request, jsonify
from app.models import Step, db


step_routes = Blueprint("steps", __name__)


# create project steps
@step_routes.route("", methods=["POST"])
def create_step():
    data = request.form

    # print('request form files ', request.files)
    step = Step(
        title=data["title"],
        description=data["description"],
        media=data['media'],
        project_id=data["projectId"],
    )

    db.session.add(step)
    db.session.commit()

    return jsonify({'step':step.to_dict()})

# update step
@step_routes.route("/<int:id>", methods=['PUT', 'PATCH'])
def update_step(id):
    data = request.form
    
    step = Step.query.filter(Step.id == id, Step.project_id == data['projectId']).first()
    
    if (step):
        if (data['title']):
            step.title = data['title']
        if (data['description']):
            step.description = data['description']
        if (data['media']):
            step.media = data['media']
            
        db.session.commit()
        return jsonify({"step": step.to_dict()})

    else: 
        return jsonify({"step": {"message" : f"No step found with ID {id}"}})

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