# Localhost

IPv4 network standards reserve the entire address block 127.0.0.0/8 (more than 16 million addresses) for loopback purposesA

- Address 127.0.0.1 is the standard address for IPv4 loopback traffic
- `127.0.0.1:8000` is the same as `localhost:8000` is browser


## Run via Terminal

Python3

```
$ python3 -m http.server 8000
```

Node.js, by default it picks a port (usually 3000)

```
$ npx serve
```

Php

```
$ php -S localhost:8000
```

