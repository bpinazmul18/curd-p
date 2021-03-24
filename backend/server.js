import express from "express";
import mongodb from "mongodb";

const app = express();
const dbURL = "mongodb://localhost/crudwithredux";
const PORT = process.env.PORT || 9000;

mongodb.MongoClient.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    app.get("/api/games", (req, res) => {
      db.collection("games")
        .find({})
        .toArray((err, games) => {
          res.json({ games });
        });
    });

    app.listen(PORT, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`Example app listening at http://localhost:${PORT}`);
      }
    });
  }
);
