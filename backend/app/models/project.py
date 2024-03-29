from .db import db


class Project(db.Model):
    __tablename__ = 'projects'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    completed = db.Column(db.Boolean, default=False)
    blueprint_id = db.Column(db.Integer, db.ForeignKey('blueprints.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    steps = db.relationship('Step', backref='projects', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'completed': self.completed,
            'blueprint_id': self.blueprint_id,
            'category_id': self.category_id
        }
