// Open a file named b4.js and write a suitable code that will print to the console all
// the records in mongodb
// Help with the command:
// find().toArray();

import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function fetchRecords() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db("productDB");

        const collection = database.collection("products");

        const records = await collection.find().toArray();

        console.log("Finded files:", records);
    } catch (err) {
        console.error("Error to find files", err);
    }
}

fetchRecords();