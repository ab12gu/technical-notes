# Python Package Managers

## UV

Just a tool built on rust to 

- [https://github.com/astral-sh/uv](https://github.com/astral-sh/uv)

If repository already uses UV as it's package manager, or if you want to add it to an existing python repo:

```bash
$ uv venv .venv
$ uv sync
$ source .venv/bin/activate
```

Slightly different on Windows to activate

```bash
$ .venv/Scripts/activate.ps1
```
