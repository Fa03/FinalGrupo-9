"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Productos, Categoria, Pago
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

# CATEGORIA
@api.route('/cate/', methods=['GET'])
def get_cate():

    cate = Categoria.query.all()
    all_cate = list(map(lambda x: x.serialize(), cate))

    return jsonify(all_cate), 200

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
    prod = Productos(nombre=request_body["nombre"], precio=request_body["precio"], detalles=request_body["detalles"], categoria=request_body["categoria"], imagen=request_body["imagen"])

    db.session.add(prod)
    db.session.commit()

    return jsonify("Success!"), 200