<script setup lang='ts'>
import { PropType, watch, ref } from 'vue'
import { initObj } from '../../../assets/utils'

const props = defineProps({
  curType: {
    type: Number,
    default: 1 // <!-- 1标题 2文本 3图片 4无序列表 5有序列表 -->
  },
  curSels: {
    type: Array as PropType<string[]>,
    default: []
  }
})
const emits = defineEmits<{
  (e: 'chg', oldVal: string, newVal: string): void
}>()

const classList = {
  title: {
    text: '标题样式',
    classes: ['ptitle', 'stitle', 'ntitle']
  },
  paragraph: {
    text: '段落样式',
    classes: ['sectext']
  },
  image: {
    text: '图片样式',
    classes: ['productImg', 'bannerImg']
  },
  ulist: {
    text: '无序列表样式',
    classes: ['ulist1', 'ulist2', 'ulist3']
  },
  olist: {
    text: '有序列表样式',
    classes: ['olist1', 'olist2', 'olist3']
  },
  olistStep: {
    text: '有序列表序号样式',
    classes: (() => {
      let temp: string[] = []
      for (let i = 1; i < 22; i++) {
        temp.push(`step${i}`)
      }
      return temp
    })()
  },
  space: {
    text: '间隔样式',
    classes: ['ml-30']
  }
}

const initVals = initObj(Object.keys(classList), '')
let modelVals = ref({...initVals})
let oldVals = {...initVals}
watch(() => props.curSels, () => {
  modelVals.value = {...initVals}
  Object.keys(classList).forEach(key => {
    classList[key].classes.forEach(cls => {
      if (props.curSels.includes(cls)) {
        modelVals.value[key] = cls
        oldVals[key] = cls
      }
    })
  })
}, { immediate: true })
</script>
  
  <template>
    <h1 class="text-xl font-semibold mt-8">样式选择</h1>
    <div class="h-auto mt-2 p-2 pl-6">
      <template
        v-for="(item, key) in classList"
        :key="key"
      >
        <div
          class="text-sm font-medium mb-6 flex items-center"
          v-if="props.curType === 1 && ['title', 'space'].includes(key) ||
          props.curType === 2 && ['paragraph', 'space'].includes(key) ||
          props.curType === 3 && ['image', 'space'].includes(key) ||
          props.curType === 4 && ['ulist', 'space'].includes(key) ||
          props.curType === 5 && ['olist', 'olistStep', 'space'].includes(key)"
        >
          <span class="w-32">{{item.text}}:</span>
          <el-select class="ml-4 w-64" placeholder="样式选择" size="default" v-model="modelVals[key]" clearable @change="val => emits('chg', oldVals[key], val)">
            <el-option
              v-for="cls in item.classes"
              :key="cls"
              :label="cls"
              :value="cls"
            />
          </el-select>
        </div>
      </template>
    </div>
  </template>
  
  <style lang='scss' scoped>
  
  </style>