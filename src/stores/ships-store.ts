import { EMPTY_SEARCH_QUERY, EMPTY_SEARCH_RESPONSE, SearchQuery, SearchResponse, SortOrder } from '../api/common'
import { Ship } from '../api/interfaces/ship'
import { ref, Ref, watch } from 'vue'
import { defineStore } from 'pinia'

import shipsApi from '../api/ships'

interface State {
    shipSearchResponse: Ref<SearchResponse<Ship>>
    shipSearchQuery: Ref<SearchQuery>
    isTableLoading: Ref<boolean>

    editDrawerShipData: Ref<Ship | null>
    isEditDrawerLoading: Ref<boolean>

    fetchShips: () => void
    updateShip: (updatedShip: Ship) => void
}

export const useShipsStore = defineStore('ships', (): State => {
    const shipSearchResponse: Ref<SearchResponse<Ship>> = ref(EMPTY_SEARCH_RESPONSE)
    const shipSearchQuery: Ref<SearchQuery> = ref(EMPTY_SEARCH_QUERY)
    const isTableLoading = ref(false)

    const editDrawerShipData: Ref<Ship | null> = ref(null)
    const isEditDrawerLoading = ref(false)

    const fetchShips = async () => {
        isTableLoading.value = true
        shipSearchResponse.value = await shipsApi.fetchShips(shipSearchQuery.value)
        isTableLoading.value = false
    }

    const updateShip = async (updatedShip: Ship) => {
        isEditDrawerLoading.value = true
        const resp = await shipsApi.updateShip(updatedShip)
        editDrawerShipData.value = !resp ? editDrawerShipData.value : null
        isEditDrawerLoading.value = false
    }

    watch(shipSearchQuery, async () => {
        await fetchShips()
    })

    return {
        shipSearchResponse,
        shipSearchQuery,
        isTableLoading,
        editDrawerShipData,
        isEditDrawerLoading,
        fetchShips,
        updateShip
    }
})
