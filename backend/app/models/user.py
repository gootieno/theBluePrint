from .db import db
from sqlalchemy.schema import UniqueConstraint
from flask_bcrypt import check_password_hash, generate_password_hash


class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100))
    username = db.Column(db.String(50))
    hashed_password = db.Column(db.LargeBinary)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    garages = db.relationship('Garage', backref='users', lazy=True)
    
    __table_args__ = (UniqueConstraint('email', name='uq_email'),)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password, 10).decode('utf-8')

    def check_password(self, password):
        return check_password_hash(self.hashed_password.decode('utf-8'), password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
