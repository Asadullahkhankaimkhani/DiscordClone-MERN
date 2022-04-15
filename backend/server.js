const express = require("express");
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./db");
const fs = require("fs");
const morgan = require("morgan");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

fs.readdirSync("./routes").map((r) =>
  app.use("/api/v1", require(`./routes/${r}`))
);

const server = http.createServer(app);
dbConnection();

server.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
