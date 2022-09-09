<!-- 一级页面卡片 -->
<!-- 包括：一级页面删除、一级页面编辑 -->
<!-- 包括：子页面序列、子页面增删改、子页面拖拽排序 -->
<script setup lang='ts'>
import { ref, inject } from 'vue'
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus'
import store from '../../../store'
import { Plus, CircleCloseFilled } from '@element-plus/icons-vue'
import draggable from 'vuedraggable'

const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})

// 页面删除
function doDelPage (pid: number, ty: number) {
  ElMessageBox.confirm(
    '确定要删除页面吗?',
    '确认',
    {
      confirmButtonText: '是的',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    const loading = ElLoading.service({
      lock: true,
      text: '删除中',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    store.dispatch('pages/deletePage', {
      pageId: pid,
      deletePageType: ty
    }).then(() => {
      ElMessage.success('删除成功！')
    }).finally(() => {
      loading.close()
    })
  })
}
const delPage = () => {
  doDelPage(props.data.pageId, 0)
}
const delSubPage = (pid: number) => {
  doDelPage(pid, 1)
}

// 父页面编辑
const editPage: Function | undefined = inject("editPage")
const myEditPage = () => {
  if (editPage) editPage(props.data)
}

// 子页面添加
const addSubPage = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '添加中',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  store.dispatch('pages/addSubPage', {
    pageId: props.data.pageId,
    sort: props.data.maxSubSort + 1
  }).then(() => {
    ElMessage.success('添加成功！')
  }).finally(() => {
    loading.close()
  })
}

// 子页面排序
const sortPage: Function | undefined = inject("sortPage")
function sortSubPage () {
  let ids = []
  for (const page of props.data.subPageList) {
    ids.push(page.pageId)
  }
  if (sortPage) sortPage(ids, 1, props.data.pageId)
}

/* 子页面资源绑定
 * ty: 1文案 2图片
 */
const selResource: Function | undefined = inject('selResource')
const editSubPage = (subpageIndex: number, subpage: any, ty: number) => {
  if (!subpage.textList || !subpage.pictureList) {
    store.dispatch('pages/getSubPageInfo', {
      id: subpage.pageId,
      parentId: props.data.pageId
    })
  }
  if (selResource) selResource(ty, props.data, subpageIndex)
}

</script>

<template>
  <el-card shadow="hover">
    <template #header>
      <div class="text-left text-lg font-medium flex justify-between handle cursor-move">
        <span>{{props.data.pageTitle}}</span>
        <div>
          <el-button type="primary" @click="myEditPage" text bg>编辑</el-button>
          <el-button type="danger" @click="delPage" text bg>删除</el-button>
        </div>
      </div>
    </template>

    <draggable
      :list="props.data.subPageList"
      @end="sortSubPage"
      item-key="index"
      class="flex flex-wrap"
      ghost-class="vsn-drag-ghost"
    >
      <template #item="{ element, index }">
        <el-card class="w-56 mr-4 mb-4 cursor-move text-xl relative vsn-overflow-visible subpage-card" shadow="hover">
          <el-icon class="cursor-pointer -top-1.5 -right-1.5" @click="delSubPage(element.pageId)"><CircleCloseFilled /></el-icon>
          <h3 class="mb-2 text-sm font-medium">子页面 {{element.pageId}}</h3>
          <el-button type="primary" size="small" @click="editSubPage(index, element, 1)" plain round>文案</el-button>
          <el-button type="primary" size="small" @click="editSubPage(index, element, 2)" plain round>图片</el-button>
        </el-card>
      </template>
      
      <template #footer>
        <el-card class="w-56 mb-4 flex justify-center items-center cursor-pointer" shadow="hover" @click="addSubPage">
          <el-icon :size="22"><Plus /></el-icon>
        </el-card>
      </template>
    </draggable>
  </el-card>
</template>

<style lang='scss' scoped>
.subpage-card {
  overflow: visible;
  :deep(.el-icon) {
    display: none;
    position: absolute;
    color: $color-primary;
  }

  &:hover:deep(.el-icon) {
    display: inline-flex;
  }
}
</style>