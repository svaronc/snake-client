// Define the IP address as "localhost."
const IP = "localhost";

// Define the port number as 50541.
const PORT = 50541;

// Define a constant 'Name' with the value "Name: SVC."
const Name = "Name: SVC";

// Define constants for different movement directions.
const MoveUp = "Move: up";
const MoveDown = "Move: down";
const MoveLeft = "Move: left";
const MoveRight = "Move: right";

// Define an object 'words' with key-value pairs for specific commands.
const words = {
  q: "Say: Let's go",
  e: "Say: i am gonna win",
};

// Export the defined constants and object for use in other modules.
module.exports = {
  IP,
  PORT,
  Name,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  words,
};
