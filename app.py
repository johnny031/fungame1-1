import os
import requests
import random

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

clicked = []
blue = 9
red = 8

@app.route("/")
def index():
    r=[]
    c=[]

    for i in range(334):
        r.append(i)
    for i in range(25):
        c.append(i)

    random.shuffle(r)
    random.shuffle(c)

    w = r[:25]
    return render_template("index.html", w=w, c=c)

@app.route("/main")
def go():
    w = request.args.getlist("w")
    c = request.args.getlist("c")
    return render_template("main.html",w=w,c=c,clicked=clicked,blue=blue,red=red)


@socketio.on("on click")
def click(data1, data2, data3):
    clicked.append(data1["info"])
    global blue, red
    blue -= data2["blue"]
    red -= data3["red"]
    emit("do things", {'clicked':clicked, 'blue':blue,'red':red}, broadcast=True)

@socketio.on("clear")
def clear():
    clicked.clear()
    global blue, red
    blue = 9
    red = 8
    emit("clear all", broadcast=True)

if __name__ == '__main__':
    socketio.run(app)