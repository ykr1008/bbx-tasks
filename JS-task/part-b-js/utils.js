// myMap
function myMap(array, callback) {
  const result = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i], i, array);
  }

  return result;
}

console.log(myMap([1, 2, 3], function (number) {
  return number * 2;
}));

// myFilter
function myFilter(array, callback) {
  const result = [];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result[index] = array[i];
      index++;
    }
  }

  return result;
}

console.log(myFilter([1, 2, 3, 4, 5, 6], function (number) {
  return number % 2 === 0;
}));

// myreduce
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (arguments.length < 3) {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

console.log(myReduce([10, 20, 30], function (total, number) {
  return total + number;
}, 0));


// memoize
function memoize(fn) {
  const cache = {};

  return function (number) {
    if (number in cache) {
      return cache[number];
    }

    const result = fn(number);
    cache[number] = result;

    return result;
  };
}

// Prove that the original function runs only once per argument
let count = 0;

function square(number) {
  count++;
  return number * number;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // 25
console.log(memoizedSquare(5)); // 25
console.log(memoizedSquare(5)); // 25
console.log("Function ran:", count, "time(s)"); // 1


// deepclone
function deepClone(obj, seen = new WeakMap()) {
  // Return primitive values directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle circular references
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Create an empty array or object
  const clone = Array.isArray(obj) ? [] : {};

  seen.set(obj, clone);

  // Copy each property recursively
  for (const key of Object.keys(obj)) {
    clone[key] = deepClone(obj[key], seen);
  }

  return clone;
}

// Test deepClone
const original = {
  name: "Alex",
  address: {
    city: "Trivandrum"
  },
  hobbies: ["coding", "music"],
  birthday: new Date("2000-01-01")
};

const copy = deepClone(original);

copy.address.city = "Kochi";
copy.hobbies[0] = "reading";

console.log(original.address.city); // Trivandrum
console.log(copy.address.city);     // Kochi
console.log(original.hobbies[0]);   // coding
console.log(copy.hobbies[0]);       // reading
console.log(copy.birthday instanceof Date); // true



// once
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

// Test once()
let calls = 0;

function greet(name) {
  calls++;
  return "Hello, " + name;
}

const greetOnce = once(greet);

console.log(greetOnce("Alex")); // Hello, Alex
console.log(greetOnce("Sam"));  // Hello, Alex
console.log(greetOnce("John")); // Hello, Alex

console.log("Function ran:", calls, "time(s)"); // 1