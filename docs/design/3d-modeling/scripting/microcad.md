# Microcad 

Germany based project to develop scripting based 3d modelling software in Rust. 

I personally noticed that the generation (and noted by others) of the python scripting program build123d takes a long time. And actually, I wanted to work on my own RUST 3D modelling software just like microcad. It would allow me to program 3d modelling elements in a scalable way. This was something I really wanted to pursue towards the end of my undergrad. 

However, looking at the job market, there wasn't many jobs in developing these models. In fact, most of the jobs were for just simple devs that even got paid much more than the phd's that did the mathematics behind the software. So I went down the route of a PhD in ML/Robotics...

But, maybe I can restart this journey by making my own software? or contributing here? TBD.

NOTE: build123d uses C++, so this project may be dead shortly.

## Links

- [https://microcad.xyz/](https://microcad.xyz/)
- [https://codeberg.org/microcad/microcad](https://codeberg.org/microcad/microcad)
- [reddit.com/r/openscad/cad_a_new_language_for_cad_written_in_rust/](https://www.reddit.com/r/openscad/comments/1ozfq1q/%C2%B5cad_a_new_language_for_cad_written_in_rust/)
- [https://github.com/hannobraun/fornjot](https://github.com/hannobraun/fornjot)

## Discussion Continued

One comment - "Fillets are something that's easy in GUI CAD and hard in OpenSCAD" makes a good point on GUI having advantages over scripting. Like in Abaqus scripting done in undergrad, if you created an envirnoment that allows for interactability of both, that would be great!

I would need to test the existing scripting methods first however. 

Started watching repo.... seems to be very active!

Note: "Uses a manifold for 3D geometry plus some custom rust implementation and rust-geo for 2D polygons"

## Issues

It's CSG, we are using manifold for the boolean operation on meshes.

- this concept use CSG which tends to produce polygonal models with approximate geometry and unable to export to a BREP format like STEP which makes interoping with other CAD systems quite difficult. 
    - limited to meshes and polygons right now
- cadquery and build123 are BREP based
- this one guy, Hanno out in Germany, is independently creating a BREP rust engine for modelling: [https://www.fornjot.app/](https://www.fornjot.app/)
- he makes about $1000 per month on donations

