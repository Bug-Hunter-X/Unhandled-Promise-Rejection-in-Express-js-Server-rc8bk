# Unhandled Promise Rejection in Express.js Server

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  Asynchronous operations within request handlers often lead to errors that are not gracefully handled, resulting in unexpected server behavior or crashes.

The `bug.js` file shows an example of an Express.js server with an asynchronous operation that may fail.  Crucially, there is no error handling in place for the `catch` block of the promise.  This can lead to a silent failure, making debugging difficult.

The `bugSolution.js` file provides a corrected version, demonstrating proper error handling.  This solution uses a centralized error handler to catch and log errors, preventing the server from crashing and providing better insight into issues.

## How to reproduce the bug

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js`.
4. Refresh the page several times until you observe a crash or unhandled rejection in the console (due to the random nature of the error simulation).

## How to fix the bug

Refer to the `bugSolution.js` for an example of implementing proper error handling using a centralized error middleware.  This approach ensures that all unhandled errors within your Express.js application are handled gracefully. 
