// Do it yourself 11
// Open a file named b11.js and write an appropriate code that will update the record
// that cost 20 to 30 Help with updateOne:


import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function updateRecord() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db("productDB"); 
        const collection = database.collection("products"); 
       
        const filter = { price: 20 };

        const update = { $set: { price: 30 } };

        // Update first matching record
        const result = await collection.updateOne(filter, update);

        if (result.modifiedCount > 0) {
            console.log("Record updated sucessfully");
        } else {
            console.log("No matching records found to update.")
        }

        const records = await collection.find().toArray();

        console.log("Updated records in the database:");

        records.forEach((record, index) => {
            console.log(`Record ${index + 1}:`, record);
        });
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

updateRecord(); 