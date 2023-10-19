let connection;
const { MoveUp, MoveRight, MoveLeft, MoveDown , words} = require("./constants");
const MoveKeys = {
  w: MoveUp,
  s: MoveDown,
  a: MoveLeft,
  d: MoveRight,
};
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  } else if (MoveKeys[data]) {
    connection.write(MoveKeys[data]);
  } else if(words[data]){
    connection.write(words[data])
  }
};

module.exports = { setupInput };
