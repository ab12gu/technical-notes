# Strip Comparision

##  LED Specs

- all 150 LEDs per 5 meters
- the ip65 silicon coded variety
- NOTE: significantly more varieties to choose from

## Options

1. Color of PCB the chips are mounted on
    - Black or White
2. Pixel Density (how many LEDs are in a single meter)
    - 30, 60, 144 LEDs/m
3. Waterproofing
    - ip65 means they are coated with flexible clear silicone to keep water and dust away
    - Cannot be submerged in water
    - Splash-proof/rainproof
    - ALT: ip67, sealed silicon sleeves for waterproofing
        - Hard to cut these to shorter lengths
4. Chip that drives individually addressable LEDs
    - WS2812B, Copper Bracket, 9pcs Pure Gold Line

## Working Principle

- Data is sent down a single wire
- Read by a small microcontroller chip
- Produces a pulse width modulated signal
- This controls the brightness of each channel of an LED chip (red/green/blue segments)

## LED specs

- Each segment has 256 levels of brightness
- Results in 256 ** 3 power different colors that can be produced
- NOTE: 5050 LED refers to size of LED chip, not type of LED pixel tape or compounds

## Citations:
- https://www.derunledlights.com/the-difference-between-addressable-rgb-led-strip-ws2811-ws2812b-ws2813-ws2815-sk6812-sk9822/