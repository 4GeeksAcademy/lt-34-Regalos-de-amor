from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    
    def __repr__(self):

        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active" : self.is_active,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Foundation(db.Model):
    id = db.Column (Integer, primary_key=True)
    name = db.Column(String(250), nullable=False)
    description = db.Column(String(250), nullable=False)
    country= db.Column(String(250), nullable=False)
    email = db.Column(String(250), nullable=False)
    password = db.Column(String(250), nullable=False)


    def __repr__(self):
        return '<Foundation %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "country": self.country,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Beneficiary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    wish_gift = db.Column(db.String(250))
    history = db.Column(db.String(250))
    account = db.Column(db.String(250), nullable=False)
    image_url = db.Column(db.String(255))  
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Beneficiary %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "wish_gift": self.wish_gift,
            "history": self.history,
            "account": self.account,
            "image_url": self.image_url,
            "is_active": self.is_active
        }

class Donor(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    last_name = db.Column(db.String(255), nullable=True)  
    email = db.Column(db.String(255), unique=True, nullable=False) 
    password = db.Column(db.String(255), nullable=False) 
    image_url = db.Column(db.String(255)) 
    is_active = db.Column(db.Boolean(), default=True, nullable=True) 

    def __repr__(self):
        return f'<Donor {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "image_url" : self.image_url,
            "is_active": self.is_active
        }

