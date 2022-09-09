<script setup lang='ts'>
import { ref, computed, reactive, watch } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import store from '../../../store'

const props = defineProps({
  type: {
    type: String,
    default: 'add'
  },
  visible: {
    type: Boolean,
    default: false
  },
  page: {
    type: Object,
    default: {}
  }
})
const emits = defineEmits(['close'])

const title = computed(() => (props.type === 'add' ? '新增': '编辑') + '一级页面')
const formLabelWidth = 120
let modalVisible = ref()
let form = reactive({
  title: '',
  id: null
})
watch(
  () => props.visible,
  (newVal) => {
    modalVisible.value = newVal
    if (newVal) {
      if (props.type === 'add') {
        form.title = ''
      } else {
        form.title = props.page.pageTitle
        form.id = props.page.pageId
      }
    }
  },
  { immediate: true }
)

const formRef = ref<FormInstance>()
const submit = () => {
  // @ts-ignore
  formRef.value.validate((valid, _fields) => {
    if (valid) {
      store.dispatch(props.type === 'add' ? 'pages/addParentPage' : 'pages/updateParentPage', props.type === 'add' ? form.title : form).then(() => {
        ElMessage.success((props.type === 'add' ? '新增': '编辑') + '成功！')
        emits('close')
      })
    }
  })
}

const rules = reactive<FormRules>({
  title: [
    { required: true, message: '页面Title不能为空', trigger: 'blur' },
    { min: 3, max: 200, message: '长度应在3～200之间', trigger: 'blur' },
  ]
})
</script>

<template>
  <el-dialog v-model="modalVisible" :title="title" custom-class="text-left" @close="emits('close')" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" :label-width="formLabelWidth">
      <el-form-item label="页面title" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emits('close')">取消</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang='scss' scoped>

</style>