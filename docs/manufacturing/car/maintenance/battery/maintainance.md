# Battery Maintenance

Charging batteries cost ~$100 -> $200 [amazon link](https://www.amazon.com/gp/product/B07BLLRM8R?psc=1)

I can charge the car 12v with a portable fast phone charger through some tricks I have up my sleeve

Prius battery is 45,000 mAh, but retains 30% capacity at full discharge

## Equipment

1. Fast charger about 30,000mah, able to provide 3amps
2. DC-DC boost module
    - boost the 5 volt output to 13.5 -> 14.4 volts

Note: Current is limited by charger so no need for fuse or extra limiter

## Charging Rate

For a 2008 Prius AGM: 13.4 V is a good target float voltage.

- Lead-acid batteries will accept very small currents, even tens of milliamps
- C = the capacity of the battery in ampere-hours (Ah)
= C/10 is safe, c/3 is fast, but safe
- However, Rule of thumb: C/100–C/50 is the practical lower limit for meaningful charging
- If lower than 0.5amps, might be lower than self discharge rate
- Float range: 13.2v -> 13.6v

Note: 6 hours if charging at 14.4v, 40 hours if charging at 13.6v

## Battery specs

AGM - sealed lead-acid battery where the electrolyte (sulfuric acid) is absorbed intoa  fiberglass mat instead of a free liquid

- A fully charged AGM battery sits around 12.6-12.8v
- Battery reading below 12.4v is partially discharged
- Battery reading below 12.0v is very discharged

Car running voltage is at 13.8-14.4v because the inverter/alternator rpovides it with some extra juice

- disconnecting brings down to 12.7 volts
- takes 30 minutes to reach 13 volts
- about 3 hours back to steady state 12.7 volts

## Battery discharge rates

- AGM batteries: ~2–3% per month at room temperature (25 °C)
- Flooded lead-acid: ~3–5% per month
- Lithium: ~1–2% per month

After 4 months, the voltage will be under 12.2 volts and will have too much sulfation

SOC - State of charge, expressing how full a battery is

- 12.7 V resting → ~100% SOC
- 12.2 V resting → ~50% SOC
- 12.0 V resting → ~25% SOC

The longer it sits below 50% SOC, the more sulfate crystals form

## Internals of battery

A "12v" battery has 6 lead acid cells in series, running at 2.1v

- Full charge: 2.1v*6 = 12.6v
- Full discharge: 1.75v * 6 = 10.5V
