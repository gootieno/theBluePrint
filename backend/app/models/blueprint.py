from .db import db


class Blueprint(db.Model):
    __tablename__ = 'blueprints'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    image_url = db.Column(db.String, nullable=False)
    garage_id = db.Column(db.Integer, db.ForeignKey(
        'garages.id'), nullable=False)

    

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            'imageUrl': self.image_url,
        }
