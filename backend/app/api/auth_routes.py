from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import set_access_cookies
from flask_jwt_extended import jwt_required
from app.models import User

auth_routes = Blueprint('auth', __name__)


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    user = User.query.filter(User.email == email).first()
   
    if user is None:
        return jsonify({'message': "No user with the provided email address"}), 401
        
    if user and not user.check_password(password):
        return {"message": "The provided password is incorrect"}
    if user and user.check_password(password):
        access_token = create_access_token(identity=email)
        set_access_cookies(access_token)
        return jsonify(access_token=access_token)