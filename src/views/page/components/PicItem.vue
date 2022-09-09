<script setup lang='ts'>
import {
  Select
} from '@element-plus/icons-vue'

const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
  url: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  },
  selected: {
    type: Boolean,
    default: false
  },
  multi: {
    type: Boolean,
    default: true
  },
  width: {
    type: Number,
    default: 160
  },
  height: {
    type: Number,
    default: 160
  }
})
const emits = defineEmits(['select', 'preview'])
</script>

<template>
  <div class="picItemWrap inline-block relative border-2 rounded-md mr-2 mb-2">
    <el-image :src="props.url" fit="contain" :preview-src-list="[props.url]" :style="{width: props.width + 'px', height: props.height + 'px'}" />
    <el-icon v-if="props.selected" class="bottom-1 right-1" :size="18"><Select /></el-icon>
    <div class="operWrap absolute top-0 bottom-0 left-0 right-0 cursor-pointer justify-center items-center">
      <el-button type="primary" size="small" @click="emits('preview', props.index)">预览</el-button>
      <el-button v-if="props.multi || !props.selected" type="primary" size="small" @click="emits('select', {selected: !props.selected, id: props.id})">{{props.selected ? '删除' : '选择' }}</el-button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.picItemWrap {
  .operWrap {
    display: none;
    background-color: var(--el-overlay-color-lighter);
  }
  &:hover .operWrap {
    display: flex;
  }

  :deep(.el-icon) {
    position: absolute;
    color: $color-primary;
  }
}
</style>