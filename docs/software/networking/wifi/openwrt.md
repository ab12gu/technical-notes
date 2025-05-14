# OpenWRT

Linux operating system targetting embedded devices, used to route network traffic

- Acronym meaning: Open Wireless Router
- Command-line environment defined w/ busybox (basic linux commands)
- Writable root file system (enabling modification of any file and easily install any software)
- Can install software via `opkg` package manager (w/ 8000 packages as of 2022)

Can be configured via web interface LuCl or via command-line. (or other web interfaces like Gargoyle)

- Provide set of scripts (called UCI - Unified configuration interface) to simply configuring via command-line

Wireless settings to operate as:

- Wireless repeater
- Wireless access point
- Wirelesss bridge
- Captive portal
- OR, combination: ChilliSpot, WiFiDog Captive Portal, etc

Based on a heavily modified Buildroot system

- OpenWrt Buildroot is a set of Makefiles and patches that automates the process of building the OS

Embedded devices generally use a different processor/architecture than tranditoinal CPU's in computers, so it requires a cross-compilation toolchain (ex x86 vs MIPS32).

Requirements:
 
- Devices equipped with wireless chips from either Qualcomm's Atheros, Ralink (now MediaTek) or any vendor with open source drivers
- Avoids Broadcom chipsets as the feature set is very limited due to having no open drivers
- Recommends choosing a device with a minimum of 16 MB of flash and 128 MB of RAM

## Citations

- https://en.wikipedia.org/wiki/OpenWrt
- https://openwrt.org/
- https://firmware-selector.openwrt.org/
