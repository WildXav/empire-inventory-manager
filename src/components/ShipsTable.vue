<script setup lang="ts">
import {useShipsStore} from "../stores/ships-store"
import {computed, ref} from "vue"
import { Column } from 'element-plus'
import { formatTagLabel } from '../utils'

const store = useShipsStore()
const ships = computed(() => store.shipSearchResponse.results)
const currentPage = ref(1)

const onSortChange = (column: Column): void => {
  store.shipSearchQuery = {
    ...store.shipSearchQuery,
    sortProp: column.prop,
    sortOrder: column.order
  }
}
</script>

<template>
  <div v-loading="store.isTableLoading">
    <el-table :data="ships"
              @sort-change="onSortChange"
              :default-sort="{
                prop: store.shipSearchQuery.sortProp,
                order: store.shipSearchQuery.sortOrder
              }" stripe>
      <el-table-column prop="model" label="Model" sortable="custom">
        <template #default="{ row }">
          <div class="model-cell">
            <el-image style="width: 50px; height: 50px" :src="row.pic_url" fit="contain" />
            <span>{{ row.model }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="type" label="Type" sortable="custom">
        <template #default="{ row }">
          <el-tag class="tag-label">{{ formatTagLabel(row.type) }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="qty_left_pct" label="% Qty Left" sortable="custom">
        <template #default="{ row }">
          {{ row.qty_left_pct }}%
        </template>
      </el-table-column>

      <el-table-column prop="cost" label="Cost" sortable="custom">
        <template #default="{ row }">
          <v-icon name="fa-coins" scale="0.8"/>
          {{ parseFloat(row.cost).toLocaleString() }}
        </template>
      </el-table-column>

      <el-table-column prop="manufacturer" label="Manufacturer" sortable="custom"/>

      <el-table-column label="Tags">
        <template #default="{ row }">
          <template v-if="row.tags.length">
            <el-tag v-for="tag in row.tags" :key="tag" class="tag-label">
              {{ formatTagLabel(tag) }}
            </el-tag>
          </template>
          <span v-else>N/A</span>
        </template>
      </el-table-column>

      <el-table-column align="right" width="100px">
        <template #default="{ row }">
          <el-button size="small" @click="store.editDrawerShipData = row">
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination v-if="store.shipSearchResponse.total > store.shipSearchQuery.limit"
                   v-model:current-page="currentPage"
                   layout="prev, pager, next"
                   :total="store.shipSearchResponse?.total"
                   :page-size="store.shipSearchQuery.limit"/>
  </div>
</template>

<style scoped lang="scss">
  .el-pagination {
    display: flex;
    justify-content: center;
  }

  .tag-label {
    text-transform: capitalize;
  }

  .model-cell {
    display: flex;
    align-items: center;

    span {
      margin-left: 1rem;
      font-weight: bold;
    }
  }
</style>
