<script setup lang="ts">
import { useShipsStore } from '../stores/ships-store'
import { ref, Ref } from 'vue'
import { Ship } from '../api/interfaces/ship'
import ShipTagsPicker from './ShipTagsPicker.vue'

const store = useShipsStore()
const formData: Ref<Ship | null> = ref(null)

const close = () => store.editDrawerShipData = null
</script>

<template>
  <el-drawer :model-value="!!store.editDrawerShipData"
             :title="`Editing ${store.editDrawerShipData?.model}`"
             @open="formData = store.editDrawerShipData"
             @close="close()">
    <el-form v-if="formData" :model="formData" :disabled="store.isEditDrawerLoading">
      <ShipTagsPicker :ship="formData" @form-updated="formData = $event"/>
    </el-form>

    <div>
      <el-button @click="close()">Cancel</el-button>
      <el-button type="primary" :loading="store.isEditDrawerLoading" @click="store.updateShip(formData!)">
        {{ store.isEditDrawerLoading ? 'Submitting ...' : 'Submit' }}
      </el-button>
    </div>
  </el-drawer>
</template>
