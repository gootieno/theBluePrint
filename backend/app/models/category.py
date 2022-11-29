# pylint: disable=missing-function-docstring
from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    blueprint_id = db.Column(db.Integer, db.ForeignKey(
        'blueprints.id'), nullable=False)

    specs = db.relationship('Spec', backref='categories', lazy='joined')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            'blueprintId': self.blueprint_id
        }

    def eager_load(self):
        return {
            'id': self.id,
            'name': self.name,
            'blueprintId': self.blueprint_id,
            'specs': [spec.to_dict() for spec in self.specs]
        }
