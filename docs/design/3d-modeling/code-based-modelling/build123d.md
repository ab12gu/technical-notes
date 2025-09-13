# build123d

Python based boundary representation (BREP) modelling framework for 2d/3d modelling.

- Built on the Open Cascade geometric kernel
- Generated from faults of CADQuery
    - Somewhat restricted Fluent API (method chaining)
    - Replaced with full python toolbox

```
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

## Rendering

Use [OCP CAD Viewer](https://github.com/bernhard-42/vscode-ocp-cad-viewer)

- OCP = OCCT-powered (referring to the underlying Open CASCADE Technology).

How to run: 

1. via vscode extension
2. via terminal:

```bash
$ python -m ocp_vscode
$ python -m ocp_vscode --theme dark
```

This will start a Flask server and the viewer can be reached under `http://127.0.0.1/viewer`

- [OCP viewer link](https://github.com/bernhard-42/vscode-ocp-cad-viewer?tab=readme-ov-file#standalone-mode)


## Common 




## Hyperlinks

- [build123d readthedocs](https://build123d.readthedocs.io/en/latest/)
- [build123d reddit](https://www.reddit.com/r/build123d/)
- [build123d units](https://build123d.readthedocs.io/en/latest/build_part.html#units)
- [OCP viewer](https://marketplace.visualstudio.com/items?itemName=bernhard-42.ocp-cad-viewer)
- [build123d libraries and tools](https://build123d.readthedocs.io/en/latest/external.html#external-tools-and-libraries)
- [build123d cheat sheet](https://build123d.readthedocs.io/en/latest/cheat_sheet.html)
- [OpenSCAD reddit](https://www.reddit.com/r/openscad/)
- [Github repo](https://github.com/gumyr/build123d)
- [Discord server](https://discord.gg/7pb7eu8V)

.gitignore

- [build123d .gitignore](https://github.com/Gigahawk/objects/blob/master/.gitignore)
