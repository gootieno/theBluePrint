from app.models import BluePrint, db


def seed_blueprints():
    mitsubishi_3000gt = BluePrint(
        name="Mitsubishi 3000gt VR4", image_url="https://i.pinimg.com/originals/0c/26/c8/0c26c89223132796dfe3e2c1a50dc017.jpg", garage_id=1)

    evo9 = BluePrint(
        name='Evo 9', image_url='https://the-blueprint.s3.us-west-1.amazonaws.com/user-media/evo9.jpg', garage_id=1)
    bmw_m3 = BluePrint(
        name="BMW M3", image_url='https://the-blueprint.s3.us-west-1.amazonaws.com/user-media/bmw-m3.jpeg', garage_id=1)
    db.session.add(mitsubishi_3000gt)
    db.session.add(evo9)
    db.session.add(bmw_m3)
    db.session.commit()


def undo_blueprints():
    db.session.execute('TRUNCATE garages RESTART IDENTITY CASCADE;')
    db.session.commit()
