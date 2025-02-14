import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, Vercel!");
});

router.get("/first-route", (req: Request, res: Response) => {
  console.log("routes called");
  res.send("routes route called");
});

router.get("/slow", async (req: Request, res: Response) => {
  console.log("timer started");

  // Use Promise-based delay to avoid issues with async/await
  await new Promise((resolve) => setTimeout(resolve, 20000));
  
  console.log("timer over");
  res.send("slow route called");
});

export default router;
