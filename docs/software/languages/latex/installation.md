# Installation

`Latex` is a macro markup language on top of `tex` markup language. I don't think anyone really writes in tex... Anyways, you need to compile/interpret the markup into a human readible format (generally a pdf). 

The installation 

- [homebrew/basictex](https://formulae.brew.sh/cask/basictex)
- [homebrew/mactex](https://formulae.brew.sh/cask/mactex-no-gui)

Then, look at [/compilers](./compilers.md) for further installation (dependent on IDE)

## Usage

```bash
$ latexmk -lualatex -pvc -view=pdf -f -outdir=build document.tex
```

- ^ compiles `tex` file into a pdf and continuously reloads
- by default `latexmk` runs `-pdflatex` compiler

## Tex Distributions

`TeX Live` is the standard distribution of TeX, LaTeX, and related programs produced by TeX Users Groups across the world (All offline/online Editors use this to compile tex files)

- MiKTeX for Windows
- TeX Live for Linux and other UNIX-like systems
- [MacTeX](https://en.wikipedia.org/wiki/MacTeX) redistribution of TeX Live for macOS
- teTeX for Linux and other UNIX-like systems; it is no longer actively maintained now
- proTeXt is based on MiKTeX

Source: [https://www.overleaf.com/learn/latex/Choosing_a_LaTeX_Compiler%23Other_compilers](https://www.overleaf.com/learn/latex/Choosing_a_LaTeX_Compiler%23Other_compilers)


