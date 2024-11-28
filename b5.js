import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function fetchRecordsWithPrice20() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db("productDB");
        const collection = database.collection("products");

        const records = await collection.find({
            price:20
        }).toArray();

        console.log("Products with price 20:", records);

    } catch (error) {
        console.error("Error while fetching records:", error);
    }
}

fetchRecordsWithPrice20();