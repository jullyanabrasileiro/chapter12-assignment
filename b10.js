// Do it yourself 10
// Open a file named b10.js and write a suitable code that will print to the console
// all the records, limit the number of records to 2.
// Help with the command:
// find().toArray();

import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function fetchRecordsPriceGreaterThan20Age12() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db("productDB"); 
        const collection = database.collection("products"); 
       
        const records = await collection.find().limit(2).toArray();

        console.log("Here are the first 2 records:");

        for (let i = 0; i < records.length; i++) {
            console.log(`Record ${i + 1}:`);
            console.log(records[i]);
        }
    } catch (error) {
        console.error("Error while fetching files", error);
    } finally {
        await client.close(); 
    }
}

fetchRecordsPriceGreaterThan20Age12(); 
