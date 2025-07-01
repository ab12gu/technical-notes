
LEDs are connected in parallel
- to produce your own, you should mix series/parallel 

Direct Current:

24v

12v
- handle longer strips with less voltage drop, reducing the need for frequent power injection
- Consumes slightly more power due to the higher voltage
- reduced wiring complexity for long strips
- Supports up to **10 meters or more** without voltage drop issues
- 12V power supply, which can be bulkier
- more expensive due to the higher voltage design

5v
- more frequent power injection for longer runs due to higher voltage drop over distance
- typically limited to **5 meters** before noticeable voltage drop occurs

Common characteristics:
- similar brightness levels, depending on the quality of the LED chip used
- **dual data line**, meaning if one LED fails, the data signal bypasses the failed LED and continues to the next one. This increases reliability.
- 60mA at full brightness (20mA per color channel).
	- P = V x I 
		- 12v * 0.06A = 0.72 W per LED
		- 5v * 0.06A = 0.30 W per LED
	- 144 LEDs * 0.06 Amps = 8.64 amps per 1m
- For 5V systems, if the voltage drop approaches **10%** of the supply voltage (i.e., 0.5V), the LEDs will start to show dimming or malfunction
- 18 AWG wire, which has a resistance of **0.00639 ohms per meter**
- Current per LED:
	- **Red channel**: Around **20mA**.
	- **Green channel**: Around **20mA**.
	- **Blue channel**: Around **20mA**.
		- If the blue channel is **not at full brightness**, the current running through the **blue LED** will be **less than 20mA**. 
		- This will depend on the **PWM (Pulse Width Modulation)** signal controlling the brightness.
		- If you reduce the brightness of the blue channel to, say, 50%, then the current would drop to around **10mA** for that channel.

Voltage drop
- The longer the wire and the higher the current, the more voltage is lost in the wire.
	
The forward voltage depends on the material and color (wavelength) of the LED:

- **Red LEDs**: ~1.8–2.2V
- **Green LEDs**: ~2.0–3.5V
- **Blue/White LEDs**: ~3.0–3.6V
	- Blue light typically falls in the range of **450–495 nanometers**
	- The larger the bandgap, the higher the forward voltage


The current coming out of the 