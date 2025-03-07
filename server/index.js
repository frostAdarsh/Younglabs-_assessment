import express from "express";
import cors from "cors";
import greetRouter from "./route/greet.router.js";

const app = express();
const PORT = 5000;

app.use(cors());


app.use("/api", greetRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
