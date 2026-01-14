# RFID Readers

Type 2 tags are better and are used by smartphones

LF Readers

- made with a coil for signal generation
- Options
    - RDM6300
    - RDM634

HF Readers
- made with antenna embedded into pcb
- Options
    - MFRC-522
- Contains user changable code

## UID

Wiegand is protocol to connect reader to controller

Two Formats

- W26
- W34 (longer, preferable)

## Output Signal

LF
- See a spike in frequency domain in 125 khz
- Might see the harmonics later if designed cheaply without filters

When placed next to RF tag, signal gets smaller because it powers tag and spectrum gets wider (signal is modulated)

## Reach

- 2.5 cm for a tag
- 4 cm for a card (bigger card antenna)
- For LF, the sheilding has no real affect
- But if you put 2 different cards next to each other, signal is muffled

## Encryption

Sophisticated encrypted systems 
    - MIFARE DESFire 
    - HID iClass

## Build your own

- RDM6300 
- connect to a software serial
- to arduino uno


#### Duplication Notes:

- Encrypted or proprietary RFID technology for security purposes (encryption or rolling codes)
- Standard, unencrypted tags (like low-frequency or high-frequency RFID tags) can be copied easily