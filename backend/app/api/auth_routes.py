from app.models import User
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token

auth_routes = Blueprint('auth', __name__)

@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    
    user = User.query.filter(User.email == email).first()
   
    if user and user.check_password(password):
        access_token = create_access_token(identity=email)
        return {'user':user.to_dict(), 'access_token':access_token}
    elif user is None:
        raise ValueError("Wrong email provided")
    else:
        raise ValueError("Wrong password provided") 
