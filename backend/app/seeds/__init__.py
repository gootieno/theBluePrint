from flask.cli import AppGroup

from .blueprint import seed_blueprints
from .users import seed_users, undo_users
from .garage import seed_garage, undo_garage
from .blueprint import seed_blueprints, undo_blueprints

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_garage()
    seed_blueprints()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_garage()
    undo_blueprints()
    # Add other undo functions here
