const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    path: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  });
  io.on("connection", (socket) => {
    console.log("a user connected");
    console.log(socket.id);
  });
};

module.exports = registerSocketServer;
