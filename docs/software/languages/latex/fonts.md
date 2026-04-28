# Fonts

Instructions on adding fonts/custom fonts are in - [texdoc.org](texdoc.org)

```bash
texdoc fontspec
```

If custom font, you need to save font locally and specify it's path

``` latex
\setmainfont[
    Path=./fonts/Source_Sans_3/static/] {
    SourceSans3-Regular.ttf}[
    BoldFont =  SourceSans3-Bold.ttf,
    ItalicFont = SourceSans3-Italic.ttf ,
    BoldItalicFont = SourceSans3-BoldItalic.ttf 
    ]
```
