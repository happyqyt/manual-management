<script setup lang='ts'>
import { ref, provide } from 'vue'
import { ElMessage } from 'element-plus'
import PageCard from './components/PageCard.vue';
import PageAddOrEdit from './components/PageAddOrEdit.vue';
import store from '../../store'

import draggable from 'vuedraggable'
import SelTextModalVue from './components/SelTextModal.vue';
import SelPicModalVue from './components/SelPicModal.vue';

// 新增/编辑父页面
let addModalVisible = ref(false)
let modalOperType = ref('add')
let editPageData = ref()
const addPage = () => {
  modalOperType.value = 'add'
  addModalVisible.value = true
}
provide('editPage', (page: any) => {
  modalOperType.value = 'edit'
  editPageData.value = page
  addModalVisible.value = true
})

// 页面排序
const sortPage = (ids: number[], plevel: number, parentId?: number) => {
  store.dispatch('pages/exchangePage', {
    ids,
    pageLevel: plevel,
    parentPageId: parentId
  }).then(() => {
    ElMessage.success('排序成功')
  })
}
provide('sortPage', sortPage)
const sortParentPage = () => {
  let ids = []
  for (const page of store.getters['pages/data']) {
    ids.push(page.pageId)
  }
  
  sortPage(ids, 0)
}

// 子页面资源绑定
let selTextModalVisible = ref(false)
let selPicModalVisible = ref(false)
let selParentPage = ref()
let selSubPageIndex = ref()
// 因为subpageList[subpageIndex]会指向新的subpageInfo，所以要传subpageList和subpageIndex，以便取得新的subpageInfo
// ty: 1文案 2图片
provide('selResource', (ty: number, parentPage: any, subpageIndex: number) => {
  if (ty === 1) {
    selTextModalVisible.value = true
  } else {
    selPicModalVisible.value = true
  }
  selParentPage.value = parentPage
  selSubPageIndex.value = subpageIndex
})
</script>

<template>
  <el-button type="primary" class="float-right" @click="addPage">新增页面</el-button>
  <div class="clear-both"></div>

  <draggable
    :list="store.getters['pages/data']"
    @end="sortParentPage"
    item-key="index"
    handle=".handle"
    ghost-class="vsn-drag-ghost"
  >
    <template #item="{ element }">
      <page-card :data="element" class="mt-4" />
    </template>
  </draggable>

  <page-add-or-edit :visible="addModalVisible" :type="modalOperType" :page="editPageData" @close="addModalVisible = false" />

  <sel-text-modal-vue :visible="selTextModalVisible" :subpage="selParentPage?.subPageList[selSubPageIndex]" :pid="selParentPage?.pageId" @close="selTextModalVisible = false" />
  <sel-pic-modal-vue :visible="selPicModalVisible" :subpage="selParentPage?.subPageList[selSubPageIndex]" :pid="selParentPage?.pageId" @close="selPicModalVisible = false" />
</template>

<style lang='scss' scoped>

</style>