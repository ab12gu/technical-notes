### Hardware Haker Meetup
- Date: 24-09-19
- Event: https://seattlemakers.org/events/hardware-hacking-meetup-30/
- ig vid: https://www.instagram.com/p/DAIGC3FpgBm/

Step 1: Find datasheet of processor
- Googled: BCM6368 datasheet
- https://www.datasheets.com/part-details/bcm6368-broadcom-inc-35206488

Step 2: Find way to power board

Step 3: Find way to connect to computer/signal analyzer
- Soldered in/out pins to open slits on board connected to processor
- Alt: usb/bluetooth
- May need to have jtag adapter if complex
  
Step 4: Plug in or connect to computer/analyzer
- For pins, we used saleae device + software

Step 5: Find output signal for processor
- Use either pusleview (installed via homebrew on mac) or logic software by saleae
- Also used picocom
```
  $ brew install picocom
  $ picocom -b 115200 /dev/tty.usbserial-FTUNYCTO
```

Might be able to find useful resources on other people hacking the same chip:
- can google "chip-name" and keywords: hack or teardown

Useful Hardware:
- https://en.wikipedia.org/wiki/JTAG
- https://www.adafruit.com/product/2264
- https://1bitsquared.com/products/jtag-swd-adapter
- https://1bitsquared.com/products/bitmagic-basic

Software Used:
- https://www.sigrok.org/wiki/PulseView
- https://support.saleae.com/logic-software/sw-download

