import express from 'express';
import ships from './ships-dataset'
import user from "./user";

const app = express()

app.get("/api/ships", (req, res) => {
    res.json(ships)
})

app.get("/api/user", (req, res) => {
    res.json(user)
})

export const handler = app
