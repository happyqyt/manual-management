<script setup lang='ts'>
import store from '../../store'
import ExcelImport from './components/ExcelImport.vue';
import TextTable from './components/TextTable.vue';
import { ElMessage, ElMessageBox } from 'element-plus'

const resetAllText = () => {
  ElMessageBox.confirm(
    '确定要重置全部文案吗?',
    '确认',
    {
      confirmButtonText: '是的',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    store.dispatch('texts/resetAllText').then(() => {
      ElMessage.success('全部重置成功！')
    })
  })
}
</script>

<template>
  <excel-import class="float-right" />
  <el-button type="primary" class="float-right mr-6" @click="resetAllText">全部重置</el-button>
  <div class="clear-both"></div>
  <text-table />
</template>

<style lang='scss' scoped>

</style>