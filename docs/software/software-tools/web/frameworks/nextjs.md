# Next.js

**Next.js** is built on top of **Node.js**, which is a js runtime environment.

- Node.js runs the Next.js dev server
- Where Next.js transpiles your modern language code into older ES5+ (javascript 5)
    - Transpile - transforming code from one version/language into another



## Runtime Environment

Node.js takes care of: 

- the management of application memory
- how the program accesses variables
- mechanisms for passing parameters between procedures
- interfacing with the operating system (OS)
 
While, the compiler makes assumptions depending on the specific runtime system to generate correct code. 

Runtime system will have some responsibility:

- Setting up and managing the stack and heap 
- Other features
    - garbage collection, 
    - threads, or 
    - other dynamic features built into the language.

## Installation

https://nextjs.org/docs/app/getting-started/installation

### Via MacOS

First, need to install node package manager (npm)
```
brew install node
```

And through npm, you can install Next.js as a package. 
```
npm install next
```



## Citations

- https://en.wikipedia.org/wiki/Runtime_system