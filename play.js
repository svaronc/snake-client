// Import the 'connect' function from the "./client" module.
const { connect } = require("./client");

// Import the 'setupInput' function from the "./input" module.
const { setupInput } = require("./input");

// Log a message to the console to indicate that the program is attempting to connect.
console.log("Connecting...");

// Call the 'setupInput' function and pass the result of the 'connect' function to it.
setupInput(connect());
