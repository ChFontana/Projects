mkdir -m 777 templates
mkdir -m 777 static
mv ./S4A_calendar.html ./templates
mv ./S4B_calendar.js ./static
mv ./S4C_calendar.css ./static
virtualenv venv
source "venv/bin/activate"
pip install flask
python S1B_create.py
python S3_server.py