const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const linkedRoute = require("./routes/linkedRoute");
const path = require("path");

mongoose.connect("mongodb://localhost/links");

let db = mongoose.connection;

db.on("error", () => {
  console.log("Houve um erro");
});
db.once("open", () => {
  console.log("Banco carregado");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use("/", linkedRoute);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
