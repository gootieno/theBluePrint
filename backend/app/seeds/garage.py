from app.models import db, Garage


# Adds a demo user, you can add other users here if you want
def seed_garage():
    garage = Garage(
        name="Han's Garage", user_id=1)

    db.session.add(garage)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_garage():
    db.session.execute('TRUNCATE garages RESTART IDENTITY CASCADE;')
    db.session.commit()
