from flask import Blueprint, request
from flask_jwt_extended import create_access_token
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
        return {'message': "No user with the provided email address"}
        
    if user and not user.check_password(password):
        return {"message": "The provided password is incorrect"}    
    if user and user.check_password(password): 
        access_token = create_access_token(identity=email)
        return {'user':user.to_dict(), 'access_token':access_token}
