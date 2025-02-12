// import MongoClient and ServerAPiVersion from monogdb
import { MongoClient ,ServerApiVersion } from "mongodb";

// import secret uri
import { uri } from "../secret";


export const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
})

