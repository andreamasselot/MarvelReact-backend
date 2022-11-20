const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");
const favoritesRoute = require("./routes/favoris");
const usersRoute = require("./routes/users");

app.use(charactersRoute);
app.use(comicsRoute);
app.use(favoritesRoute);
app.use(usersRoute);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(process.env.PORT, () => console.log("Server started"));
