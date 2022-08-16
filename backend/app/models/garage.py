from .db import db


class Garage(db.Model):
    __tablename__ = 'garages'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    blueprints = db.relationship('Blueprint', backref='garages')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'blueprints': [blueprint.to_dict()
                           for blueprint in self.blueprints]
        }
