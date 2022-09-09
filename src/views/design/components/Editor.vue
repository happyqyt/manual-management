<script setup lang='ts'>
import { PropType, ref, Ref, watch } from 'vue';
import { menusEvent } from 'vue3-menus'; // https://www.npmjs.com/package/vue3-menus https://doc.wssio.com/opensource/vue3-menus/

import DText from './DText.vue';
import DPicture from './DPicture.vue';
import DList from './DList.vue';

import SelectorText from './SelectorText.vue';
import SelectorPic from './SelectorPic.vue';
import SelectorClass from './SelectorClass.vue';
import { without } from 'lodash';

const props = defineProps({
  data: {
    type: Array as PropType<GlobalType.DesignCompItem[]>,
    default: []
  },
  picList: {
    type: Array as PropType<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPagePictureList[]>,
    default: []
  },
  textList: {
    type: Array as PropType<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPageTextList[]>,
    default: []
  }
})

// let pageData = computed(() => props.data)
const curCompIndex = ref(0)
let pageData: Ref<GlobalType.DesignCompItem[]> = ref([])
watch(() => props.data, (newVal) => {
  if (newVal.length) {
    pageData.value = Array.from(newVal)
    curCompIndex.value = 0
  }
}, { immediate: true })

const onTextAdd = (val: GlobalType.DesignCompItemDataItem): void => {
  pageData.value[curCompIndex.value].data.push(val)
}
const onTextDel = (val: GlobalType.DesignCompItemDataItem): void => {
  pageData.value[curCompIndex.value].data.some((item, ind, arr) => {
    if (val.id === item.id) {
      arr.splice(ind, 1)
      if (arr.length === 0) {
        delComp(curCompIndex.value)
      }
      return true
    }
    return false
  })
}
const onTextChg = (val: GlobalType.DesignCompItemDataItem): void => {
  pageData.value[curCompIndex.value].data = [val]
}
const delComp = (index: number): void => {
  pageData.value.some((_item, ind, arr) => {
    if (index === ind) {
      arr.splice(ind, 1)
      return true
    }
    return false
  })
  if (index <= curCompIndex.value && curCompIndex.value > 0) curCompIndex.value--
}
const onPicChg = (val: GlobalType.DesignCompItemDataItem): void => {
  pageData.value[curCompIndex.value].data = [val]
}
const onClassChg = (oldVal: string, newVal: string) => {
  // console.log(oldVal, newVal)
  let clsList = [...pageData.value[curCompIndex.value].classes]
  // let findex = clsList.indexOf(oldVal)
  // if (findex >= 0) clsList.splice(findex, 1)
  clsList = without(clsList, oldVal) // 剔除oldVal
  if (newVal) clsList.push(newVal)
  pageData.value[curCompIndex.value].classes = clsList
}

const rightMenus = ref({
  menus: [
    {
      label: "删除",
      icon: '<svg focusable="false" class="anticon-spin" data-icon="sync" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M765.505691 191.942567H639.627772c0-35.32453-28.636201-63.960731-63.96073-63.960731H447.74558c-35.32453 0-63.960731 28.636201-63.96073 63.960731H257.905908c-36.452213 0-66.00325 29.551036-66.00325 66.00325v59.875692c0 36.452213 29.551036 66.00325 66.00325 66.00325h-2.042519v445.681572c0 36.452213 29.551036 66.00325 66.003249 66.00325h379.679346c36.452213 0 66.00325-29.551036 66.00325-66.00325V383.823736h-2.04252c36.452213 0 66.00325-29.551036 66.00325-66.00325v-59.875693c-0.001023-36.452213-29.551036-66.002226-66.004273-66.002226z m-61.918211 611.470479c-0.101307 3.123131-1.743714 27.813462-27.961842 28.134781H347.905688c-27.988448-0.343831-27.969005-28.459169-27.969005-28.459169l-0.112564 0.031722V383.823736h383.763361v419.58931z m31.980365-483.550041H287.843754c-17.662265 0-31.980365-14.3181-31.980365-31.980365 0-17.662265 14.3181-31.980365 31.980365-31.980366H735.568868c17.662265 0 31.980365 14.3181 31.980366 31.980366-0.001023 17.662265-14.319124 31.980365-31.981389 31.980365z" fill="" p-id="2373"></path><path d="M447.74558 767.588119c17.662265 0 31.980365-14.3181 31.980366-31.980365V479.764831c0-17.662265-14.3181-31.980365-31.980366-31.980365-17.662265 0-31.980365 14.3181-31.980365 31.980365v255.842923c0 17.662265 14.3181 31.980365 31.980365 31.980365zM575.667042 767.588119c17.662265 0 31.980365-14.3181 31.980365-31.980365V479.764831c0-17.662265-14.3181-31.980365-31.980365-31.980365-17.662265 0-31.980365 14.3181-31.980366 31.980365v255.842923c0 17.662265 14.3181 31.980365 31.980366 31.980365z" fill="" p-id="2374"></path></svg>',
      click: (_source: any, args: any) => {
        delComp(args.index)
      }
    }
  ]
});
function rightClick(event: MouseEvent, index: number) {
  event.preventDefault();
  menusEvent(event, rightMenus.value, {index});
}

defineExpose({
  addComp: (type: number) => {
    pageData.value.push({
      type,
      data: [],
      classes: []
    })
  },
  jsonData: pageData
})
</script>

<template>
  <div class="grid grid-cols-2 gap-4 px-4 editor-wrap">
    <div class="h-full overflow-y-auto pb-4 overflow-x-hidden">
      <!-- 1标题 2文本 3图片 4无序列表 5有序列表 -->
      <div v-for="(comp, ind) in pageData" :key="comp.type + '-' + ind" class="dcomp-wrap" :class="[curCompIndex === ind ? 'selected': '']" @click="() => curCompIndex = ind" @contextmenu="(event) => rightClick(event, ind)">
        <DText v-if="[1, 2].includes(comp.type)" :type="comp.type" :data="comp.data[0]" :classes="comp.classes" />
        <DPicture v-if="comp.type === 3" :data="comp.data[0]" :classes="comp.classes" />
        <DList v-if="[4, 5].includes(comp.type)" :type="comp.type" :data="comp.data" :classes="comp.classes" />
      </div>
    </div>
    <div class="h-full overflow-y-auto overflow-x-hidden text-left p-1">
      <SelectorText v-if="[1, 2, 4, 5].includes(pageData[curCompIndex]?.type)" :data="props.textList" :sels="pageData[curCompIndex]?.data" :multi="[4, 5].includes(pageData[curCompIndex]?.type)" @add="onTextAdd" @del="onTextDel" @chg="onTextChg" />
      <SelectorPic v-if="pageData[curCompIndex]?.type === 3" :data="props.picList" :sel="pageData[curCompIndex]?.data[0]" @chg="onPicChg" />
      <SelectorClass v-if="pageData[curCompIndex]?.type" :cur-type="pageData[curCompIndex]?.type" :cur-sels="pageData[curCompIndex]?.classes" @chg="onClassChg" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.editor-wrap {
  height: calc(100% - 50px);
}
</style>