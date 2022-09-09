<script setup lang='ts'>
import { PropType, watch, ref, Ref } from 'vue'
import PicItem from '../../page/components/PicItem.vue';

const props = defineProps({
  data: {
    type: Array as PropType<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPagePictureList[]>,
    default: []
  },
  sel: {
    type: Object as PropType<GlobalType.DesignCompItemDataItem>,
    default: ({})
  }
})
const emits = defineEmits<{
  (e: 'chg', val: GlobalType.DesignCompItemDataItem): void
}>()

let urls: Ref<string[]> = ref()
watch(() => props.data, () => {
  urls.value = []
  props.data?.forEach(val => {
    urls.value.push(val.pictureUrl)
  })
}, { immediate: true })

let showPreviewer = ref(false)
let previewIndex = ref(0)
const onPicPreview = (ind: number) => {
  previewIndex.value = ind
  showPreviewer.value = true
}
</script>
  
  <template>
    <h1 class="text-xl font-semibold">图片选择</h1>
    <div class="h-auto mt-2">
      <pic-item v-for="(pic, ind) of props.data" :key="pic.pictureId" :id="pic.pictureId" :url="pic.pictureUrl" :selected="props.sel.id === pic.pictureId" :index="ind" :multi="false" :width="115" :height="115" @select="emits('chg', {id: pic.pictureId, cont: pic.pictureUrl})" @preview="onPicPreview" />

      <el-image-viewer v-if="showPreviewer" :url-list="urls" :initial-index="previewIndex" @close="showPreviewer = false" />
    </div>
  </template>
  
  <style lang='scss' scoped>
  
  </style>