const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    console.log("connection successfully established!");
    conn.write("Name: SVC");
  });
  return conn;
};

module.exports = { connect };
