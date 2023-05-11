# pylint: disable=missing-module-docstring
from .blueprint import BluePrint
from .db import db


class Garage(db.Model):
    __tablename__ = 'garages'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    blueprints = db.relationship('BluePrint', backref='garages', lazy=True)

    def to_dict(self):
        return {"id": self.id, "name": self.name}


    