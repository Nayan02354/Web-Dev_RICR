// Environment variable load
import dotenv from "dotenv";
dotenv.config();

// Object
const app = express();

// Express
import express from "express";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// Default API

// app.get("/", (req, res) => {
//   console.log("Server Started");
//   res.json({ message: "Welcome to my First Backend Project" });
// });

app.get("/", (req, res) => {
  console.log(" Default Get API hit");
  res.json({ message: "Welcome to my First Backend Project" });
});

// Process ki help se Environment varibales access kar skte h
const port = process.env.PORT || 5000;

// Listen to port no. 4500
app.listen(port, () => {
  console.log("Server started on port", port);
});
