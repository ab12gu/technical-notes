# LaTeX

`Tex` is programming language used to well formatted documents (aka: typesetting system) <br>
`Latex` is a macro langauge on top of `tex` that allows gives you simpler functions to format text. 

- [wiki/LaTeX](https://en.wikipedia.org/wiki/LaTeX)
- [wiki/TeX](https://en.wikipedia.org/wiki/TeX)

```bash
$ latexmk -lualatex -pvc -view=pdf -outdir=build document.tex
```

^ compiles `tex` file into a pdf and continuously reloads

## Compile

On Mac, install [basictex](https://www.tug.org/mactex/morepackages.html) (smaller distro of MacTeX). Includes TeX, LaTeX, pdfTeX, MetaFont, dvips, MetaPost, and XeTeX. 

Also, install [skim pdf viewer](https://en.wikipedia.org/wiki/Skim_(software)) for ability to autoreload pdf when changed. 

```bash
### Install Dependencies
$ brew install --cask basictex skim
$ sudo tlmgr install latexmk # latex tool
$ echo "$pdf_previewer = 'open -a Skim';" >> ~/.latexmkrc
```

You can either compile using helper package `latexmk` or calling the compiler directly.

```bash
### Compile/Generate PDF
$ latexmk -lualatex -pvc -view=pdf -outdir=build document.tex
$ lualatex document.tex && latexmk -c

### Remove auxillary files
$ latexmk -xelatex -c 
$ latexmk -c
```

Compiling Engines:

| Compiling Engines | Year | Support (Unicode/etc) | Notes |
| --- | --- | --- | --- |
| latex | 1990s | None | |
| pdflatex | 2000s | Limited | |
| xelatex | idk | Yes | slower |
| lualatex | idk | Yes | even slower, <br> programming support |

## Package Manager

Package manager automatically added when you install `basictex`

```
$ sudo tlmgr install <package-name> # tex live manager
$ sudo tlmgr update --self
```

Useful packages

```
$ latexmk
```

## Example File

Minimum page to be able to compile (won't generate pdf though):


filename: document.tex
```
$ \documentclass{article}
$ \begin{document}
$ \end{document}
```

## Online Editor

`Overleaf software` was conceived by John Hammersley and John Lees-Miller, who started developing it in 2011.

- Online collaborative latex editor for scientific writing
- Beta released Jan 2014
- Merged with ShareLaTeX in 2017
- [https://en.wikipedia.org/wiki/Overleaf](https://en.wikipedia.org/wiki/Overleaf)

## Tex Distributions

`TeX Live` is the standard distribution of TeX, LaTeX, and related programs produced by TeX Users Groups across the world (All offline/online Editors use this to compile tex files)

- MiKTeX for Windows
- TeX Live for Linux and other UNIX-like systems
- [MacTeX](https://en.wikipedia.org/wiki/MacTeX) redistribution of TeX Live for macOS
- teTeX for Linux and other UNIX-like systems; it is no longer actively maintained now
- proTeXt is based on MiKTeX

Source: [https://www.overleaf.com/learn/latex/Choosing_a_LaTeX_Compiler%23Other_compilers](https://www.overleaf.com/learn/latex/Choosing_a_LaTeX_Compiler%23Other_compilers)
