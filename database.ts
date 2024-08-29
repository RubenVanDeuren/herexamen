import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { Series, User } from "./types";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
export const client = new MongoClient(MONGODB_URI);

function seedDatabase() {
}

export function getSeries(q: string, sortField: string, direction: number) {
    return [];
}

export function login(username: string, password: string) {
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