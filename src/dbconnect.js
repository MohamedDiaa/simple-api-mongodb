// import MongoClient and ServerAPiVersion from monogdb
import { MongoClient ,ServerApiVersion } from "mongodb";

// import secret uri
import { uri } from "../secret.js";

export const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  