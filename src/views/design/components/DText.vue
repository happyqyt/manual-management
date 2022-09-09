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
    },
    type: {
      type: Number,
      default: 1 // 1标题 2段落
    }
  })
  </script>
  
  <template>
    <div :class="props.classes.length ? props.classes : [props.type === 1 ? 'ptitle' : 'sectext']">
      {{ props.data?.cont || (props.type === 1 ? '标题' : '段落') }}
    </div>
  </template>
  
  <style lang='scss' scoped>
  
  </style>