import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import bodyParser from "body-parser";
import Cards from "./dbCards.js";
// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://arafmamia:uIIfpC31k7HkJSwh@cluster0.hnmj2xt.mongodb.net/?retryWrites=true&w=majority";
// middlewares
app.use(bodyParser.json());
app.use(Cors());
// DB config
(function db() {
  mongoose
    .connect(connection_url)
    .then((result) => {
      console.log("connected");
    })
    .catch((err) => console.log(err));
})();

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello clever programmer");
});
app.post("/tinder/cards", (req, res) => {
  console.log(dbCard);
  Cards.create(dbCard)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
app.get("/tinder/cards", (req, res) => {
  Cards.find({})
    .then((foundedItems) => {
      res.status(200).send(foundedItems);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
// listener
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
