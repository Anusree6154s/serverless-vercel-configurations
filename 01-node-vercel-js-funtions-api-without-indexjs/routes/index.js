const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("home route");
  res.send("use route")
});

router.get("/call", (req, res) => {
  console.log('call route')
  res.send("Hello from Node.js on Vercel!");
});

router.get("/first-route", (req, res) => {
  console.log("routes called");
  res.send("routes route called");
});

router.get("/slow", async (req, res) => {
  console.log("timer started");
  await setTimeout(() => {
    console.log("timer over");
    res.send("slow route called");
  }, 20000);
});

module.exports = router;
