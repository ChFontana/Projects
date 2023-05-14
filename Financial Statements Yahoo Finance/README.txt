# Set the directory.
cd "./OneDrive/Documentos/GitHub/Projects/Financial Statements Yahoo Finance"

# Create an environment.
python -m venv .shinyenv

# Execute the environment.
. ./.shinyenv/Scripts/activate

# Install the requirements for the environment.
pip install -r requirements.txt


# Launch the app to check it.
shiny run --reload app.py
( Ctrl + C to end the task)

# Deactivate the environment.
deactivate