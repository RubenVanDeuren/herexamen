import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

import { Series, User } from "./types";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
export const client = new MongoClient(MONGODB_URI);
export const userCollection = client.db("login-express").collection<User>("users");

function seedDatabase() {
}

export function getSeries(q: string, sortField: string, direction: number) {
    return [];
}

export async function login(username: string, password: string) {
    
    if (username === "" || password === "") {
        throw new Error("username and password required");
    }
    let user : User | null = await userCollection.findOne<User>({username: username});
    if (user) {
        if (await bcrypt.compare(password, user.password!)) {
            return user;
             
        } else {
             throw new Error("Password incorrect");
        }
    } else {
        throw new Error("User not found");
    }
    
    
}

export function getUser(username: string) {
    return [];
}

export function deleteSeries(id: string) {
    
}

export function createUser(user: User) {
    
}

export function connect() {
    
}