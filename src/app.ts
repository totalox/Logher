import express, { type Express, type Request, type Response } from "express";

const backend: Express = express();

backend.use('/public', express.static('public'));

// Get in home
backend.get('/', (req: Request, res: Response) => {
  res.send('Hello Totalo!');
});

// Get in /user
backend.get("/user", (req: Request, res: Response) => {
  res.send("Get in /user")

});
// Put in /user
backend.put("/user", (req: Request, res: Response) => {
  res.send("Put in /user")
});

// Delete in /user
backend.delete("/user", (req: Request, res: Response) => {
  res.send("Delete in /user")
});

// Post in /user
backend.post("/user", (req: Request, res: Response) => {
  res.send("Post in /user")
})

backend.listen(3000);