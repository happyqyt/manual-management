<script setup lang='ts'>
import { ref, watch } from 'vue'
import AddModalVue from './components/AddModal.vue'
import {
  Plus,
  Edit,
  Delete,
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import store from '../../store'
import { setCurManualId } from '../../assets/utils'

store.dispatch('manuals/getData')

let curManualId = ref(null)
watch(
  () => store.getters['manuals/curId'],
  (newVal) => {
    curManualId.value = newVal
    if (newVal) {
      // 说明书切换，需要相应更新的数据：语言、文案、图片、页面
      store.dispatch('manuals/getLangs')
      store.dispatch('texts/getData')
      store.dispatch('pics/getData')
      store.dispatch('pages/getData')
    }
  },
  { immediate: true }
)

const onManualSel = (res: any) => {
  store.commit('manuals/setCurId', res)
}

let delLoading = ref(false)
const delCurManual = () => {
  ElMessageBox.confirm(
    '确定要删除当前说明书吗?',
    '确认',
    {
      confirmButtonText: '是的',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    delLoading.value = true
    store.dispatch('manuals/delCurManual').then(() => {
      ElMessage.success('删除成功！')
    }).finally(() => {
      delLoading.value = false
    })
  })
}

let addModalVisible = ref(false)
let modalOperType = ref('add')
const addManual = () => {
  modalOperType.value = 'add'
  addModalVisible.value = true
}
const editManual  = () => {
  modalOperType.value = 'edit'
  addModalVisible.value = true
}
</script>

<template>
  <div class="ml-4 text-left">
    <el-select v-model="curManualId" placeholder="选择说明书" @change="onManualSel">
      <el-option
        v-for="item in store.getters['manuals/data']"
        :key="item.manualName"
        :label="item.manualName"
        :value="item.id"
      />
    </el-select>
    <el-button type="primary" :icon="Plus" size="small" round class="ml-2" @click="addManual">新增说明书</el-button>
    <el-button type="primary" :icon="Edit" size="small" round @click="editManual">修改当前说明书</el-button>
    <el-button type="primary" :icon="Delete" :loading="delLoading" size="small" round @click="delCurManual">删除当前说明书</el-button>
  </div>

  <add-modal-vue :visible="addModalVisible" :type="modalOperType" @close="addModalVisible = false" />
</template>

<style lang='scss' scoped>

</style>