<script setup lang="ts">
  import { Ship, ShipTag } from '../api/interfaces/ship'
  import { onMounted, ref, Ref, watch } from 'vue'
  import { formatTagLabel } from '../utils'

  const props = defineProps<{ ship: Ship }>()
  const emit = defineEmits<{
    (e: 'formUpdated', ship: Ship): void
  }>()
  let updatedFormData: Ref<Ship | null> = ref(null)


  onMounted(() => {
    updatedFormData.value = props.ship
  })

  watch(updatedFormData, () => {
    emit('formUpdated', updatedFormData.value as Ship)
  })
</script>

<template>
  <el-card v-if="updatedFormData" class="el-card--no-header" shadow="never">
    <el-form-item label="Tags" prop="tags">
      <el-select
          v-model="updatedFormData.tags"
          multiple
          placeholder="Select"
          style="width: 240px"
      >
        <el-option
            v-for="tag in Object.values(ShipTag)"
            :key="tag"
            :label="formatTagLabel(tag)"
            :value="tag"
        />
      </el-select>
    </el-form-item>
  </el-card>
</template>
