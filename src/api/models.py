from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
  
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
            # do not serialize the password, its a security breach
        }
    
class Beneficiary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    wish_gift = db.Column(db.String(250))
    history = db.Column(db.String(250))
    account = db.Column(db.String(250), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # picture = db.Column(db.String(250))
    # foundation_id= db.Column(db.Integer, db.ForeignKey('foundation.id'), nullable=True)
    # foundations = relationship(Foundation)

    
    def __repr__(self):
        return '<Beneficiary %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "name" : self.name,
            "wish_gift" : self.wish_gift,
            "history" : self.history,
            "account" : self.account,
            "is_active" : self.is_active
            # "picture" : self.picture
            # do not serialize the password, its a security breach
        }