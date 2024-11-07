import base64
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from base64 import b64decode
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

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
            # do not serialize the password, its a security breach
        }

class Foundation(db.Model):
    __tablename__ = 'foundation'
    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(250), nullable=False)
    description = db.Column(String(250), nullable=False)
    country = db.Column(String(250), nullable=False)
    email = db.Column(String(250), nullable=False)
    password = db.Column(String(250), nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)  # Agregar default=True

    # Relationship with Beneficiary
    beneficiaries = relationship("Beneficiary", backref="related_foundation", cascade="all, delete-orphan")
    
    def __repr__(self):
        return '<Foundation %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "country": self.country,
            "email": self.email,
            "is_active": self.is_active 
            # do not serialize the password, its a security breach
        }

class Beneficiary(db.Model):
    __tablename__ = 'beneficiary'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    wish_gift = db.Column(db.String(250))
    history = db.Column(db.String(250))
    account = db.Column(db.String(250), nullable=False)
    image = db.Column(db.LargeBinary, nullable=True)  # Definición correcta de `image`
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    foundation_id = db.Column(db.Integer, ForeignKey('foundation.id'), nullable=False)

    def __repr__(self):
        return f'<Beneficiary {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "wish_gift": self.wish_gift,
            "history": self.history,
            "account": self.account,
            "is_active": self.is_active,
            "image": base64.b64encode(self.image).decode('utf-8') if self.image else None,
            "foundation_id": self.foundation_id
        }

class Donor(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    last_name = db.Column(db.String(255), nullable=True)  
    email = db.Column(db.String(255), unique=True, nullable=False) 
    password = db.Column(db.String(255), nullable=False) 
    is_active = db.Column(db.Boolean(), default=True, nullable=False) 

    def __repr__(self):
        return f'<Donor {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "is_active": self.is_active
        }
    

class PostHelp(db.Model):  
    __tablename__ = 'post_help'
    id = db.Column(Integer, primary_key=True)
    id_foundation = db.Column(Integer, ForeignKey('foundation.id'))
    id_beneficiary = db.Column(Integer, ForeignKey('beneficiary.id'))

    def __repr__(self):
        return f'<Donor {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_foundation": self.id_foundation,
            "id_beneficiary": self.id_beneficiary,

        }
    

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    payment_id = db.Column(db.String(100), nullable=False)
    payer_id = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)


    def __repr__(self):
        return f'<Transaction {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "payment_id": self.payment_id,
            "payer_id" : self.payer_id,
            "amount" : self.amount         
        }

    
    
