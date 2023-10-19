const net = require("net");
const {
  IP,
  PORT,
  Name,
} = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    console.log("connection successfully established!");
    conn.write(Name);
  });
  return conn;
};

module.exports = { connect };
