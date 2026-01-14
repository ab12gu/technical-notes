# Drill

Torque = (Horsepower × 5252) / RPM

- Some motors maintain torque better under load (especially capacitor-start induction motors or TEFC motors)
- The WEN’s motor is lower quality — it bogs down easier under load
    - WEN 4214T uses a variable pulley system (belt + reeves drive). These lose torque at lower speeds.
    - basic capacitor-start, induction motor (capacitor-start split-phase induction motor (usually capacitor-start)
    - Better: electronic variable speed + geared belt drive or DC motors with constant torque curves maintain torque
        - Capacitor-start, capacitor-run induction motors, sometimes with TEFC (Totally Enclosed Fan Cooled) design
    - big Forstner bits that ideally run at 250–500 RPM.
    


Current drill I own - [corded drill - amazon](https://www.amazon.com/BLACK-DECKER-Corded-5-2-Amp-DR260C/dp/B00T2VJ93C)

- Black and Decker
- DR260C
- 5.5 amps
- 1600 rpm
- corded
- $45
- 3/8in (10 mm) chuck
- 

Jake's [drill press](https://wenproducts.com/products/wen-4214t-12-in-variable-speed-drill-press)

- WEN 4214T
- brushless, induction motor
- 5-Amp
- 12 inch swing
- 3 1/8 inch spindle travel
- 580 to 3200 RPM
- 5/8-inch capacity keyed chuck
- [$220 home depot](https://www.homedepot.com/p/WEN-5-Amp-12-in-Variable-Speed-Cast-Iron-Benchtop-Drill-Press-with-Laser-Work-Light-and-5-8-in-Chuck-Capacity-4214T/316951776)
- 0.75 horsepower

Let’s say you’re using a 2" Forstner bit in hard maple:

- Required torque to cut = ~6–10 Nm
- WEN motor may produce ~3–4 Nm at 580 RPM




## Purchase-able drill:

- [aliexpress cordless drill](https://www.aliexpress.us/item/3256807280799937.html?algo_exp_id=b408c4e7-c1db-46fc-b2a2-1b77df733d9f-17&pdp_ext_f=%7B%22order%22%3A%226%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis!USD!66.43!25.91!!!475.18!185.36!%402101ea8c17543287808551902e34ff!12000041018495586!sea!US!2624340281!X&curPageLogUid=TWlUAOhdiyHR&utparam-url=scene%3Asearch%7Cquery_from%3A#nav-specification)
    - Rated Input Power: 130W
    - Torque: 28 Nm
    - No-Load Speed: 1600rpm
    - Rated Voltage: 21V
    - Chuck: 3/8in
    - $26
- [Miwaulkee Impact Driver](https://www.homedepot.com/p/Milwaukee-M18-FUEL-SURGE-18V-Lithium-Ion-Brushless-Cordless-1-4-in-Hex-Impact-Driver-Tool-Only-2760-20/300193508?selectedSellerId=0#overlay)
    - $170
    - Recommended by Greg due to noise level
    - Used for tougher bolts
    - limitation: needs bits with hex collet (1/4")
        - many drillbits don't have a hex collet (spade, forstneer, even standard)
        - cant limit overdriving with torque limiter that drills have
            - but can work if u know ur impact driver well, generally not as smooth

## Common Drill Motor Specs

Most common consumer-grade drills use motors like:

- 775 DC Motor (commonly seen in 12V–24V drills)
- Brushed, high RPM (~18,000 RPM no-load)
- Geared down inside the drill to ~1200–1800 RPM at the chuck
- Stall current: 15–60 A depending on voltage
- Motor resistance: ~0.2–1.0 Ω depending on design

'''V=I⋅R, @ stall current'''

'''τ=Kt⋅I, Kt is torque constant'''

## Speed vs Torque

High speed only makes job faster but doesn't really provide much else, and can be done with higher torque drills

- Soft material, for quickness, use high speed
- Hard material use higher torque

Drills generally have a gear 1 (high torque) or gear 2 (high speed) options

- So at stall torque of gear 2, you a factor less than high torque of gear 1
- aka: gear 2 has a lower mechanical advantage

When you increase the speed with no load, it stops spinning indefinately cause the back emf reduces operating voltage

- back emf occurs due to motor spinning

If you change the operating torque, but not the speed in a drill, you are reducing the applied voltage to motor


## Common Motors Used in Drills

---

### 1. Brushed DC Motors

**Types:**  

- 775 size motor (industrial standard)  
- 550 size motor (smaller, less powerful)  

**Typical Specs:**  

- Voltage: 12 V to 24 V (cordless), up to ~120 V DC (corded, rectified)  
- No-load speed: ~15,000–20,000 RPM (motor shaft)  
- Geared down to ~1200–1800 RPM at chuck  

**Torque Constant \(K_t\):**  

- Approximately **0.02 to 0.06 Nm/A**  
- Higher power motors have lower \(K_t\) (higher speed, less torque per amp)  

**Motor Winding Resistance:**  

- Ranges from **0.1 Ω to 1.0 Ω** depending on size and voltage rating  
- Larger motors → lower resistance (~0.1–0.3 Ω)  
- Smaller motors → higher resistance (~0.5–1.0 Ω)  

### 2. Brushless DC Motors (BLDC)

**Types:**  

- 3-phase brushless motors, custom windings for torque-speed profile  

**Typical Specs:**  

- Voltage: 18 V to 60 V (common cordless tool batteries)  
- No-load speed: 20,000+ RPM (motor shaft)  
- Gear reduction to desired chuck speed  

**Torque Constant \(K_t\):**  

- Typically **0.02 to 0.07 Nm/A**  
- More efficient with better torque curves than brushed m

## Motor Torque

- A 550 motor drawing 5 A would produce around 0.2 Nm of torque.

| Drill Type           | Voltage (Typical)           | Stall Torque Range (Nm) | Notes                                                                 |
|----------------------|-----------------------------|------------------------|-----------------------------------------------------------------------|
| **Corded Drills**      | 110-120 V AC (rectified DC) | 20 – 50 Nm             | Powerful, stable torque, heavier units                                |
| **Cordless Drills**    | 12 – 24 V DC (some up to 60V) | 10 – 40 Nm             | Portable, often brushless, torque varies with battery voltage & model |
| **Heavy-Duty Cordless**| 36 – 60 V DC                 | 40 – 90 Nm             | High torque for professional tools                                   |
| **Compact Cordless**   | 10.8 – 14.4 V DC             | 5 – 15 Nm              | Smaller, light-duty drills                                            |


| Drill Type           | Typical Gear Ratio Range | Notes                                                                                   |
|----------------------|-------------------------|-----------------------------------------------------------------------------------------|
| **Corded Drills**      | ~10:1 to 25:1           | Heavy-duty motors spinning fast, geared down to provide high torque and lower speed at chuck |
| **Cordless Drills**    | ~15:1 to 30:1           | Compact motors, often brushless, geared down to balance torque and battery efficiency   |
| **Heavy-Duty Cordless**| Up to 30:1 or higher    | For high torque applications, gearboxes provide strong torque multiplication           |
| **Compact Cordless**   | ~10:1 to 20:1           | Smaller gearboxes for lightweight drills, less torque multiplication                    |

| Current (A) | 550 Motor Torque (Nm) \(K_t=0.04\) | 775 Motor Torque (Nm) \(K_t=0.06\) |
|-------------|------------------------------------|------------------------------------|
| 2           | 0.08                               | 0.12                               |
| 5           | 0.20                               | 0.30                               |
| 10          | 0.40                               | 0.60                               |
| 15          | 0.60                               | 0.90                               |
| 20          | 0.80                               | 1.20                               |


## Stall Currents for 550 and 775 Motors

Stall current can be much higher than rated continuous current. A drill may briefly draw 15–30 A during stall or heavy load, increasing torque proportionally.

| Motor Model       | Rated Voltage | Terminal Resistance (Ω) | Stall Current (A) |
|-------------------|----------------|---------------------------|-------------------|
| **550 Motor**     | 12V            | ~0.5 – 0.8 Ω              | 15 – 24 A         |
| **775 Motor**     | 18V / 24V      | ~0.2 – 0.4 Ω              | 45 – 90 A         |

Larger gear ratios:

Reflected inertia grows with the square of the gear ratio:

- J_reflected = J_load × (gear ratio)^2
- T = J × α
- P = T × ω

High inertia requires higher torque to overcome, so requires more current draw

- may lead to running into stall current before accelerating, so no movement :(


