# (A) INIT
# (A1) LOAD MODULES
import sys

import S2_lib as evt
from flask import Flask, make_response, render_template, request

# (A2) FLASK SETTINGS + INIT
HOST_NAME = "localhost"
HOST_PORT = 80
app = Flask(__name__)
# app.debug = True

# (B) ROUTES
# (B1) CALENDAR PAGE
@app.route("/", methods=["GET", "POST"])
def index():
  return render_template("S4A_calendar.html")

# (B2) ENDPOINT - GET EVENTS
@app.route("/get/", methods=["POST"])
def get():
  data = dict(request.form)
  events = evt.get(int(data["month"]), int(data["year"]))
  return "{}" if events is None else events

# (B3) ENDPOINT - SAVE EVENT
@app.route("/save/", methods=["POST"])
def save():
  data = dict(request.form)
  ok = evt.save(data["s"], data["e"], data["t"], data["c"], data["b"], data["id"] if "id" in data else None)
  msg = "OK" if ok else sys.last_value
  return make_response(msg, 200)

# (B4) ENDPOINT - DELETE EVENT
@app.route("/delete/", methods=["POST"])
def delete():
  data = dict(request.form)
  ok = evt.delete(data["id"])
  msg = "OK" if ok else sys.last_value
  return make_response(msg, 200)

# (C) START
if __name__ == "__main__":
  app.run(HOST_NAME, HOST_PORT)