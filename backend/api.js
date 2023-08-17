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
    const limit = Number.parseInt(req.query.limit) || 5
    const offset = Number.parseInt(req.query.offset) || 0

    res.json({
        total: ships.length,
        results: ships.slice(offset, offset + limit)
    })
})

app.get("/api/user", (req, res) => {
    res.json(user)
})

export const handler = app
