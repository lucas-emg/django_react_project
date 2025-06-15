# Django & React Web App

## Overview

This is a project based on the video "Django & React Web App Tutorial - Authentication, Databases, Deployment & More" by Tech With team.

On this project I have learned:

- How to create backend with Django
- The inner works of Django (url patterns, models, migrations, serializers)
- How to integrate Django with a React app
- How to deploy a project from zero

Thanks Tech with Tim for the amazing tutorial!

1. Video: https://www.youtube.com/watch?v=c-QsfbznSXI&t=5303s
2. Tech with Team channel: https://www.youtube.com/@TechWithTim

## Setup

In order to run this project make sure you have node.js and Python installed.
There is no hard versioning on the dependencies.

1. Clone the repository
2. Once cloned, create a local environment
```
python -m venv .denv
```
3. Activate the virtual environment
```
# Window
.\denv\Scripts\activate

# Mac
source .denv/bin/activate
```
You should see `(.denv)` to the far left of your terminal
4. Install all dependencies
```
# For the backend dependencies
pip install -r backend/requirements.txt

# For the frontend dependencies
cd frontend
npm install
cd ../
```

5. Run project
You will need two terminal sessions opened for this.
In the first terminal we will move to the backend directory and run the server
```
cd backend
python manage.py runserver
```
In the second terminal session we will move to the frontend directory and start the frontend
```
cd frontend
npm run dev
```