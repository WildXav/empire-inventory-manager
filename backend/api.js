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

app.get("/api/user", (req, res) => {
    res.json(user)
})

app.get("/api/ships", (req, res) => {
    const limit = Number.parseInt(req.query.limit) || 5
    const offset = Number.parseInt(req.query.offset) || 0

    res.json({
        total: ships.length,
        results: sortShips(ships, req.query).slice(offset, offset + limit)
    })
})

const sortShips = (ships, query) => {
    if (!query.sort_prop || !query.sort_order) {
        return ships
    }

    const sortedShips = [...ships]
    const isAscendingOrder = query.sort_order === 'ascending'

    switch (query.sort_prop) {
        case 'id':
            sortedShips.sort((a, b) => isAscendingOrder ? a.id-b.id : b.id-a.id)
            break
        case 'qty_left_pct':
        case 'cost':
            sortedShips
                .sort((a, b) => {
                    const valA = Number.parseFloat(a[query.sort_prop])
                    const valB = Number.parseFloat(b[query.sort_prop])
                    return isAscendingOrder ? valA-valB : valB-valA
                })
            break
        default:
            sortedShips.sort((a, b) => {
                return isAscendingOrder ? a[query.sort_prop].localeCompare(b[query.sort_prop]) : b[query.sort_prop].localeCompare(a[query.sort_prop])
            })
            sortedShips
                .map(ship => ({...ship, [query.sort_prop]: Number.parseFloat(ship[query.sort_prop])}))
                .sort((a, b) => {
                    return isAscendingOrder ? a[query.sort_prop]-b[query.sort_prop] : b[query.sort_prop]-a[query.sort_prop]
                })
            break
    }

    return sortedShips
}

export const handler = app
