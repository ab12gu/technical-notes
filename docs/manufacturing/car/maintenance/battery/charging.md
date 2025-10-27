# Charging

TODO: Simple Wiring Diagram in KiCAD?

Step Up Boost Module

- $2
- Input: 4.5-32V 
- Adjustable output: 5-52V 
- Step-up Voltage Regulator With LED Voltmeter
- [https://www.aliexpress.us/item/3256805948691694.html?](https://www.aliexpress.us/item/3256805948691694.html?)
- Max input 4 amps
- 85% effieiency
- Button Press
    - short press: input/output
    - medium press: change offset to zero voltage?
    - long press: low power consumption? lights out, press again to restore
- Nob
    - voltage output change

![](img/boost-module.png){width="350"}
![](img/portable-charger.png){width="350"}

## Setup

- Battery phone bank: 5 volt output 
- 13.5 -> 14.4 volts


Portable Charger

- [https://www.amazon.com/Portable-Charger-10000mAh-Battery-Charging/dp/B0BMW2985V/](https://www.amazon.com/Portable-Charger-10000mAh-Battery-Charging/dp/B0BMW2985V/)
- $20
- 10000mAh
- Input: 5v, 2a, takes 4.5H~6H to charge
- Output: 5v, 3A 

## Wiring

Only 2 pairs of Black/Red wires needed

- Positive/Negative from usb output of Portable Charger
    - Goes to input of Boost Module
- Boost Module output to Positive/Negative of the Battery

![](img/car-battery.jpeg){width="350"}

USB A 2.0 (no data transfer):

NOTE: 3.0 has 5 pins for RxTx (UART serial) data transfer in addition to the normal D-D+ USB Differential Pair.

- The old protocol is more complex because data is transferred back and forth on the same line 

![](img/usb-A-2.png){width="400"}
