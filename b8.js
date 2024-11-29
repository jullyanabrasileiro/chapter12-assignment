// Do it yourself 8
// Open a file named b8.js and write a suitable code that will print to the console all
// the records that are in mongodb that cost between 20 and 40.
// Help with the command:
// find().toArray();

import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function fetchRecordsWithPriceBetween20And40() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db("productDB");
        const collection = database.collection("products");

        const records = await collection.find({
            $gte: 20, $lte: 40
        }).toArray();

        console.log("Products with price 20:", records);

    } catch (error) {
        console.error("Error while fetching records:", error);
    }
}

fetchRecordsWithPriceBetween20And40();