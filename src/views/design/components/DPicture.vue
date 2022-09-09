<script setup lang='ts'>
  import { PropType } from 'vue';
  
  const props = defineProps({
    data: {
      type: Object as PropType<GlobalType.DesignCompItemDataItem>,
      default: ({})
    },
    classes: {
      type: Array as PropType<string[]>,
      default: []
    }
  })
  </script>
  
  <template>
    <img :src="props.data.cont" :class="props.classes.length ? props.classes : ['bannerImg']" alt="说明书图片" />
  </template>
  
  <style lang='scss' scoped>
  
  </style>