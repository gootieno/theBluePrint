from app.models import db, Category


def seed_categories():
    interior = Category(
        name='Interior',
        blueprint_id=1)

    exterior = Category(name='Exterior',
                        blueprint_id=1)

    performance = Category(name='Performance',
                           blueprint_id=1)

    db.session.add(interior)
    db.session.add(exterior)
    db.session.add(performance)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
