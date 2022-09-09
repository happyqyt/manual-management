<script setup lang='ts'>
import { ref } from 'vue'
import store from '../../../store'
import TextEditModal from './TextEditModal.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

let modalVisible = ref(false)
let modalData = ref({})
const editCell = (cell: Object) => {
  modalData.value = cell
  modalVisible.value = true
}
const resetText = (tid: number, lang: string) => {
  ElMessageBox.confirm(
    '确定要重置当前单元格吗?',
    '确认',
    {
      confirmButtonText: '是的',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    store.dispatch('texts/resetText', {tid, lang}).then(() => {
      ElMessage.success('重置成功！')
    })
  })
}
const getCellClassName = (scope: any) => {
  // console.log(scope)
  if (scope.row[scope.column.label.toLowerCase()]?.updateValue) return 'vsn-table-cell-updated'
}
</script>

<template>
  <el-table :data="store.getters['texts/data']" border stripe class="mt-4 w-full text-table" max-height="calc(100vh - 152px)" header-cell-class-name="vsn-table-header" :cell-class-name="getCellClassName" :highlight-current-row="false">
    <el-table-column v-if="store.getters['manuals/langs'].length > 0" label="序号" :width="60" align="center">
      <template #default="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>

    <el-table-column v-for="lang in store.getters['manuals/langs']" :label="lang.toUpperCase()">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #reference>
            <div v-html="scope.row[lang]?.updateValue || scope.row[lang]?.originalValue"></div>
          </template>
          <template #default>
            <el-button round size="small" @click="() => editCell(scope.row[lang])">编辑</el-button>
            <el-button round size="small" @click="() => resetText(scope.row[lang].textId, lang)">重置</el-button>
          </template>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
  
  <text-edit-modal :visible="modalVisible" :data="modalData" @close="modalVisible = false" />
</template>

<style lang='scss'>
.text-table.el-table tbody tr > td .el-tooltip__trigger img {
  height: $text-img-height;
  display: inline;
}
</style>