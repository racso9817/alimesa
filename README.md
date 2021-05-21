# Useful commands
* run server: python manage.py runserver
* dump database: python manage.py dumpdata -e auth -e contenttypes -e sessions -e admin > db.json
* load data: python manage.py loaddata db.json
* Update requirements: pip freeze > requirements.txt
* Install all requirements: pip install -r requirements.txt