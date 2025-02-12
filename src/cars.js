import { client } from "./dbconnect.js";

export const getCars = (req, res) => {
  client.connect((err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const collection = client.db(`test`).collection(`cars`);
    collection.find().toArray((err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.json(result);
      client.close();
    });
  });
};

export const addCar = (req, res) => {
  console.log("req");
  console.log(req);

  client.connect((err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const car = req.body;
    const collection = client.db(`test`).collection(`cars`);
    collection.insertOne(car, (err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.json(result);
      client.close();
    });
  });
};
