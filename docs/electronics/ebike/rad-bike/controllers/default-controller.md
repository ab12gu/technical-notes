# Default Controller

Prior controller supplied with Rad bike (burnt out transistors inside) - [BAC355](https://www.acceleratedsystems.com/products/electric-motor-controllers/bac355)

- SN: 2147-00054
- Manufacturer: Accelerated Systems Inc | Waterloo, Ontario

[B&B ULINX USOPTL4 - Serial adapter ](https://www.shi.com/product/32390464/BandB-ULINX-USOPTL4-Serial-adapter?__cf_chl_tk=sO77HdQP3R3LpXkl9V7f2CJ5zOJN91E174tectpLSng-1742524427-1.0.1.1-jBmTav4kAnwRIqURZVBJ9pWRRnXol0EFAUjUt6OQsI0)

## Specs

BAC355, Accelerated Systems Inc (ASI)

- Made in Vietnam
- Model: BAC355-TTL
- 24-48V, 55A
- PC-C2-002-US-0004
- Part#: PC100029
- Hardware: 10-000900
- Firmware: 90-000303
- Parameter: 92-0000257
- Revision: 1
- Side barcode:
	- PC-100029
	- S2147-00054

[Pin out for controller](https://www.acceleratedsystems.com/media/dmsoinvs/asi_emobility_controllers_spec_sheet_w_pin_out_table.pdf)

Links:

- https://electronoobs.com/eng_arduino_tut126_gerber1.php
- https://accelerated-systems-inc.myshopify.com/collections/evaluation-kit/products/bac-350-eval-kit-with-bluetooth
- https://www.amazon.com/HiLetgo-CP2102-Converter-Adapter-Downloader/dp/B00LODGRV8?source=ps-sl-shoppingads-lpcontext&psc=1&gQT=0

[web-link](https://www.acceleratedsystems.com/products/electric-motor-controllers/bac355-bac555)

- The BAC355 and BAC555 are a mid-power sub-compact Motor Controller (inverter) 
- designed with the latest in field-oriented vector control (FOC) 
- ASI’s proprietary adaptive Sensorless Motor Control Algorithms
- ASI Controllers feature auto-tuning
	- 120% of a motor's maximum locked rotor torque 
	- without the need for complicated position sensors

| **Controller**                                               | BAC355 / BAC555                                                                                                      |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **Nominal Input Voltage**                                    | 24 to 52VDC                                                                                                          |
| **Peak Phase Current**                                       | 55A / 75A                                                                                                            |
| **Continuous Electrical Output Power @ 20°C Ambient**        | 350W @ 36V / 500W @ 36V                                                                                              |
| **Motor Control Model**                                      | Direct Field-Oriented Control                                                                                        |
| **Supported Motor Types**                                    | 3-Phase Permanent Magnet                                                                                             |
| **Supported Motor Sensor Types**                             | Sensorless, 60° Electrical Halls, Sine/Cosine Encoder                                                                |
| **Operating Ambient Temperature Range**                      | -20 to 50°C                                                                                                          |
| **Inrush current limit**                                     | 15A / 30A                                                                                                            |
| **Communication Protocols**                                  | TTL, CAN, Optional BT                                                                                                |
| **Inputs**                                                   | 3x Halls, 2x Digital, 4x Analogue                                                                                    |
| **Outputs**                                                  | Hall 5V, 5V, 12V, Low-Side Switch, Optional Switched 6V Light Output                                                 |
| **Generic Connectors**<br><br>**(In Production)**            | Signal - S24B-PADDSS-1  <br>1x KST MPD2-156 or equivalent  <br>4x KST FRD2-156 or equivalent                         |
| **Generic Waterproof Connectors**<br><br>**(SOP - Q2 2024)** | Battery - Higo L513A   <br>Motor - Higo Z910A / Higo Z1115A  <br>Signal 1 - Higo Z1513AM  <br>Signal 2 - Higo Z609FM |


## Pin out

https://www.acceleratedsystems.com/media/dmsoinvs/asi_emobility_controllers_spec_sheet_w_pin_out_table.pdf

## Serial Communication

[RS232 vs TTL](https://www.seeedstudio.com/blog/2019/12/11/rs232-vs-ttl-beginner-guide-to-serial-communication/)

[RS232 Serial Communication Protocol](https://circuitdigest.com/article/rs232-serial-communication-protocol-basics-specifications)

CAN protocol

- https://www.csselectronics.com/pages/canopen-tutorial-simple-intro

rs232 ttl rx tx

Cable - RS-422

USB to TTL Downloader with Jumper Wires to get device firmware