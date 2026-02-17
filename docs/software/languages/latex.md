# LaTeX

- [wiki/LaTeX](https://en.wikipedia.org/wiki/LaTeX)
- [wiki/TeX](https://en.wikipedia.org/wiki/TeX)

`Tex` is programming language used to well formatted documents (aka: typesetting system)

`Latex` is a macro langauge on top of `tex` that allows gives you simpler functions to format text. 

## Editor

`Overleaf software` was conceived by John Hammersley and John Lees-Miller, who started developing it in 2011.

- Online collaborative latex editor for scientific writing
- Beta released Jan 2014
- Merged with ShareLaTeX in 2017
- [https://en.wikipedia.org/wiki/Overleaf](https://en.wikipedia.org/wiki/Overleaf)

## Compile

On Mac, install [basictex](https://www.tug.org/mactex/morepackages.html) (smaller distro of MacTeX). Includes TeX, LaTeX, pdfTeX, MetaFont, dvips, MetaPost, and XeTeX.

```
$ brew install --cask basictex
$ pdflatex mydocument.tex
```

Minimum page to be able to compile (won't generate pdf though)


filename: document.tex
```
$ \documentclass{article}
$ \begin{document}
$ \end{document}
```

## Tex Distributions

`TeX Live` is the standard distribution of TeX, LaTeX, and related programs produced by TeX Users Groups across the world

- MiKTeX for Windows
- TeX Live for Linux and other UNIX-like systems
- [MacTeX](https://en.wikipedia.org/wiki/MacTeX) redistribution of TeX Live for macOS
- teTeX for Linux and other UNIX-like systems; it is no longer actively maintained now
- proTeXt is based on MiKTeX

Source: [https://www.overleaf.com/learn/latex/Choosing_a_LaTeX_Compiler%23Other_compilers](https://www.overleaf.com/learn/latex/Choosing_a_LaTeX_Compiler%23Other_compilers)
