from .db import db


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50),  nullable=False)
    completed = db.Column(db.Boolean, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(
        'categories.id'), nullable=False)
    blueprint_id = db.Column(db.Integer, db.ForeignKey('blueprints.id'), nullable=False)

    categories = db.relationship('Category', backref='projects')
    blueprints = db.relationship('Blueprint', backref='projects')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'completed': self.completed,
            'blueprint_id': self.blueprint_id,
            'category_id': self.category_id
        }
