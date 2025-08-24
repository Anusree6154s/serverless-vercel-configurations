import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, Vercel 08!");
});

router.get("/first-route", (req: Request, res: Response) => {
  console.log("routes called");
  res.send("routes route called 08");
});

router.get("/slow", async (req: Request, res: Response) => {
  console.log("timer started");

  // Use Promise-based delay to avoid issues with async/await
  await new Promise((resolve) => setTimeout(resolve, 20000));
  
  console.log("timer over");
  res.send("slow route called 08");
});

export default router;
