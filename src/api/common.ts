const BASE_API_PATH = '/api'

interface SearchResponse<T> {
    total: number
    results: Array<T>
}

interface SearchQuery {
    limit: number
    offset: number
}

const EMPTY_SEARCH_RESPONSE = {
    total: 0,
    results: []
}

const EMPTY_SEARCH_QUERY = {
    limit: 5,
    offset: 0
}

export {
    BASE_API_PATH,
    SearchResponse,
    SearchQuery,
    EMPTY_SEARCH_RESPONSE,
    EMPTY_SEARCH_QUERY
}