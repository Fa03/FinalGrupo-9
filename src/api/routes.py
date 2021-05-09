"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Productos, Categoria, Pago, Ordenes
from api.utils import generate_sitemap, APIException
import datetime
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import json
import os
import stripe
stripe.api_key = "sk_test_51ImpXnCIKWo2E2PyhuzZh6aTtOiZDrc4Nw8C8NH0k5PZ7aAzZHWU7zCsDOD6rrKrAgVkHXRUfpcz7KtFTlZdLpd800qaV7kdYq"

api = Blueprint('api', __name__)

# USERS
@api.route('/users/', methods=['GET'])
def getUsers():

    user = User.query.all()
    all_user = list(map(lambda x: x.serialize(), user))

    return jsonify(all_user), 200

# CATEGORIA
@api.route('/cate/', methods=['GET'])
def get_cate():

    cate = Categoria.query.all()
    all_cate = list(map(lambda x: x.serialize(), cate))

    return jsonify(all_cate), 200

@api.route('/cate/', methods=['POST'])
def post_cate():

    request_body = request.get_json()
    cate = Categoria(nombre=request_body["nombre"])

    db.session.add(cate)
    db.session.commit()

    return jsonify("Categoria agregada!"), 200

# METODOS DE PAGO
@api.route('/pago/', methods=['GET'])
def get_pago():

    pago = Pago.query.all()
    all_pago = list(map(lambda x: x.serialize(), pago))

    return jsonify(all_pago), 200


# PRODUCTOS
@api.route('/productos/', methods=['GET'])
def get_prod():

    prod = Productos.query.all()
    all_prod = list(map(lambda x: x.serialize(), prod))

    return jsonify(all_prod), 200

@api.route('/productos/', methods=['POST'])
def post_prod():

    request_body = request.get_json()
    prod = Productos(nombre=request_body["nombre"], precio=request_body["precio"], detalles=request_body["detalles"], catego_prod=request_body["catego_prod"], imagen=request_body["imagen"])

    db.session.add(prod)
    db.session.commit()

    return jsonify("Producto agregado!"), 200

# REGISTER
@api.route('/register', methods=['POST'])
def regUser():

    body = request.get_json()
    print(body)

    email_query = User.query.filter_by(email=body["email"]).first()
    if email_query:
        return jsonify("Email ya en uso, utiliza otro"), 401

    user = User(
        nombre=body["nombre"],
        apellidos=body["apellidos"],
        nacimiento=body["nacimiento"],
        sexo=body["sexo"],
        telefono=body["telefono"],
        email=body["email"],
        password=body["password"]
        )

    db.session.add(user)
    db.session.commit()

    response = {
        "msg": "Usuario agregado correctamente",
        "email": body["email"]
    }
    return jsonify(response), 200

# NUEVA CONTRASEÑA
@api.route('/new_pass', methods=['PUT'])
def updPassword():

    upd_pass = request.json["password"]
    email = request.json["email"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        raise APIException('No existe usuario con ese correo', status_code=404)

    user.password=upd_pass
    print(user.password)
    
    db.session.commit()

    return jsonify("Contraseña actualizada"), 200

# LOGIN
@api.route('/login', methods=['POST'])
def userLogin():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if email is None:
        return jsonify({"msg": "Email requerido"}), 400
    if password is None:
        return jsonify({"msg": "Contraseña requerida"}), 400

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Email o contraseña equivocada"}), 401
    else:
        print(user)
        # create a new token with the user id inside
        access_token = create_access_token(identity=user.email)
        return jsonify({ "token": access_token, "email": user.email, "nombre": user.nombre }), 200


# RUTAS PROTEGIDAS

# CREAR NUEVA ORDEN
@api.route('/newOrder', methods=['POST'])
# @jwt_required
def createOrder():

    # user = get_jwt_identity()

    body = request.get_json()
    print(body)

    email_query = User.query.filter_by(email=body["usuario"]).first()
    if email_query is None:
        return jsonify("Usuario no existe, inicie sesión para crear orden"), 401

    orden = Ordenes(
        usuario=body["usuario"],
        productos=body["productos"],
        monto=body["monto"],
        dirección=body["dirección"],
        metodo=body["metodo"]
        )

    db.session.add(orden)
    db.session.commit()

    response = "Orden creada para usuario " + body["usuario"]

    return jsonify(response), 200

# GET ORDENES DE USUARIO
@api.route('/myOrders', methods=['POST'])
# @jwt_required
def getOrder():

    # userID = get_jwt_identity()
    email = request.json.get("email", None)

    orden = Ordenes.query.filter_by(usuario=email)

    if orden is None:
        return jsonify("Usuario no tiene órdenes creadas"), 401

    
    todas = list(map(lambda x: x.serialize(), orden))

    return jsonify(todas), 200
  

# PAGO STRIPE
@api.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        data = json.loads(request.data)
        intent = stripe.PaymentIntent.create(
            amount=1500,
            currency="usd",
            payment_method_types=["card"],
        )
        print(intent['client_secret'])
        return jsonify({
          "clientSecret": intent["client_secret"]
        }), 200
    except Exception as e:
        return jsonify(error=str(e)), 403
    