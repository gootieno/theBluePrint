import json
import os
from datetime import datetime, timedelta, timezone

from flask import Flask, redirect, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, get_jwt, get_jwt_identity
from flask_jwt_extended import set_access_cookies, create_access_token
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt

from .api.auth_routes import auth_routes
from .api.blueprint_routes import blueprint_routes
from .api.category_routes import category_routes
from .api.garage_routes import garage_routes
from .api.project_routes import project_routes
from .api.spec_routes import spec_routes
from .api.step_routes import step_routes
from .config import Config
from .models import db
from .seeds import seed_commands

print("app successfully running")


app = Flask(__name__)
app.config.from_object(Config)


# Setup JWT
jwt = JWTManager(app)
Bcrypt(app)

# Tell flask about our seed commands
app.cli.add_command(seed_commands)
app.register_blueprint(auth_routes, url_prefix="/api/auth")
app.register_blueprint(garage_routes, url_prefix="/api/garage")
app.register_blueprint(blueprint_routes, url_prefix="/api/blueprints")
app.register_blueprint(category_routes, url_prefix="/api/categories")
app.register_blueprint(project_routes, url_prefix="/api/projects")
app.register_blueprint(step_routes, url_prefix='/api/steps')
app.register_blueprint(spec_routes, url_prefix='/api/specs')

db.init_app(app)
Migrate(app, db, compare_type=True)

# Application Security
CORS(app)


@app.before_request
def https_redirect():
    if os.environ.get("FLASK_ENV") == "production":
        if request.headers.get("X-Forwarded-Proto") == "http":
            url = request.url.replace("http://", "https://", 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the
        # original response
        return response


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def react_root(path):
    if path == "favicon.ico":
        return app.send_static_file("favicon.ico")
    return app.send_static_file("index.html")



