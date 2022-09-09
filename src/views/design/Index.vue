<script lang="ts" setup>
  import { Ref, ref, watch, nextTick } from 'vue'
  import store from '../../store'
  import { ElMessage } from 'element-plus'
  import { Plus } from '@element-plus/icons-vue'
  import type Node from 'element-plus/es/components/tree/src/model/node'
  import Editor from './components/Editor.vue';
  import { getPage } from './page'

  const treeRef = ref()
  const editorRef = ref()
  const getLabel = (data: any) => data.pageTitle || '子页面 ' + data.pageId
  let curSubPage: Ref<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPage> = ref<any>({})
  let curParentId: Ref<number> = ref()

  watch(() => store.getters['pages/data'], (newValue) => {
    if (newValue.length) {
      // alert(0)
      const defauPage = newValue[0]
      const defauSubPage = defauPage.subPageList[0]
      getSubPageInfo(defauSubPage.pageId, defauPage.pageId, defauSubPage)
      nextTick(() => treeRef.value.setCurrentKey(defauSubPage.pageId))
    }
  }, { immediate: true })
  
  const handleNodeClick = (data: any, node: Node) => {
    if (!data.pageTitle) {
      getSubPageInfo(data.pageId, node.parent.data.pageId, data)
    }
  }
  function getSubPageInfo (id: number, parentId: number, subPage) {
    curParentId.value = parentId

    if (!('pictureList' in subPage)) {
      const parm = {id, parentId}
      store.dispatch('pages/getSubPageInfo', parm).then(subPage => {
        curSubPage.value = subPage
        // TODO:节点更新不生效
        treeRef.value.updateKeyChildren(id, subPage)
      })
    } else {
      curSubPage.value = subPage
    }
  }

  const addPart = (type: number) => {
    editorRef.value.addComp(type)
  }

  let saveLoading = ref(false)
  const saveJson = () => {
    let subPage = {
      ...curSubPage.value,
      jsonStr: JSON.stringify(editorRef.value.jsonData)
    }
    saveLoading.value = true
    store.dispatch('pages/updateSubPage', {
      subPage,
      parentId: curParentId.value
    }).then(() => {
      ElMessage.success('保存成功！')
    }).finally(() => {
      saveLoading.value = false
    })
  }

  const previewPage = () => {
    const page = getPage(store.getters['pages/data'], true)
    const blob = new Blob([page], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    window.open(url)
  }
  const exportPage = () => {
    const page = getPage(store.getters['pages/data'])
    const blob = new Blob([page], { type: 'text/html' })
    const link = document.createElement('a')
    link.download = store.getters['manuals/curManual'].manualName
    link.href = URL.createObjectURL(blob)
    link.click()
    URL.revokeObjectURL(link.href)
  }
</script>

<template>
  <div class="design-container">
    <div class="design-header">
      <div>
        <el-button type="primary" @click="addPart(1)" :icon="Plus">标题</el-button>
        <el-button type="primary" @click="addPart(2)" :icon="Plus">文本</el-button>
        <el-button type="primary" @click="addPart(3)" :icon="Plus">图片</el-button>
        <el-button type="primary" @click="addPart(4)" :icon="Plus">无序列表</el-button>
        <el-button type="primary" @click="addPart(5)" :icon="Plus">有序列表</el-button>
      </div>
      <div>
        <el-button type="primary" @click="previewPage">预览</el-button>
        <el-button type="primary" @click="exportPage">导出</el-button>
      </div>
    </div>
    <div class="design-main vsn-box-shadow">
      <div class="main-left">
        <el-tree
          ref="treeRef"
          :data="store.getters['pages/data']"
          :props="{ label: getLabel, children: 'subPageList' }"
          empty-text=""
          default-expand-all
          node-key="pageId"
          highlight-current
          @node-click="handleNodeClick"
        />
      </div>
      <div class="main-right">
        <Editor ref="editorRef" :data="curSubPage?.jsonStr ? JSON.parse(curSubPage.jsonStr) : []" :pic-list="curSubPage.pictureList" :text-list="curSubPage.textList" />
        <div class="save-btn-wrap p-2"><el-button type="primary" @click="saveJson" :loading="saveLoading">保存</el-button></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.design-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .design-header {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
  .design-main {
    flex: 1;
    height: 0;
    display: flex;
    margin-top: 15px;
    border: 1px solid #ddd;
    .main-left {
      flex: 0 0 300px;
      width: 0;
      border-right: 1px solid #ddd;
      overflow: auto;

      :deep(.el-tree-node__content) {
        height: 38px;
      }
    }
    .main-right {
      flex: 1;
      width: 0;
      overflow: auto;
      .save-btn-wrap {
        text-align: center;
        border-top: 1px solid #ddd;
      }
    }
  }
}
</style>
