from app.models import Project, db


# Adds a demo user, you can add other users here if you want
def seed_projects():
    project = Project(name="AEM Install", completed=False,
                      category_id=1, blueprint_id=1)

    db.session.add(project)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_projects():
    db.session.execute("TRUNCATE projects RESTART IDENTITY CASCADE;")
    db.session.commit()
