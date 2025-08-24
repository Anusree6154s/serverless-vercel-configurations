const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("home route");
  res.send("use route 01")
});

router.get("/call", (req, res) => {
  console.log('call route')
  res.send("Hello from Node.js on Vercel 01!");
});

router.get("/first-route", (req, res) => {
  console.log("routes called");
  res.send("routes route called 01");
});

router.get("/slow", async (req, res) => {
  console.log("timer started");
  await setTimeout(() => {
    console.log("timer over");
    res.send("slow route called 01");
  }, 20000);
});

module.exports = router;
