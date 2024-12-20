// Open a file named b6.js and write a suitable code that will print to the console all
// the records that are in mongodb that cost more than 20.
// Help with the command:
// find().toArray();

import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function fetchRecordsWithPriceGreaterThan20() {
    try {        
        const database = client.db("productDB"); 
        const collection = database.collection("products");

        const records = await collection.find(
            {price: { $gt: 20 } }
        ).toArray();

        console.log("Products with price greater than 20:", records);
    } catch (error) {
        console.error("Error while fetchng files", error)
    }
}

fetchRecordsWithPriceGreaterThan20();