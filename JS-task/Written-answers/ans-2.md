# Explain the event loop.

The **event loop** is a mechanism in JavaScript that allows asynchronous operations to be handled without blocking the main thread while waiting for them to complete.

JavaScript executes synchronous code using the call stack. When asynchronous operations, such as timers or network requests, are involved, their completion is handled through the relevant browser or Node.js APIs. Their callbacks are then scheduled for execution.

The event loop checks whether the call stack is empty and coordinates when queued callbacks can run. Promise callbacks, such as those created by `.then()` or `await`, are scheduled as microtasks. Timer callbacks, such as those from `setTimeout()`, are scheduled as tasks, sometimes called macrotasks. Microtasks are processed before the next task begins.

For example, a `Promise.then()` callback normally runs before a `setTimeout()` callback scheduled for zero milliseconds, even if the timer was registered first.

In my async-fetch exercise, I used `await`, `Promise.all()`, and `Promise.allSettled()`. These helped me work with asynchronous network requests without blocking the program while waiting for responses.
