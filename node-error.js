// // Throws with a ReferenceError because z is not defined.
// try {
//   const m = 1;
//   const n = m + z;
// } catch (err) {
//   // Handle the error here.
// //   console.log("err", err);
// }

// const fs = require("fs/promises");

// (async () => {
//   let data;
//   try {
//     data = await fs.readFile("a file that does not exist");
//   } catch (err) {
//     console.error("There was an error reading the file!", err);
//     return;
//   }
//   // Otherwise handle the data
// })();

// const fs = require("fs");

// fs.readFile("example.txt", "utf8", function (error, data) {
//   if (error instanceof Error) {
//     console.error("Error reading file:", error);
//     // console.error("Error:", Error.captureStackTrace);
//     return;
//   }
//   console.log("File content:", data);
// });

// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// // Error event listener
// myEmitter.on("error", (err) => {
//   console.error("Error occurred:", err);
// });

// // Asynchronous method
// setTimeout(() => {
//   // Simulating an error
//   myEmitter.emit("error", new Error("Something went wrong!"));
// }, 1000);

// const net = require("node:net");
// const connection = net.connect("localhost");

// // Adding an 'error' event handler to a stream:
// connection.on("error", (err) => {
//   // If the connection is reset by the server, or if it can't
//   // connect at all, or on any sort of error encountered by
//   // the connection, the error will be sent here.
//   console.error(err);
// });

// connection.pipe(process.stdout);

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     Error.captureStackTrace(this, CustomError);
//   }
// }

// Error handling function
function validateInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    // Agar input string nahi hai ya khali hai, to error throw karein
    throw new Error("Invalid input: Input must be a non-empty string.");
  }
  return input;
}

// Main function to demonstrate error handling
function processInput(input) {
  try {
    // Input ko validate karein
    validateInput(input);
    console.log(`Input processed: ${input}`);
  } catch (error) {
    // Agar error aata hai to uska stack trace aur message log karein
    // console.error("Error message:", error.message);
    // console.error("Stack trace:", error.stack);
    // console.log("error", error);
    console.log("error", error.stack);
  }
}

// Example input
processInput(""); // Ye invalid input hai
// processInput(123); // Ye bhi invalid hai
// processInput("Hello, World!"); // Ye valid input hai
