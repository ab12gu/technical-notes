# Paint Stand

## Project Description

Elizabeth wanted to remake her paint stand to something more sturdy. So I 3d modelled and printed it. 

## Materials

- Material: PLA (plastic)
- 3D printer: Bambu X1 Carbon

## Images

<img src="/design/3d-modeling/projects/paint-stand/images/cardboard-stand-front.png" alt="paint-stand" width="300">
<img src="/design/3d-modeling/projects/paint-stand/images/cardboard-stand-top.png" alt="paint-stand" width="300">


## CAD Software

I made an [initial design](https://www.instagram.com/p/DKfyQ5iSKEm/) with `Fusion360`, but noticed that I cannot save my designs locally so I look again to alternative sources. 

Redesigned in code based modelling via [python/`build123d`](https://blog.abgup.com/design/3d-modeling/code-based-modelling/build123d/). 

The print issue that I ran into was the printer I use (Bambu X1 Carbon) has a 256 cm^3 print bed and the given length was 280 cm :(. So for the redesign I added a gap in the middle so I can cut it into 2 or 4 pieces to be printable. 

<img src="/design/3d-modeling/projects/paint-stand/images/paint-stand-cad-gap.png" alt="paint-stand" width="300">
<img src="/design/3d-modeling/projects/paint-stand/images/paint-stand-cad.png" alt="paint-stand" width="300">

However, with the new dimensions based on relationship math to the holes. The length dimension "happened" to be exactly 256 cm :), and I removed the middle gap and it fit perfectly without needed to split the CAD model. 

