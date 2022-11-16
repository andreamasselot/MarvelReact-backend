const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");

app.use(charactersRoute);
app.use(comicsRoute);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(process.env.PORT, () => console.log("Server started"));
