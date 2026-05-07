# Python

- [https://docs.python.org/3/library/venv.html](https://docs.python.org/3/library/venv.html)
- [https://docs.python.org/3.15/tutorial/venv.html](https://docs.python.org/3.15/tutorial/venv.html)

## pip

The default package manager is `pip` [pypi.org/project/pip/](https://pypi.org/project/pip/) but not the greatest? not as fast? unsure...

[https://pip.pypa.io/en/stable/getting-started/](https://pip.pypa.io/en/stable/getting-started/) <br>
Sync `requirements.txt`

```bash
$ python -m pip install SomePackage==1.0.4      # install specific package
$ python -m pip install -r requirements.txt     # install dependencies from req.txt
$ python -m pip freeze > requirements.txt       # port dependencies into req.txt
```

[CLI Commands](https://docs.astral.sh/uv/reference/cli/)

## uv

Just a tool built on rust to replace default package manager pip (10-100x faster!)

- [https://github.com/astral-sh/uv](https://github.com/astral-sh/uv)
- [https://docs.astral.sh/uv/](https://docs.astral.sh/uv/)

Anyways, if you are moving from pip to uv, you just need to import `requirements.txt` <br>
[docs.astral.sh/uv/guides/migration/pip-to-project/#migrating-to-a-uv-project](https://docs.astral.sh/uv/guides/migration/pip-to-project/#migrating-to-a-uv-project)

```bash
uv init # Note: creates a main.py file
uv add -r requirement.txt
uv add --upgrade-package <package-name>
```

If repository already uses `uv` as it's package manager, or if you want to add it to an existing python repo:

```bash
$ uv venv .venv
$ uv sync
$ source .venv/bin/activate
```

Slightly different on Windows to activate. Need to run terminal in admin mode.

```bash
$ Set-ExecutionPolicy Unrestricted -Force
$ .venv/Scripts/activate.ps1
```
