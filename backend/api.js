import express from 'express'
import bodyParser from 'body-parser'
import ships from './ships-dataset'
import user from "./user"

const app = express()
let updatedShips = []

app.use(bodyParser.json())

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
    const sort_prop = req.query['sort_prop'] || 'id'
    const sort_order = req.query['sort_order'] || 'ascending'

    res.json({
        total: ships.length,
        results: sortShips(ships, sort_prop, sort_order).slice(offset, offset + limit)
    })
})

app.put("/api/ships/:shipId", (req, res) => {
    const shipId = req.params.shipId

    if (!ships.find(s => !isNaN(shipId) && s.id === Number.parseInt(shipId))) {
        return res.sendStatus(404)
    }

    const updatedShip = req.body

    if (isNaN(updatedShip.id) || !updatedShip.type || !updatedShip.manufacturer || !updatedShip.model
        || !updatedShip.cost || !updatedShip.qty_left_pct || !updatedShip.pic_url || !updatedShip.tags) {
        return res.sendStatus(401)
    }

    updatedShips = [...updatedShips.filter(s => s.id !== updatedShip.id), updatedShip]

    res.json(updatedShip)
})

const sortShips = (ships, sort_prop, sort_order) => {
    const sortedShips = [
        ...ships.filter(ship => !updatedShips.map(s => s.id).includes(ship.id)),
        ...updatedShips
    ]

    const isAscendingOrder = sort_order === 'ascending'

    switch (sort_prop) {
        case 'id':
            sortedShips.sort((a, b) => isAscendingOrder ? a.id-b.id : b.id-a.id)
            break
        case 'qty_left_pct':
        case 'cost':
            sortedShips
                .sort((a, b) => {
                    const valA = Number.parseFloat(a[sort_prop])
                    const valB = Number.parseFloat(b[sort_prop])
                    return isAscendingOrder ? valA-valB : valB-valA
                })
            break
        default:
            sortedShips.sort((a, b) => {
                return isAscendingOrder ? a[sort_prop].localeCompare(b[sort_prop]) : b[sort_prop].localeCompare(a[sort_prop])
            })
            sortedShips
                .map(ship => ({...ship, [sort_prop]: Number.parseFloat(ship[sort_prop])}))
                .sort((a, b) => {
                    return isAscendingOrder ? a[sort_prop]-b[sort_prop] : b[sort_prop]-a[sort_prop]
                })
            break
    }

    return sortedShips
}

export const handler = app
