# React

An open-source library javascript library primarily used for website development. 

- maintained by Meta
- can be used w/ frameworks like `Next.js`
- only for rendering DOM
    - relies on libraries for routing & client side functionality
    - only re-renders those parts of the page that have changed

React components are **JavaScript functions that return markup**:

```tsx title="React Component || Typescript"
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

Now you can use this react component in other react components/markup


```tsx
...
<h2>Hi Kasi</h2>
<MyButton />
...
```

## JSX

JavaScript syntax extension popularized by React. 
It lets you write HTML-like markup inside a JavaScript file.

[https://react.dev/learn/writing-markup-with-jsx](https://react.dev/learn/writing-markup-with-jsx)





## Citations

- [https://react.dev/learn](https://react.dev/learn)
- [https://en.wikipedia.org/wiki/React_(software)](https://en.wikipedia.org/wiki/React_(software))
