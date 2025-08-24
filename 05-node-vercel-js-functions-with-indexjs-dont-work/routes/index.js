const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, Vercel 05!");
});

router.get("/first-route", (req, res) => {
  console.log("routes called");
  res.send("routes route called 05");
});

router.get("/slow", async (req, res) => {
  console.log("timer started");
  await setTimeout(() => {
    console.log("timer over");
    res.send("slow route called 05");
  }, 20000);
});


module.exports = router;
