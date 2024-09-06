import express from "express";
const app = express();
//Middleware
app.use(express.json());
//Connections and Listeners
app.listen(5000, () => console.log("Server Open in Port 5000"));
//# sourceMappingURL=index.js.map