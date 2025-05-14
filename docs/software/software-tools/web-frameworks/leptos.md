# Leptos

- Rust framework attempting to replace the framework YEW by producing DOM instead of a virtual DOM, so rendering on the browser is much quicker.
    - Other arguments seem trivial...

## Build Options

1. Client-side rendering (CSR) use: **Trunk**
2. Full-stack, server-side rendering (SSR) use: **cargo-leptos**
      - Server-side rendering leads to slower developer iteration loop because you need to recompile both the server and client when making Rust code changes. 
      - But better load times for client and better SEO scores.

**cargo-leptos** (for full-stack - server-side rendering) 

- needs to build two separate binaries
    - one compiled to native code and running the server
    - one compiled to WebAssembly (WASM) and running in the user’s browser
- Additionally, the server needs to know how to serve this WASM version (and the JavaScript required to initialize it) to the browser
- also has some built-in support for things like Tailwind, SASS, and testing



## Template Options

https://book.leptos.dev/ssr/21_cargo_leptos.html

Axum - relatively newer, lightweight, and asynchronous web framework

- Axum depends on Tokio for asynchronous tasks
- https://github.com/leptos-rs/start-axum

Actix - most mature and high-performance web frameworks for Rust

- https://github.com/leptos-rs/start-actix


## Getting started

- https://book.leptos.dev/01_introduction.html
- https://book.leptos.dev/ssr/21_cargo_leptos.html
- https://book.leptos.dev/deployment/ssr.html


## Citations

- https://leptos.dev/