# Django

It is a very popular Python web framework.

- [github.com/django/django](https://github.com/django/django)
- [docs.djangoproject.com/en/6.0/intro/tutorial01/](https://docs.djangoproject.com/en/6.0/intro/tutorial01/)

## Getting Started
<br>

1. Start a virtual environment (currently using `uv`)
```bash
$ uv init
$ uv venv .venv
$ source .venv/bin/activate
```

2. Install Django
```bash
$ uv add django
```

3. Initilize repo
```bash
$ django-admin <command> [options]
$ django-admin startproject <project-name>
```

4. Add pages
```bash
$ python manage.py startapp <app-name>
```

5. Run development server
```bash 
$ python manage.py runserver
```


## Links

- [Django Project Structure](https://medium.com/django-unleashed/django-project-structure-a-comprehensive-guide-4b2ddbf2b6b8)
- [Depoly Django on Render](https://render.com/docs/deploy-django)
- [medium - django commands cheat sheet](https://farshadabdulazeez.medium.com/django-commands-cheat-sheet-bdc0f6b088ab)
