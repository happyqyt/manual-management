<script setup lang='ts'>
  import { PropType } from 'vue';
  
  const props = defineProps({
    data: {
      type: Array as PropType<GlobalType.DesignCompItemDataItem[]>,
      default: []
    },
    classes: {
      type: Array as PropType<string[]>,
      default: []
    },
    type: {
      type: Number,
      default: 4 // 4无序列表 5有序列表
    }
  })
  </script>
  
  <template>
    <component :is="props.type === 4 ? 'ul' : 'ol'" :class="props.classes.length ? props.classes : [props.type === 4 ? 'ulist1' : 'olist1']">
      <li v-for="text in props.data" :key="text.id">{{text.cont}}</li> <!-- NOSONAR -->
      <li v-if="!props.data.length">列表</li>
    </component>
  </template>
  
  <style lang='scss' scoped>
  
  </style>