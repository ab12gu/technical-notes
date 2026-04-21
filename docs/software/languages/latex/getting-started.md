# Getting Started

## Example File

Minimum page to be able to compile (won't generate pdf though):

filename: document.tex
```
$ \documentclass{article}
$ \begin{document}
$ \end{document}
```

## Plugins

Package manager automatically added when you install `basictex`

```
$ sudo tlmgr install <package-name> # tex live manager
$ sudo tlmgr update --self
```

Useful packages

```
$ latexmk # Runs latex compiler
$ sudo tlmgr install tinos # install fonts
```


