from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class Foundation(db.Model):
    Foundation_ID = db.Column (Integer, primary_key=True)
    Name = db.Column(String(250), nullable=False)
    Description = db.Column(String(250), nullable=False)
    Country= db.Column(String(250), nullable=False)
    Email = db.Column(String(250), nullable=False)
    Password = db.Column(String(250), nullable=False)


    def __repr__(self):
        return '<Foundation %r>' % self.Name

    def serialize(self):
        return {
            "id": self.Foundation_ID,
            "Name": self.Name,
            "Description": self.Description,
            "Country": self.Country,
            "Email": self.Email,
            "Password": self.Password,
            # do not serialize the password, its a security breach
        }
    
