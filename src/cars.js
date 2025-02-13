import { client } from "./dbconnect.js";

export async function getCars(req, res) {
  try {
    await client.connect();

     const db = client.db("test");
     const collectionName = db.collection("cars")
     
     const result = await collectionName.find().toArray();
     res.json(result);

  } finally {
    await client.close();
  }
}

export async function addCar(req, res) {
  try {
    const car = req.body;
    console.log(car);

    await client.connect();

    const db = client.db("test");
    const collectionName = db.collection("cars")

    const result =  await collectionName.insertOne(car);
    
    console.log(
         `A document was inserted with the _id: ${result.insertedId}`,
    )
    res.json(result);

  } finally {
    await client.close();
  }
}

export async function run() {
  try {

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    client.db("test").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
