<script setup lang='ts'>
import { ref, watch } from 'vue'
import store from '../../../store'
import PicItemVue from './PicItem.vue';
import { ElMessage } from 'element-plus'

const props = defineProps(['visible', 'subpage', 'pid'])
let modalVisible = ref()
let selList: any = ref([])
watch(
  () => [props.visible, props.subpage],
  ([visible, subpage]) => {
    modalVisible.value = visible
    if (visible) {
      selList.value = subpage.pictureList?.slice(0, subpage.pictureList.length)
    }
  },
  { immediate: true }
)

const onPicSelect = (payload: any) => {
  // console.log(payload)
  if (payload.selected) selList.value.push(payload.id)
  else selList.value.splice(selList.value.indexOf(payload.id), 1)
}
let showPreviewer = ref(false)
let previewIndex = ref(0)
const onPicPreview = (ind: number) => {
  previewIndex.value = ind
  showPreviewer.value = true
}

let emits = defineEmits(['close'])
let submitLoading = ref(false)
const submit = () => {
  let subPage = {
    ...props.subpage,
    pictureList: selList.value
  }
  submitLoading.value = true
  store.dispatch('pages/updateSubPage', {
    subPage,
    parentId: props.pid
  }).then(() => {
    ElMessage.success('图片资源绑定成功！')
    emits('close')
  }).finally(() => {
    submitLoading.value = false
  })
}

</script>

<template>
  <el-dialog v-model="modalVisible" title="图片选择" custom-class="text-left" @close="emits('close')" destroy-on-close>
    <pic-item-vue v-for="(pic, ind) of store.getters['pics/bigPics']" :key="pic.id" :id="pic.id" :url="pic.pictureUrl" :selected="selList?.includes(pic.id)" :index="ind" @select="onPicSelect" @preview="onPicPreview" />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emits('close')">取消</el-button>
        <el-button type="primary" @click="submit" :loading="submitLoading">确定</el-button>
      </span>
    </template>
  </el-dialog>

  <el-image-viewer v-if="showPreviewer" :url-list="store.getters['pics/bigUrls']" :initial-index="previewIndex" @close="showPreviewer = false" />
</template>

<style lang='scss' scoped>

</style>