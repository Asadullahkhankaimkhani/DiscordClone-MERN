const authSocket = require("./middleware/authSocket");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      path: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("a user connected");
    console.log(socket.id);
  });
};

module.exports = { registerSocketServer };
