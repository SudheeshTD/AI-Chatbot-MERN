import express from "express";
import { config } from "dotenv";
config();

const app = express();

//Middleware
app.use(express.json());

//Connections and Listeners
app.listen(5000, () => console.log("Server Open in Port 5000"));
