from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    blueprint_id = db.Column(db.Integer, db.ForeignKey(
        'blueprints.id'), nullable=False)

    specs = db.relationship('Spec', backref='categories')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            'specs': [spec.to_dict() for spec in self.specs]}
