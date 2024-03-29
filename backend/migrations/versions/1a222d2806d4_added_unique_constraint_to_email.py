"""added unique constraint to email

Revision ID: 1a222d2806d4
Revises: 028864b6d5b2
Create Date: 2023-06-27 23:26:48.025044

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1a222d2806d4'
down_revision = '028864b6d5b2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('uq_email', 'users', ['email'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('uq_email', 'users', type_='unique')
    # ### end Alembic commands ###
