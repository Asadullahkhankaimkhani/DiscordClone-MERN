import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetials) => {
  const jwtToken = userDetials.token;
  socket = io("http://localhost:5000", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("connected to socket server");
    console.log(socket.id);
  });
};
