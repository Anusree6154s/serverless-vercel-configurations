const express = require("express");
const router = require("../routes");

const app = express();
app.use(router);

export const config = { maxDuration: 30 };
module.exports = app;
