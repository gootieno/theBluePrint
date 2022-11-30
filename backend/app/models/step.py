# pylint: disable=too-few-public-methods
from .db import db


class Step(db.Model):
    __tablename__ = "steps"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    media = db.Column(db.ARRAY(db.String), nullable=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)

    projects = db.relationship("Project", backref="steps")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "media": self.media,
        }
