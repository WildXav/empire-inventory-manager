import express from 'express';
import ships from './ships-dataset'
import user from "./user";

const app = express()

app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
        setTimeout(() => {
            next()
        }, 1500)
    } else {
        next()
    }
})

app.get("/api/ships", (req, res) => {
    res.json(ships)
})

app.get("/api/user", (req, res) => {
    res.json(user)
})

export const handler = app
