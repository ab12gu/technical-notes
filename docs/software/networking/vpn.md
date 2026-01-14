# VPN

VPN - virtual private network

- creates an encrypted connection between your device and the internet
- instead of connecting directly to the ip address of a website (like youtube/google)

Steps:

1. You make a request to connect to ip address of youtube
2. Your computer changes the http/s request to the vpn server
3. It also encrypts the original request alongside vpn ip as encrypted supplemental data
4. The isp sends encrypted data to the vpn
5. The vpn deciphers the data and gets data from original ip address of youtube
6. The vpn re-encrypts incoming data -> goes to isp -> goes back to your device
7. You unencrypt data locally

This whole process takes awhile. 

- Each packet needs to be encrypted/decrypted. 
- The processing time can be around 10% slower for good vpns. 


## VPN Recommnedations

- Sarah's VPN: [mullvad](https://mullvad.net/en), $5 per month
- Paul's friend stop using mullvad for political reasons
    - he uses proton or PIA now
