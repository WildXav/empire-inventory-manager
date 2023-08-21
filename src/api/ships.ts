import {BASE_API_PATH, EMPTY_SEARCH_RESPONSE, SearchQuery, SearchResponse} from "./interfaces/common"
import {Ship} from "./interfaces/ship"
import axios from "axios"

const baseUrl = `${BASE_API_PATH}/ships`

const fetchShips = async (query: SearchQuery): Promise<SearchResponse<Ship>> => {
    const params = new URLSearchParams()
    params.append('offset', query.offset.toString())
    params.append('limit', query.limit.toString())

    if (query.sortProp && query.sortOrder) {
        params.append('sort_prop', query.sortProp)
        params.append('sort_order', query.sortOrder)
    }

    try {
        const resp = await axios.get<SearchResponse<Ship>>(baseUrl, {params})
        return resp.data
    } catch (error) {
        console.error(error)
        return EMPTY_SEARCH_RESPONSE
    }
}

const updateShip = async (updatedShip: Ship): Promise<Ship | null> => {
    const url = `${baseUrl}/${updatedShip.id}`

    try {
        const resp = await axios.put<Ship>(url, updatedShip)
        return resp.data
    } catch (error) {
        console.error(error)
        return null
    }
}

export default {
    fetchShips,
    updateShip
}
