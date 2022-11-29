# pylint: disable=missing-module-docstring
from .db import db


class Garage(db.Model):
    __tablename__ = "garages"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    blueprints = db.relationship("Blueprint", backref="garages", lazy="joined")

    def to_dict(self):
        return {"id": self.id, "name": self.name}

    def eager_load(self):
        return {
            "id": self.id,
            "name": self.name,
            "imageUrl": self.image_url,
            "blueprints": [blueprint.to_dict() for blueprint in self.blueprints],
        }
