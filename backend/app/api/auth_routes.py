from flask import Blueprint, request, jsonify, make_response
from flask_jwt_extended import create_access_token, set_access_cookies
from flask_jwt_extended import jwt_required, get_jwt_identity,unset_jwt_cookies
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
        response = jsonify({"message": "login successful", "garage_id": garage.id, "authenticated": True})
        set_access_cookies(response, access_token)
        return response
    
    
@auth_routes.route("/logout", methods=["DELETE"])
def logout():
    response = jsonify({"message": "logout successful"})
    unset_jwt_cookies(response)
    return response


@auth_routes.route('/refresh_token', methods=['POST'])
@jwt_required()  # Requires a valid access token
def refresh_token():
    current_user = get_jwt_identity()
    new_token = create_access_token(identity=current_user)

    # Set new access token as a cookie
    response = make_response(jsonify(access_token=new_token, authenticated=True, message="login successful"))
    set_access_cookies(response, new_token)

    return response, 200