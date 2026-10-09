import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction
} from "express";

export const backend: Express = express();

backend.use("/public", express.static("public"));

// Secret session (test)
backend.all("/secret", (req: Request, res: Response, next: NextFunction) => {
  console.log("Accessing the secret section ...");
  res.send("Access with success the secret area...");
  next(); // pass control to the next handler
});

//
backend.get(/a/, (req: Request, res: Response) => {
  res.send("/a/");
});

// Get in home
backend.get("/", (req: Request, res: Response) => {
  res.send("Hello Totalo!");
});

// Get in /user
backend.get("/user", (req: Request, res: Response) => {
  res.send("Get in /user");
});
// Put in /user
backend.put("/user", (req: Request, res: Response) => {
  res.send("Put in /user");
});

// Delete in /user
backend.delete("/user", (req: Request, res: Response) => {
  res.send("Delete in /user");
});

// Post in /user
backend.post("/user", (req: Request, res: Response) => {
  res.get("./");
});

backend.listen(3000);
