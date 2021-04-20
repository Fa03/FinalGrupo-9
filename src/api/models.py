from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String

db = SQLAlchemy()

class Categoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Categoria %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }

class Pago(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Pago %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    direccion = db.Column(db.String(250), unique=False, nullable=False)
    telefono = db.Column(db.Integer(), unique=False, nullable=False)
    metodo_pago = db.Column(String(80), db.ForeignKey('pago.nombre'))
    pago = db.relationship(Pago)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "direccion": self.direccion,
            "telefono": self.telefono,
            # do not serialize the password, its a security breach
        }

class Productos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    catego_prod = db.Column(String(80), db.ForeignKey('categoria.nombre'))
    categoria = db.relationship(Categoria)
    precio = db.Column(db.Integer(), unique=False, nullable=False)
    detalles = db.Column(db.String(250), unique=False, nullable=False)
    imagen = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return '<Productos %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "categoria": self.categoria,
            "precio": self.precio,
            "detalles": self.detalles,
            "imagen": self.imagen,
        }