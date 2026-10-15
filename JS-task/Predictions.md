# Part A — Predict Then Verify

## 1. `typeof`

**Code:**

```javascript
console.log(typeof null, typeof undefined, typeof NaN, typeof []);
```

- **My prediction:** `null undefined number array`
- **Actual output:** `object undefined number object`
- **Mismatch explanation:** `typeof null` returns `"object"`, and `typeof []` also returns `"object"`, so my predictions for these two values were wrong.

---

## 2. Equality operators

**Code:**

```javascript
console.log(
  0 == '0',
  0 === '0',
  null == undefined,
  null === undefined,
  NaN == NaN
);
```

- **My prediction:** `false false false false false`
- **Actual output:** `true false true false false`
- **Mismatch explanation:** My first and third predictions were wrong because `==` allows type coercion, and `null == undefined` evaluates to `true`.

---

## 3. Array equality and truthiness

**Code:**

```javascript
console.log([] == false, [] ? 'truthy' : 'falsy');
```

- **My prediction:** `false falsy`
- **Actual output:** `true truthy`
- **Mismatch explanation:** Both predictions were wrong because an empty array is truthy, and `[] == false` evaluates to `true` through type coercion.

---

## 4. `var`, `let`, and `setTimeout`

**Code:**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var', i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let', j), 0);
}
```

- **My prediction:** The `var` loop prints nothing, and the `let` loop prints `1, 2, 3`.
- **Actual output:**

```text
var 3
var 3
var 3
let 0
let 1
let 2
```

- **Mismatch explanation:** Both predictions were wrong because the `var` callbacks share the same variable, which becomes `3`, while `let` creates a separate binding for each iteration.

---

## 5. Synchronous code, promises, and timers

**Code:**

```javascript
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');
```

- **My prediction:** `A, D, C, B`
- **Actual output:**

```text
A
D
C
B
```

- **Mismatch explanation:** No mismatch. Synchronous statements run first, followed by the Promise callback and then the timer callback.

---

## 6. Mutating a `const` array

**Code:**

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

- **My prediction:** `[1, 2, 3, 4]`
- **Actual output:** `[1, 2, 3, 4]`
- **Mismatch explanation:** No mismatch.
- **Why is this allowed with `const`?** `const` prevents reassignment of the variable, but it does not prevent changing the contents of the array.

---

## 7. Shallow copying

**Code:**

```javascript
const a = { x: { y: 1 } };
const b = { ...a };

b.x.y = 99;

console.log(a.x.y);
```

- **My prediction:** `99`
- **Actual output:** `99`
- **Mismatch explanation:** No mismatch. The spread operator creates a shallow copy, so both objects refer to the same nested object.

---

## 8. Default versus numeric sorting

**Code:**

```javascript
console.log(
  [10, 9, 1].sort(),
  [10, 9, 1].sort((p, q) => p - q)
);
```

- **My prediction:** `[1, 9, 10]` for both expressions.
- **Actual output:** `[1, 10, 9] [1, 9, 10]`
- **Mismatch explanation:** My first prediction was wrong because default `sort()` compares elements as strings, whereas the comparator sorts them numerically.

---

## 9. Regular method versus arrow function `this`

**Code:**

```javascript
const o = {
  n: 'x',
  reg() {
    return this.n;
  },
  arrow: () => this?.n
};

console.log(o.reg(), o.arrow());
```

- **My prediction:** `x undefined`
- **Actual output:** `x undefined`
- **Mismatch explanation:** No mismatch. The regular method uses the object as `this`, while the arrow function inherits `this` from its surrounding scope.

---

## 10. `map()` versus `forEach()`

**Code:**

```javascript
console.log(
  [1, 2, 3].map(n => n * 2),
  [1, 2, 3].forEach(n => n * 2)
);
```

- **My prediction:** `undefined [2, 4, 6]`
- **Actual output:** `[2, 4, 6] undefined`
- **Mismatch explanation:** My prediction was reversed. `map()` returns a new array, while `forEach()` returns `undefined`.

---

## Quick revision summary

- `typeof null` and `typeof []` both return `"object"`.
- `==` allows type coercion, while `===` does not.
- Empty arrays are truthy.
- `var` shares a variable across loop iterations; `let` creates separate iteration bindings.
- Promise callbacks run before timer callbacks.
- `const` prevents reassignment, not mutation.
- Spread syntax creates a shallow copy.
- Default `sort()` compares values as strings.
- Regular methods get `this` from the call; arrow functions inherit it from the surrounding scope.
- `map()` returns a new array, while `forEach()` returns `undefined`.