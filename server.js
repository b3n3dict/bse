import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import Company from "./model/companies.js";
dotenv.config({ path: ".env" });

//app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const __dirname = path.resolve();

// app.use(express.static(path.join(__dirname, "./client/build")));
// //routes
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build", "index.html"));
// });
app.get("/", (req, res) => {
  res.send("<h1>bse</h1>");
});

app.post("/companies/:name", async (req, res) => {
  const Name = req.params.name;
  const data = await Company.find({ Name: { $regex: Name, $options: "i" } });
  res.send(data);
});

const PORT = process.env.PORT || 3000;

//db
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));
