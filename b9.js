// Do it yourself 9
// Open a file called b9.js and write a suitable code that will print to the console
// all the records that are in mongodb that are priced larger than 20 and are also
// suitable for ages 12
// Help with the command:
// find().toArray();

import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function fetchRecordsAge12PriceGreaterThan20() {
    try {        
        const database = client.db("productDB"); 
        const collection = database.collection("products");

        const records = await collection.find({
            price: { $gt: 20 },
            age: 12
        }).toArray();

        console.log("Products with price less than 20:", records);
    } catch (error) {
        console.error("Error while fetchng files", error)
    }
}

fetchRecordsAge12PriceGreaterThan20();
