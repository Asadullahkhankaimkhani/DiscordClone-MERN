const connectedUsers = new Map();

const addNewConnectedUser = ({ userId, socketId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("new connected user: ", connectedUsers);
};

module.exports = {
  addNewConnectedUser,
};
