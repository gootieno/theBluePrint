from app.models import db, Category


def seed_vr4():
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


def seed_evo():
    interior = Category(
        name='Interior',
        blueprint_id=2)

    exterior = Category(name='Exterior',
                        blueprint_id=2)

    mods = Category(name='Engine Mods',
                    blueprint_id=2)

    db.session.add(interior)
    db.session.add(exterior)
    db.session.add(mods)

    db.session.commit()


def seed_categories():
    seed_vr4()
    seed_evo()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
