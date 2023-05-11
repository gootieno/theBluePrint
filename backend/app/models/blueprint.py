from .db import db


class BluePrint(db.Model):
    __tablename__ = 'blueprints'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    image_url = db.Column(db.String)
    garage_id = db.Column(db.Integer, db.ForeignKey('garages.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    projects = db.relationship('Project', backref='blueprints', lazy=True)
    categories = db.relationship('Category', backref='blueprints', lazy=True)


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            'imageUrl': self.image_url,
            'garage_id': self.garage_id
        }

