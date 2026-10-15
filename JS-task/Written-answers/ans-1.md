# What is a closure and when have you used one?

A **closure** in JavaScript is created when a function remembers and can access variables from the scope in which it was defined, even after the outer function has finished executing.

For example:

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
```

Here, the inner function remembers the `count` variable even after `counter()` has finished running. This is a closure.

Closures are useful for maintaining private data, creating counters, implementing callbacks, and preserving state between function calls. They are also commonly used in event handlers and asynchronous operations.

I used a similar concept while implementing a `memoize` function in my JavaScript utility exercises. The function used a cache to remember previously calculated results. The inner function could access that cache through a closure, allowing it to reuse stored results and avoid unnecessary calculations.
