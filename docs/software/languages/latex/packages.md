# Packages

Packages are installed through `tlmgr` - tex live manager

The path and configuration is defined in here:

```bash
/usr/local/texlive/2025basic/texmf.cnf
```

I did not start programming early enough, but I think that these virtual environments for controlling versions/dependencies may be a modern programming paradigm. 

Well at least in college, I wasn't introduced it in C/C++ and now I am developing in `Latex`, being an older language as well, and it doesn't have these ""features"".

Preinstalled packages are here:

```bash
/usr/local/texlive/2025basic/texmf-dist/tex/latex
```


## Local Package

If you want a local packages, you need to add a local path

```bash
export TEXINPUTS=.:/texmf:
```
