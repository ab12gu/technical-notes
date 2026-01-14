# CAD Scripting

I first learned about this in my FEA course, where we paramaterized the model by looking at the script that generated the design/FEA models. 

Then in fluids, there was a bonus assignement to model fluid flow via solving partial differentiial equations (PDEs) and I was the only one in the class to solve it :). At the same time, I took a graduate CFD (computational fluid dynamics course) and started doing finite difference methods to solve these PDE's and show the models. 

I moved into robotics/ML after this because I found it more applicable to my future :). 

Recently, in 2024, I started relooking into simply making designs via code. I got lost in the weeds with learning the methods so just got to using the software now (end of 2025).

However, I don't really know if the scripting to generate code is super useful in prototyping... I haven't used fillets yet, but someone online talked about how it's hard to select an edge. And I was using figma to design my gamenight business cards today and could see how I would code it, but could see how it distracts from "design iterations" that you normally get with a gUI.

Anyways we'll see how I far I go with this scripting CAD. I kinda like the idea of an LLM to generate CAD scripts, so might start delving into that aspect shortly. 


## Backend

There apparently is a divergent on the models. [BREP](https://en.wikipedia.org/wiki/Boundary_representation) is the one most newer models are developing on. Used by build123d and CadQuery.

```
Compared to the constructive solid geometry (CSG) representation, 
which uses only primitive objects and Boolean operations to combine them, 
boundary representation is more flexible and has a much richer operation set. 

In addition to the Boolean operations, B-rep has 
extrusion (or sweeping), chamfer, blending, drafting, shelling, tweaking and 
other operations that make use of these.
```

CSG is used by OpenSCAD, the most popular scripting cad. 


## Future Reading

- [https://www.reddit.com/r/openscad/comments/1ozpcsy/daydream_a_llm_based_cad_generator/](https://www.reddit.com/r/openscad/comments/1ozpcsy/daydream_a_llm_based_cad_generator/)
- [https://github.com/WillAdams/gcodepreview](https://github.com/WillAdams/gcodepreview)
- [https://docs.rs/geo/latest/geo/](https://docs.rs/geo/latest/geo/)
- [https://pythonscad.org/](https://pythonscad.org/)
- [https://github.com/Irev-Dev/curated-code-cad](https://github.com/Irev-Dev/curated-code-cad)
