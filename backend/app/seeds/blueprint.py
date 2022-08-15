from app.models import Blueprint, db


def seed_blueprints():
    blueprint = Blueprint(
        name="Mitsubishi 3000gt VR4", image_url="https://i.pinimg.com/originals/0c/26/c8/0c26c89223132796dfe3e2c1a50dc017.jpg", garage_id=1)
    db.session.add(blueprint)
    db.session.commit()


def undo_blueprints():
    db.session.execute('TRUNCATE garages RESTART IDENTITY CASCADE;')
    db.session.commit()
