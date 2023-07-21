## PYTHON FLASK CALENDAR
https://code-boxx.com/calendar-events-python-flask/

## NOTES
1) Run `unpack.bat` (Windows) `unpack.sh` (Linux/Mac). This will automatically:
   - Create a `templates` folder, move `S4A_calendar.html` inside.
   - Create a `static` folder, move `S4B_calendar.js` and `S4C_calendar.css` inside.
   - Create a virtual environment - `virtualenv venv`.
   - Activate the virtual environment - `venv\scripts\activate` (Windows) `venv/bin/activate` (Mac/Linux)
   - Install Flask - `pip install flask`
   - Run `py S1B_create.py` to create the database.
   - Run `py S3_server.py` to start the server.
2) Access `http://localhost` in your browser.

## LICENSE
Copyright by Code Boxx

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.