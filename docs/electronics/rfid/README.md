# Overview

RFID (Radio-frequency identification)

- Electromagnetic fields to automatically identify and track tags attached to objects
- These tags contain electronically stored information, and they can be read from a distance without needing line-of-sight.

Tag

- Contains a microchip (for data) and an antenna (for communication).
    - Passive - no battery, powered by reader signal
    - Active - uses internal battery for longer range/more data
    - Semi-passive - battery-powered, but only responds when activated


| Type             | Frequency (US) | Frequency (EU) | Units        | Usage                                         | Range            | Pros                                                   | Cons                                                  |
|------------------|----------------|----------------|--------------|-----------------------------------------------|------------------|--------------------------------------------------------|-------------------------------------------------------|
| Low (LF)         | 125–134.2 kHz  | Same           | kHz (10³ Hz) | Animal tagging, keycards                      | Up to ~10 cm     | Works well near water/metal, low interference          | Short range, slow data rate                           |
| High (HF)        | 13.56 MHz      | Same           | MHz (10⁶ Hz) | NFC, smart cards, library systems             | Up to ~1 meter   | Global standard, moderate speed and range              | Some sensitivity to metal and water                   |
| Ultra High (UHF) | 902–928 MHz    | 865–868 MHz    | MHz (10⁶ Hz) | Inventory tracking, supply chain, toll booths | Up to ~12 meters | Long range, fast data rate, supports many tags at once | More affected by metal/liquids, regulated differently |

Also, microwave frequecies @ 2.45 GHz but ignoring atm

## RFID Tag Data Storage

Low Frequendcy tags, LF 

- chip: EM4100
    - UID (4 bytes)
        - written by manufacturer (unchangeable)
- chip: T5577
    - changable UID
    - can upload custom rfid response

High Frequency tags, HF
  
- Mifare classic
    - UID (4 bytes)
        - written by manufacturer (unchangeable)
    - 16 bytes (1 block) * 4 blocks * 16 sectors = 1024 bytes (writeable)

Some readers can read only a single HF or LF standard.

### Docs

- [RFID wiki page](https://en.wikipedia.org/wiki/Radio-frequency_identification)

### Vids

- [RFID How-To: Not only for Arduino](https://www.youtube.com/watch?v=vEkfa3OMvec&t=230s)
- [RFID Hacking and Cloning with Magic Cards, Proxmark3 and Arduino (T5577)](https://www.youtube.com/watch?v=eVIq3--O8bM)
