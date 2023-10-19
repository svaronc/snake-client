// Declare a variable 'connection' to store the network connection.
let connection;

// Import constants and an object from the "./constants" module.
const { MoveUp, MoveRight, MoveLeft, MoveDown, words } = require("./constants");

// Create an object 'MoveKeys' to map keyboard keys to movement commands.
const MoveKeys = {
  w: MoveUp, // 'w' key corresponds to moving up.
  s: MoveDown, // 's' key corresponds to moving down.
  a: MoveLeft, // 'a' key corresponds to moving left.
  d: MoveRight, // 'd' key corresponds to moving right.
};

// Define a function 'setupInput' that takes a 'conn' parameter.
const setupInput = function (conn) {
  connection = conn; // Store the network connection for later use.

  // Configure standard input (keyboard input).
  const stdin = process.stdin;
  stdin.setRawMode(true); // Enable raw mode to capture keypresses.
  stdin.setEncoding("utf8"); // Set input encoding to UTF-8.
  stdin.resume(); // Start listening to standard input.

  // Event handler: when data is received from standard input.
  stdin.on("data", handleUserInput);
  // Event handler for when you lose exit the command line 
  conn.on("end", () => {
    console.log("Disconnected from the server");
    process.exit();
  });
  // Return the standard input stream for possible further use.
  return stdin;
};

// Define a function 'handleUserInput' to process user input.
const handleUserInput = function (data) {
  if (data === "\u0003") {
    // If the user presses Ctrl+C (End of Text), exit the program.
    process.exit();
  } else if (MoveKeys[data]) {
    // If the pressed key is in the 'MoveKeys' object, send the corresponding movement command to the server.
    connection.write(MoveKeys[data]);
  } else if (words[data]) {
    // If the pressed key matches a key in the 'words' object, send the associated message to the server.
    connection.write(words[data]);
  }
};

// Export the 'setupInput' function for use in other modules.
module.exports = { setupInput };
