# Python

As of 2026, probably the most used/growing programming language. 

- [https://www.python.org/](https://www.python.org/)
- [https://en.wikipedia.org/wiki/Pip_(package_manager)](https://en.wikipedia.org/wiki/Pip_(package_manager))
    - recommended package manager for python
    - `uv` (see below) works w/ `pip` for package installations


## Package Managers

There are alternatives such as `poetry`, `pipenv`, etc, but currently 01/2026, using [UV](https://docs.astral.sh/uv/)

To upgrade a package use:

```
uv sync --upgrade-package package-name
```

Check [build123d](./../../../design/3d-modeling/scripting/build123d) notes on how to use.

