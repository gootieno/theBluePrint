from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Admin(db.Model):
  __tablename__ = 'admins'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(100), nullable=False)
  password = db.Column(db.String(100), nullable=False)

  def to_dict(self):
    return {
      id: self.id, 
      username: self.username
    }