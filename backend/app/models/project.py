from .db import db


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50),  nullable=False)
    completed = db.Column(db.Boolean, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(
        'categories.id'), nullable=False)

    categories = db.relationship('Category', backref='projects')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'completed': self.completed,
        }
