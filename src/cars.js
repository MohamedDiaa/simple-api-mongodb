import { client } from "./dbconnect.js";

export async function getCars(req, res) {
  try {
    await client.connect();
    const collection = await client.db("test").collection("cars");

    collection.find().toArray((err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.json(result);
    });
    
  } finally {
     await client.close();
  }
}

export async function addCar(req, res) {
  try {
    await client.connect();
    const collection = await client.db("test").collection("cars");
    const car = req.body;
    collection.insertOne(car, (err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.json(result);
    });
  } finally {
    await client.close();
  }
}

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("test").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
