import {BASE_API_PATH, EMPTY_SEARCH_RESPONSE, SearchQuery, SearchResponse} from "./common";
import {Ship} from "./interfaces/ship";
import axios from "axios";

const baseUrl = `${BASE_API_PATH}/ships`

const fetchShips = async (query: SearchQuery): Promise<SearchResponse<Ship>> => {
    const params = new URLSearchParams();
    params.append('offset', query.offset.toString())
    params.append('limit', query.limit.toString())

    try {
        const resp = await axios.get<SearchResponse<Ship>>(baseUrl, {params})
        return resp.data
    } catch (error) {
        console.error(error)
        return EMPTY_SEARCH_RESPONSE
    }
}

export default {
    fetchShips
}
