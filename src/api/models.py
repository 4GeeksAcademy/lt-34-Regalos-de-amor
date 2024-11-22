import base64
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from base64 import b64decode
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime



db = SQLAlchemy()

class Foundation(db.Model):
    __tablename__ = 'foundation'
    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(250), nullable=False)
    description = db.Column(String(250), nullable=False)
    image_url = db.Column(db.String(250), nullable=True)  # Definición correcta de `image`
    country = db.Column(String(250), nullable=False)
    email = db.Column(String(250), nullable=False)
    password = db.Column(String(250), nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)  # Agregar default=True

    # Relationship with Beneficiary
    beneficiaries = relationship("Beneficiary", backref="related_foundation", cascade="all, delete-orphan")

    # donor = db.relationship('Donor', back_populates='foundation', lazy='dynamic')

    donor_id = db.Column(db.Integer, ForeignKey('donor.id'), nullable=True)

    def __repr__(self):
        return '<Foundation %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "image_url": self.image_url,
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
    image = db.Column(db.String(250), nullable=True)  # Definición correcta de `image`
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
            "image": self.image,
            "foundation_id": self.foundation_id
        }

class Donor(db.Model): 
    __tablename__ = 'donor'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=True)
    last_name = db.Column(db.String(255), nullable=True)  
    email = db.Column(db.String(255), unique=True, nullable=False) 
    password = db.Column(db.String(255), nullable=False) 
    is_active = db.Column(db.Boolean(), default=True, nullable=False) 

    # Relationship with Foundation
    foundation = relationship("Foundation", backref="related_donor", cascade="all, delete-orphan")

    def __repr__(self):
        return f'<Donor {self.first_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "is_active": self.is_active
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
    
class Donation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    donor_id = db.Column(db.Integer, db.ForeignKey('donor.id'), nullable=False)
    foundation_id = db.Column(db.Integer, db.ForeignKey('foundation.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    donor = db.relationship('Donor', backref=db.backref('donations', lazy=True))
    foundation = db.relationship('Foundation', backref=db.backref('donations', lazy=True))

    def __repr__(self):
        return f'<Donation {self.donor.name}'
    
    def serialize(self):
        return {
            "id": self.id,
            "donor_id": self.donor_id,
            "foundation_id": self.foundation_id,
            "amount": self.amount,
            "created_at": self.created_at
        }


class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    foundation_id = db.Column(db.Integer, db.ForeignKey('foundation.id'), nullable=False)
    message = db.Column(db.String(255), nullable=False)
    is_read = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    foundation = db.relationship('Foundation', backref=db.backref('notifications', lazy=True))

    def __repr__(self):
        return f'<Notification for {self.foundation.name}'
    
    
    def serialize(self):
        return {
            "id": self.id,
            "foundation_id": self.foundation_id,
            "message": self.message,
            "is_read": self.is_read,
            "created_at": self.created_at
        }