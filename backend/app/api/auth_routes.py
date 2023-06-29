from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, set_access_cookies
from app.models import User, Garage

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
        
    if user is not None and not user.check_password(password):
        return {"message": "The provided password is incorrect"}
    
    if user and user.check_password(password):
        garage = Garage.query.filter(Garage.user_id == user.id).first()
        additional_claims  = {"garage_id":garage.id,  "user_id":user.id}
        access_token = create_access_token(identity=email, additional_claims=additional_claims)
        response = jsonify({"message": "login successful", "garage_id": garage.id})
        set_access_cookies(response, access_token)
        return response