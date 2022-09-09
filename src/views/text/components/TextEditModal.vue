<script setup lang='ts'>
import { ref, watch } from 'vue'
import store from '../../../store'
import TextEditSelPicPopover from './TextEditSelPicPopover.vue'
import { ElMessage } from 'element-plus'

import 'quill/dist/quill.snow.css'
import Quill from 'quill'

const props = defineProps({
  data: {
    type: Object,
    default: {}
  },
  visible: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits<{
  (e: 'close'): void
}>()

let modalVisible = ref(false)
const editorRef = ref(null)
let quiller: any
let popoverVisible = ref(false)
const imgButtonRef = ref()

watch(
  () => props.visible,
  (newVal) => {
    modalVisible.value = newVal
    if (newVal) {
      // modalVisible刚变true，弹出框尚未渲染出来，此时editorRef.value仍为null，因此使用setTimeout
      setTimeout(() => {
        if (editorRef.value) {
          // @ts-ignore
          quiller = new Quill(editorRef.value, {
            modules: {
              toolbar: '#text-edit-modal-quill-toolbar'
            },
            placeholder: '请输入内容...',
            theme: 'snow'  // or 'bubble'
          });

          var toolbar = quiller.getModule('toolbar');
          toolbar.addHandler('image', () => {
            popoverVisible.value = !popoverVisible.value
          });
        }
      })
    }
  },
  { immediate: true }
)

// onMounted(() => {})  // 不使用onMounted，这个钩子函数在文案列表页刷新后即被调用，而不是弹出框弹出来后才被调用，而弹出框没有渲染出来，editorRef.value总为null
const selpic = (src: string) => {
  let index = quiller.selection.savedRange.index // 当前光标位置
  quiller.insertEmbed(index, 'image', src)
  quiller.setSelection(index + 1) // 光标移到插入内容后面
  popoverVisible.value = false
}

const submit = () => {
  // let data = quiller.getContents()
  // console.log(data)
  // @ts-ignore
  let value = editorRef.value?.querySelector('.ql-editor').innerHTML

  store.dispatch('texts/updateText', {
    tid: props.data.textId,
    lang: props.data.language,
    updateValue: value,
  }).then(() => {    
    emits('close')
    ElMessage.success('修改成功！')
  })
}

</script>

<template>
  <el-dialog v-model="modalVisible" title="文案编辑" custom-class="text-left" @close="emits('close')" destroy-on-close>
    <div id="text-edit-modal-quill-toolbar">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <button class="ql-image" ref="imgButtonRef"></button>
    </div>
    <div class="border border-solid rounded-none border-gray-300 ring-2 ring-gray-100 ring-opacity-80 text-edit-input-wrap" style="height: 200px" ref="editorRef" v-html="props.data.updateValue || props.data.originalValue"></div>
    <template #footer>
      <el-button @click="emits('close')">取消</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
    </template>
  </el-dialog>

  <text-edit-sel-pic-popover :visible="popoverVisible" :imgButtonRef="imgButtonRef" @selpic="selpic" />
  
</template>

<style lang='scss'>
.text-edit-input-wrap {
  img {
    height: $text-img-height;
    display: inline;
  }
}
</style>