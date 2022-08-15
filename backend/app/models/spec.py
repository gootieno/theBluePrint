from .db import db


class Spec(db.Model):
    __tablename__ = 'specs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    categories = db.relationship('Category', backref='specs')

    def to_dict(self):
        return {
            'id':  self.id,
            'name': self.name,
        }
