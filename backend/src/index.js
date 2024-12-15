import express from "express";
import { PORT } from "./config/serverConfig.js";
import cors from "cors";
import apiRouter from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "ping" });
});

app.listen(PORT, () => {
  console.log("Server started on PORT - " + PORT);
});
