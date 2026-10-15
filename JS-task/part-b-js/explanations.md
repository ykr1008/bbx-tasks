# Part B — JavaScript Utility Functions

## 1. myMap(), myFilter(), and myReduce()

These functions were implemented from scratch using loops and callbacks instead of using JavaScript's built-in `map()`, `filter()`, and `reduce()` methods.

- **myMap():** Iterates through an array, applies the callback to each element, and returns a new array containing the results.
- **myFilter():** Iterates through an array, calls the callback for each element, and returns a new array containing only the elements for which the callback returns a truthy value.
- **myReduce():** Iterates through an array and passes an accumulator and the current element to the callback. It returns one final accumulated value. It can also accept an optional initial value.

## 2. memoize(fn)

Memoization is a technique that stores the results of function calls so that repeated calls with the same arguments can reuse a previously calculated result.

In my implementation, a cache stores the result for each argument. When the function is called again with an argument already in the cache, the saved result is returned without executing the original function again.

**Proof using a counter:**

I created a counter that increments every time the original `square()` function runs. Calling the memoized function three times with the argument `5` returns `25` each time, but the counter remains `1`. This proves that the original function executes only once for that argument.

**Language feature: Closures.**

Closures allow the returned function to remember and access the cache variable from the outer `memoize()` function, even after the outer function has finished executing.

## 3. deepClone(obj)

A deep clone creates a separate copy of an object, including its nested objects and arrays. Changes to the cloned nested values do not affect the original object.

My implementation recursively copies nested values, creates new arrays and objects, and creates new `Date` objects representing the same time. A `WeakMap` tracks objects that have already been copied so circular references do not cause infinite recursion.

### What JSON.parse(JSON.stringify(x)) loses

JSON serialization is not suitable for every JavaScript value:

- **Date objects:** Converted into strings instead of remaining `Date` objects.
- **undefined values:** Object properties with `undefined` values are omitted, and `undefined` array elements become `null`.
- **Functions and symbols:** Object properties containing these values are generally omitted.
- **NaN and Infinity:** Converted to `null`.
- **Circular references:** Cause an error because JSON cannot represent circular structures.
- **BigInt:** Causes an error during JSON serialization.

Therefore, a custom deep-cloning function can preserve some JavaScript types and structures that JSON serialization cannot.

## 4. once(fn)

The `once()` function creates a wrapper that executes the original function only on its first call. It stores the first result and returns that same result on subsequent calls without executing the original function again.

**Proof using a counter:**

I created a counter that increments whenever the original `greet()` function runs. Calling the wrapper three times increments the counter only once. The wrapper returns the result from the first call each time.

**Language feature: Closures.**

Closures allow the wrapper function to remember the `called` flag and the stored `result` between calls, even after `once()` has finished executing.

## Conclusion

This assignment demonstrates how callbacks, loops, accumulators, caching, recursion, and closures can be used to implement reusable JavaScript utility functions without relying on the built-in equivalents for array mapping, filtering, and reduction.