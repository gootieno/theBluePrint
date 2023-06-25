from app.models import User, db
from flask_bcrypt import generate_password_hash


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Han', email='demo@aa.io',
        hashed_password=hash_password('password'))
    john = User(
        username='JohnDoe', email='john@aa.io',
        hashed_password=hash_password('password'))
    jane = User(
        username='JaneDoe', email='jane@aa.io',
        hashed_password=hash_password('password'))

    db.session.add(demo)
    db.session.add(john)
    db.session.add(jane)

    db.session.commit()
    
def hash_password(password):
    hashed_password = generate_password_hash(password, 10)
    return hashed_password
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
