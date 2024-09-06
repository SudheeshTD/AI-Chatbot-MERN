import express from "express";

const app = express();

app.get("/hello", (req, res, next) => {
  return res.send("hello")
});

app.listen(5000, () => console.log("Server Open in Port 5000"));
