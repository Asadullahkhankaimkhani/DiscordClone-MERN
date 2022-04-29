const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("new connected user: ", connectedUsers);
};

const removeConnectedUser = ({ socketId }) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log("disconnected user: ", connectedUsers);
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};
