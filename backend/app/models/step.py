# pylint: disable=too-few-public-methods
from .db import db


class Step(db.Model):
    __tablename__ = 'steps'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20))
    description = db.Column(db.Text)
    media = db.Column(db.ARRAY(db.String))
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "media": self.media,
        }
