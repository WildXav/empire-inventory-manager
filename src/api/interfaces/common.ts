import { Ship } from './ship'

const BASE_API_PATH = '/api'

interface SearchResponse<T> {
    total: number
    results: Array<T>
}

enum SortOrder {
    Ascending = 'ascending',
    Descending = 'descending'
}

interface SearchQuery {
    limit: number
    offset: number
    sortProp?: string
    sortOrder?: SortOrder
}

const EMPTY_SEARCH_RESPONSE: SearchResponse<Ship> = {
    total: 0,
    results: []
}

const EMPTY_SEARCH_QUERY: SearchQuery = {
    limit: 10,
    offset: 0,
}

export {
    BASE_API_PATH,
    SearchResponse,
    SortOrder,
    SearchQuery,
    EMPTY_SEARCH_RESPONSE,
    EMPTY_SEARCH_QUERY
}
