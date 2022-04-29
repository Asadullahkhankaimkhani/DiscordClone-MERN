const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      path: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("a user connected");
    console.log(socket.id);
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });
};

module.exports = { registerSocketServer };
