# pylint: disable=missing-function-docstring
from .db import db


class Category(db.Model):
    __tablename__ = 'categories'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    blueprint_id = db.Column(db.Integer, db.ForeignKey('blueprints.id'), nullable=False)
    
    specs = db.relationship('Spec', backref='categories', lazy=True)
    projects = db.relationship('Project', backref='categories', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            'blueprintId': self.blueprint_id
        }