let promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    let success = false; // Simulate success or failure
    if (success) {
      resolve("Operation completed successfully");
    } else {
      reject("Operation failed");
    }
  }, 2000);
});

promise
  .then((result) => {
    console.log(result); // Output: Operation completed successfully
  })
  .catch((error) => {
    console.log(error); // Output: Operation failed
  });
