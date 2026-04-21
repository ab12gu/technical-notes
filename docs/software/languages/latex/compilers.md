# Compilers

You need to install one of these compilers externally first! (even if using vs code!)

```
latex, 1990s
pdflatex, 2000s
xelatex, modern
lualatex, modern
```

## Online Editor

`Overleaf software` was conceived by John Hammersley and John Lees-Miller, who started developing it in 2011.

- Online collaborative latex editor for scientific writing
- Beta released Jan 2014
- Merged with ShareLaTeX in 2017
- [https://en.wikipedia.org/wiki/Overleaf](https://en.wikipedia.org/wiki/Overleaf)

## Neovim

There is no plugin support. Might be able to use some markdown rendering plugin?

## VS Code

Plugin - [https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

- By default, it uses latexmk (pdflatex compiler). 
    - You need to change the `settings.json` default recipe...
- Maintained by a professor in China

## Terminal

1. On Mac, install [basictex](https://www.tug.org/mactex/morepackages.html) (smaller distro of MacTeX). 
    - includes TeX, LaTeX, pdfTeX, MetaFont, dvips, MetaPost, and XeTeX. 
2. Also, install [skim pdf viewer](https://en.wikipedia.org/wiki/Skim_(software)) for ability to autoreload pdf when changed. 
3. Install `latexmk`, but might be already installed?
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


