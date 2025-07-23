Label Interpretation: 
- "WS2811" for LED strips, the "WS" stands for "World Semi"
  - First two digits (28) are the height and 2nd two (11) are width of LED in mm
- "SK6812" might correlate to another company, unsure

<div style="width: 96px;">
     <div src=".\images\ws2812b-strip.png" class="internal-embed"></div> 
</div>
<div style="width: 96px;">
     <div src="image.png" class="internal-embed"></div> 
</div>

<div style="width: 96px;">
     <div src="image.png" class="internal-embed"></div> 
</div>
<div style="width: 96px;">
     <div src="image.png" class="internal-embed"></div> 
</div>
<div style="width: 96px;">
     <div src="image.png" class="internal-embed"></div> 
</div>
![[ws2812b-strip.png]]

LED technology types:
- Chip-on-Board (COB)  
	- smoother light because their chips are spread out evenly
	- usually just one color
	- up to three times more light 
		- produce up to 40% more light per watt than SMD LED strip lights
	- multiple LED chips (typically nine or more) bonded directly to a substrate by the manufacturer to form a single module
	- cost more than SMD LED strip lights
		- 20-30% more expensive
	- typically have a higher voltage and amperage
	- typically controlled using a constant voltage (CV) controller
- Surface Mount Device (SMD)
	- chips closer together, which can create uneven light distribution
	- more efficient than COB (more lumens per watt)
	- broader light beam; therefore, smaller heat sink
	- more expensive to produce
	- 


DMX is a digital lighting control protocol 
- widely used in the professional lighting industry
- to control COB LED strip lights using DMX, you will need a DMX decoder. 
	- A DMX decoder converts the DMX signal into readable format for leds
	- allows you to control the brightness, color, and other features of the lights.



A CV controller maintains a constant voltage to the LED strip lights, regardless of the load. This is important because COB LED strip lights can draw a lot of current, and a CV controller will ensure that the lights do not overheat or damage.

SMD LED strip lights, on the other hand, are typically controlled using a constant current (CC) controller. A CC controller maintains a constant current to the LED strip lights, regardless of the voltage. This is important because SMD LED strip lights are more sensitive to voltage fluctuations, and a CC controller will help to protect the lights from damage.


<img src="./images/image-7.png" alt="led size" width="400"/> 

<img src="./images/image-8.png" alt="led size" width="400"/> 

<img src="./images/image-9.png" alt="led size" width="400"/> 

- SMD 5050 light output is 3 times that of SMD 3528 LEDs
- 3528 LEDs can be most cost effective as they are thinner than 5050
  - You can get more brightness on a strip by fitting more
  
Newer ultrabright LEDs
- 3020 & 3014 SMD LED

Brightness determination
- how many LED are on the strip 
- lumen output to determine brightness

Color Rendering Index (CRI) is a measurement of how natural colors render under an artificial white light source when compared with sunlight. The index is measured from 0-100, with a perfect 100 indicating that colors of objects under the light source appear the same as they would under natural sunlight. CRIs under 80 are generally considered ‘poor’ while ranges over 90 are considered ‘great’.

- Accent Lighting and Mood Lighting - 100 to 350 lumens per foot
- Under cabinet Lighting - 175 to 525 lumens per foot
- Task Lighting with low distance from light source - 280 to 437 lumens per foot
- Task Lighting with higher distance from light source - 500 to 1000 lumens per foot
- Indirect lighting in a bedroom/ hotel / vehicle / lobby - 375 to 562 lumens per foot
- Industrial lighting / signage / tube replacements - 500 to 950 lumens per foot

CCT (Correlated Color Temperature) refers to the color temperature of light, measured in degrees Kelvin (K). The temperature rating directly affects what the white light will look like; it ranges from cool white to warm white

<img src="./images/image-6.png" alt="led size" width="400"/> 

Power consumption?
- 4.4w/ft ??
- 80% of the rated power maximum to increase longevity of the power supply

Strip density:
- 150 LEDs / 5 meters
  - Or 30 LEDs per meter
    - Or ~ 10 LEDs per foot
      - Or ~ 1 LED per inch

<img src="./images/led-density.png" alt="alt text" width="400"/> 

<img src="./images/led-distance.png" alt="alt text" width="400"/> 

<img src="./images/image.png" alt="alt text" width="400"/> 

Strip colors:
1. White
2. Black

Waterproofing:
- ip65
  - Coated with flexible clear silicone to keep water, and dust out
  - Cannot be submerged in water. 
  - In my experience, they are both splash-proof and rainproof.
- ip67
  - Sealed silicon sleaves
  - waterproof

Pixel LED strips
- Data is sent down a single wire 
  - Read by a small microcontroller chip
  - Produces a pulse width modulated signal 
    - Controls the brightness of each channel of an LED chip
      - Containing a red segment, a green segment, and a blue segment.
- 256 levels of brightness
- 256 to the third power different colors


Test Method:
- Measuring the current draw of the neopixel led strip light with all the LEDs off
- The current draw of a single channel of one pixel
- All the channels of one pixel a single channel of all the pixels
- The overall current draw for the entire strip with every channel at maximum brightness
- Loss of color accuracy due to the voltage drop on each pixel led strip

Power
- 5-volt ws2812b
- output is 5 volts and you have 2.5 volts over 30 feet
  - LEDs are only going to receive 2.5 volts in total
- apply power at both ends of the digital LED strip, in a method that’s called power injection
  
cheapest versions of the 12v WS2811 led strip are not truly individually addressable
- WS2811 led strip has a single microcontroller that actually powers 3 LED pixels or a total of 9 channels

- SK9822 chip (Similar APA102), timing is handled a bit differently, instead of having a hard-coded timing that your microcontroller needs to adhere to
- clock pin, this clock pin dictates the rate of data transfer between the microcontroller and the chip.

5V SK9822 LED Strip VS 5V WS2812B LED Strip

<img src="./images/image-1.png" alt="alt text" width="400"/> 

- The SK9822 also costs a little bit more than the WS2812B, and it requires an additional conductor for the clock pin

5V WS2813 LED Strip VS 5V WS2812B LED Strip
- The other downfalls a serial communication is that since all the data is being passed over a single wire, any break in the chain will cause the entire strip after that to fail
- The ws2813 addressable led strips are made to address this downfall. on the ws2813, there are two different data lines labeled di and bi, meaning data in and back up in
- allows the addressable led strip to continue functioning in the event of a dead pixel
- bi Channel will act as a pass-through, as long as two consecutive LEDs don’t fail, the rest of the digital led tape should continue to function
- like the SK9822, the WS2813 RGBIC led strip lights performed very poorly in terms of color accuracy


Advantages of WS2815 addressable LED Strip Light

<img src="./images/image-2.png" alt="alt text" width="400"/> 

- backup data channel without the voltage drop issues, then the WS2815 may be the answer
- WS2815 is a 12-volt digital rgbic led strip and as you can see, there is no significant depreciation in color rendering throughout the entire strip, even at full brightness.
- highest idle power consumption at 3.5 to watts and the highest full white power consumption at 20.18 watts per 150 LEDs.

5V SK6812 RGBW IC LED Strip VS 5V WS2812B LED Strip

<img src="./images/image-3.png" alt="alt text" width="400"/> 


Citation
- https://www.derunledlights.com/the-difference-between-addressable-rgb-led-strip-ws2811-ws2812b-ws2813-ws2815-sk6812-sk9822/



- https://www.flexfireleds.com/comparison-between-3528-leds-and-5050-leds/
- https://www.digikey.com/en/articles/the-basics-of-chip-on-board-cob-leds
- https://www.instyleled.co.uk/support/cob-vs-smd-leds/
- https://www.flexfireleds.com/led-ip-ratings-led-flex-strip-waterproofing-explained-waterproof-v-nonwaterproof-led-strip-lights/
- x


Numbers 5050, 3528, 2835, etc correlate to the size of the chip in millimeters