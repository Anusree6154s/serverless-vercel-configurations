const express = require("express");
const router = require("./routes");
const path = require("path");

const server = express();
// const port = process.env.PORT || 3001;

server.use(express.static(path.resolve(__dirname, "../client/build")));
server.use("/api", router);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

export const config = { maxDuration: 30 };
module.exports = server;