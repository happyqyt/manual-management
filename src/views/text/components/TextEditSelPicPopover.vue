<script setup lang='ts'>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  imgButtonRef: {
    type: Object,
    default: null
  }
})
const emit = defineEmits<{
  (e: 'selpic', src: string): void
}>()


const selPic = (e: any) => {
  // console.log(e)
  emit('selpic', e.target.src)
}
</script>

<template>
  <el-popover
    :visible="props.visible"
    trigger="click"
    :virtual-ref="props.imgButtonRef"
    virtual-triggering
    width="50%"
    popper-class="h-auto max-h-96 overflow-y-auto flex flex-row flex-wrap"
  >
    <el-image
      v-for="item in $store.getters['pics/smallPics']"
      :key="'pic-' + item.id"
      :src="item.pictureUrl"
      :alt="item.id"
      fit="contain"
      class="w-8 h-8 m-2 cursor-pointer hover:shadow-xl"
      @click="selPic"
    />
  </el-popover>
</template>

<style lang='scss'>

</style>