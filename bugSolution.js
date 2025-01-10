const express = require('express');
const app = express();

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(error => {
    //Proper error handling within the route handler
    console.error('Error in / route:', error);
    res.status(500).send('Something went wrong');
  });
});

//Centralized error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}