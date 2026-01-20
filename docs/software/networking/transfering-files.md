# Transfering Files

[Filezilla](https://filezilla-project.org/) is what I used in college... And just used again in 2026. 

There are protocols more/less secure, don't really need to worry about it tbh...

NOTE: Both `server` and `client` will ask if you recognize the sha hash... just say yes... 

Download `Filezilla Server` on computer that you want to share files from

- Need to set up config 
- `127.0.0.1` means own computer (IPv4 Loopback address)
- So use that and default port number
- In settings, see port number is probably `21`
- Add a username/password + a foldername + folder you will be sharing
- In terminal type `ipconfig` and find the IPv4 address associated with your computer

Download `Filezilla Client` on computer that will recieve files

- Login with `username/password/ip/port`
- Ensure both devices don't lock (mostly just the server computer doesn't lock)

![filezilla-client-image](./images/filezilla-client.png)
