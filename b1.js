import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db("productDB"); 
        const collection = database.collection("products"); 

        let products = [
            { title: "car", description: "Red toy car", tags: ["vehicle", "toy"], age: 10, price: 15 },

            { title: "doll", description: "Cute doll", tags: ["toy", "kids"], age: 5, price: 25 },

            { title: "puzzle", description: "100-piece puzzle", tags: ["game", "brain"], age: 8, price: 30 },

            { title: "bear", description: "Fluffy teddy bear", tags: ["toy", "teddy-bear"], age: 3, price: 20 },
        ];

        const result = await collection.insertMany(products);

        console.log("Products inserted:", result.insertedIds); 
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run();