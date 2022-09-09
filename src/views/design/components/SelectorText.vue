<script setup lang='ts'>
import { PropType, watch, ref, Ref } from 'vue'
import { Select } from '@element-plus/icons-vue'

const props = defineProps({
  data: {
    type: Array as PropType<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPageTextList[]>,
    default: []
  },
  sels: {
    type: Array as PropType<GlobalType.DesignCompItemDataItem[]>,
    default: []
  },
  multi: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits<{
  (e: 'add', val: GlobalType.DesignCompItemDataItem): void,
  (e: 'del', val: GlobalType.DesignCompItemDataItem): void,
  (e: 'chg', val: GlobalType.DesignCompItemDataItem): void
}>()

let selIds: Ref<number[]> = ref()
watch(() => props.sels, () => {
  selIds.value = []
  props.sels?.forEach(val => {
    selIds.value.push(val.id)
  })
}, { immediate: true })

function selText (obj: GlobalType.DesignCompItemDataItem) {
  if (props.multi) {
    if (selIds.value.includes(obj.id)) {
      // delete
      selIds.value.splice(selIds.value.indexOf(obj.id), 1)
      emits('del', obj)
    } else {
      // add
      selIds.value.push(obj.id)
      emits('add', obj)
    }
  } else {
    selIds.value = [obj.id]
    emits('chg', obj)
  }
}
</script>

<template>
  <h1 class="text-xl font-semibold">文案选择</h1>
  <div class="h-auto mt-2 mb-16 p-2">
    <template v-for="line in props.data">
      <template v-for="text in line.context">
        <p v-if="text.languageType === 'en'" :key="line.textId" :class="[selIds.includes(line.textId) ? 'text-primary font-bold' : '']" class="py-2 pl-4 text-sm cursor-pointer hover:text-green-700 hover:font-bold" @click="selText({id: line.textId, cont: text.updateValue || text.originalValue})">
          {{text.updateValue || text.originalValue}}
          <el-icon v-if="selIds.includes(line.textId)" class="float-right mr-4 mt-0.5"><Select /></el-icon>
        </p>
      </template>
    </template>
  </div>
</template>

<style lang='scss' scoped>

</style>