// Do it yourself 1
// The sequence available in the next slides (till the end of the chater) will only work if we perform all the steps
// described in the previous slides - connection to DB,try, Catch etc
// 1. Open an account in mongodb
// 2. After registering, make sure you have a user in the account's user list who has access to the account
// 3. Make sure your ip is in the ip list if not then add it
// 4. Create a js file named b1.js

// Create a product object with the following attributes in the b1.js file:
//  let product = {
//  "title": "ball" ,
//  "description" : "Big blue ball" ,
//  "tags": [ "circle", "toy", "kids" ],
//  "age": 12,
//  "price": 20
//  }

// Create 3 additional objects that describe different products in the b1.js file


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