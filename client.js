// Import the 'net' module for network-related functionality.
const net = require("net");

// Import constants from the "./constants" module.
const {
  IP, // IP address
  PORT, // Port number
  Name, // Name
} = require("./constants");

// Define a function called 'connect'.
const connect = function () {
  // Create a network connection using the 'net' module.
  const conn = net.createConnection({
    host: IP, // Set the host to the imported IP address.
    port: PORT, // Set the port to the imported port number.
  });

  // Set the encoding to UTF-8, so data is treated as text.
  conn.setEncoding("utf8");

  // Event handler: when data is received from the connection.
  conn.on("data", (data) => {
    console.log(data); // Print the received data to the console.
  });

  // Event handler: when the connection is successfully established.
  conn.on("connect", () => {
    console.log("connection successfully established!"); // Print a success message to the console.
    conn.write(Name); // Write the 'Name' to the connection.
  });

  // Return the created connection.
  return conn;
};

// Export the 'connect' function to make it available to other modules.
module.exports = { connect };
