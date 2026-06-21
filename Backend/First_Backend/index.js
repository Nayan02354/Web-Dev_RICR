// Environment variable load
import dotenv from "dotenv";
dotenv.config();

// Express
import express from "express";

// Object
const app = express();

// API

// app.get("/", (req, res) => {
//   console.log("Server Started");
//   res.json({ message: "Welcome to my First Backend Project" });
// });

app.get("/", (req, res) => {
  console.log(" Default Get API hit");
  res.json({ message: "Welcome to my First Backend Project" });
});

app.post("/login", (req, res) => {
  res.json({ message: "Login Sucessfull" })
});

// Process ki help se Environment varibales access kar skte h
const port = process.env.PORT || 5000;

// Listen to port no. 4500
app.listen(port, () => {
  console.log("Server started on port", port);
});
