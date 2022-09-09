<script setup lang='ts'>
import { ref, watch } from 'vue'
import store from '../../../store'
import { ElMessage } from 'element-plus'

const props = defineProps(['visible', 'subpage', 'pid'])
let modalVisible = ref()
let rightList: any = ref([])
let leftList: any = ref([])

watch(
  () => [props.visible, props.subpage, store.getters['texts/data']],
  ([visible, subpage, texts]) => {
    modalVisible.value = visible
    if (visible) {
      rightList.value = []
      if (subpage.textList && subpage.textList.length > 0) {
        rightList.value = subpage.textList
      }

      leftList.value = []
      texts.forEach((ele: any) => {
        if (ele.en) {
          ele.label = ele.en.updateValue || ele.en.originalValue
        } else {
          for (const lang in ele) {
            if (Object.prototype.hasOwnProperty.call(ele, lang)) {
              ele.label = ele[lang].updateValue || ele[lang].originalValue
              break
            }
          }
        }
        
        leftList.value.push(ele)
      })
    }
  },
  { immediate: true }
)


let emits = defineEmits(['close'])
let submitLoading = ref(false)
const submit = () => {
  let subPage = {
    ...props.subpage,
    textList: rightList.value
  }
  submitLoading.value = true
  store.dispatch('pages/updateSubPage', {
    subPage,
    parentId: props.pid
  }).then(() => {
    ElMessage.success('文案资源绑定成功！')
    emits('close')
  }).finally(() => {
    submitLoading.value = false
  })
}
</script>

<template>
  <el-dialog v-model="modalVisible" title="文案选择" custom-class="text-left" @close="emits('close')" destroy-on-close>
    <el-transfer
      v-model="rightList"
      :props="{
        key: 'textId',
        label: 'label',
      }"
      :data="leftList"
      class="selTextTransfer"
      :titles="['未选择文案', '已选择文案']"
    />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emits('close')">取消</el-button>
        <el-button type="primary" @click="submit" :loading="submitLoading">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang='scss' scoped>
.selTextTransfer {
  display: flex;
  align-items: center;

  :deep(.el-transfer-panel) {
    flex: 1;
  }
}
</style>