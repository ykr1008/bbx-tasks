# How does 'this' work?

In JavaScript, **`this` refers to a value determined mainly by how a function is called**, rather than where the function is defined.

When a regular function is called as an object's method, `this` usually refers to the object before the dot.

For example:

```javascript
const person = {
  name: "Alex",
  greet() {
    console.log(this.name);
  }
};

person.greet(); // Alex
```

Here, `this` refers to `person`, so `this.name` returns `"Alex"`.

In a regular standalone function, `this` depends on the execution context and whether strict mode is enabled. In a browser, a non-strict standalone function may use the global object, while a strict-mode function has `this` set to `undefined`.

Arrow functions behave differently: they do not create their own `this`. Instead, they inherit it from the surrounding lexical scope.

Understanding `this` is important when working with objects, event handlers, and callbacks. If a method is detached from its object and called separately, its `this` value may change. Methods can also use `bind()`, `call()`, or `apply()` to control `this`.
