from app.models import Spec, db


def seed_vr4():
    boost_controller = Spec(name='Aem Boost Controller', category_id=3)
    fuel_pump = Spec(name='Aem Fuel Pump', category_id=3)
    shifter = Spec(name='Groot Shifter Swag', category_id=1)

    db.session.add(boost_controller)
    db.session.add(fuel_pump)
    db.session.add(shifter)
    db.session.commit()


def seed_evo():
    sound_system = Spec(name='Boost Speakies', category_id=1)
    big_turbo = Spec(name='16G Turbo', category_id=3)
    lip_kit = Spec(name='JDM Lip Kit', category_id=2)

    db.session.add(sound_system)
    db.session.add(big_turbo)
    db.session.add(lip_kit)

    db.session.commit()


def seed_specs():
    seed_vr4()
    seed_evo()


def undo_specs():
    db.session.execute('TRUNCATE specs RESTART IDENTITY CASCADE;')
    db.session.commit()
