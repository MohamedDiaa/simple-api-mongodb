// import MongoClient and ServerAPiVersion from monogdb
import { MongoClient ,ServerApiVersion } from "mongodb";

// import secret uri
import { uri } from "../secret.js";


export const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1
})

