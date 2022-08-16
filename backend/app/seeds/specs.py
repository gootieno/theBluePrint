from app.models import Spec, db


def seed_specs():
    boost_controller = Spec(name='Aem Boost Controller', category_id=3)

    db.session.add(boost_controller)
    db.session.commit()


def undo_specs():
    db.session.execute('TRUNCATE specs RESTART IDENTITY CASCADE;')
    db.session.commit()
