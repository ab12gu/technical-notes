# build123d

Python based boundary representation (BREP) modelling framework for 2d/3d modelling.

- Built on the Open Cascade geometric kernel
- Generated from faults of CADQuery
    - Somewhat restricted Fluent API (method chaining)
    - Replaced with full python toolbox

## Rendering

Use [OCP CAD Viewer](https://github.com/bernhard-42/vscode-ocp-cad-viewer)

- OCP = OCCT-powered (referring to the underlying Open CASCADE Technology).

How to run: 

1. via vscode extension
2. via terminal:

```bash
$ source .venv/bin/activate
$ python -m ocp_vscode
$ python -m ocp_vscode --theme dark
$ python box_generate.py
```

This will start a Flask server and the viewer can be reached under

```
http://127.0.0.1/<port-number>/viewer
```

[OCP viewer standalone](https://github.com/bernhard-42/vscode-ocp-cad-viewer?tab=readme-ov-file#standalone-mode)

## Coding Structure

By default, there is no [units](https://build123d.readthedocs.io/en/latest/build_part.html#units).
When exporting to external formats like STL or STEP the units are assumed to be millimeters (mm).

There are two types of way to design, build mode & algebra mode. 

### Build Mode

```python
with BuildPart() as my_part:
    ...
    with BuildSketch() as my_sketch:
        ...
        with BuildLine() as my_line:
            ...
        ...
    ...

```


Code breakdown:

- **BuildPart:** builds volume
- **BuildSketch:** creates area
- **BuildLine:** creates lines

### Algebra Mode

## Hyperlinks

b123d

- [build123d readthedocs](https://build123d.readthedocs.io/en/latest/)
- [build123d libraries and tools](https://build123d.readthedocs.io/en/latest/external.html#external-tools-and-libraries)
- [build123d cheat sheet](https://build123d.readthedocs.io/en/latest/cheat_sheet.html)
- [build123d github repo](https://github.com/gumyr/build123d)

CAD Viewer

- [OCP viewer](https://marketplace.visualstudio.com/items?itemName=bernhard-42.ocp-cad-viewer)

Social 

- [Discord server](https://discord.gg/7pb7eu8V)
- [build123d reddit](https://www.reddit.com/r/build123d/)
- [OpenSCAD reddit](https://www.reddit.com/r/openscad/)

.gitignore

- [build123d .gitignore](https://github.com/Gigahawk/objects/blob/master/.gitignore)
