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
  }
})
let title = computed(() => (props.type === 'add' ? '新增': '编辑') + '线上说明书')
let modalVisible = ref(false)
const formLabelWidth = 60
let form = reactive<{
  name: string
  author: string
  desc: string
  id?: number
}>({
  name: '',
  author: '',
  desc: ''
})
watch(
  () => props.visible,
  (newVal) => {
    modalVisible.value = newVal
    if (newVal) {
      if (props.type === 'add') {
        form.name = ''
        form.author = ''
        form.desc = ''
      } else {
        let curManualInfo = store.getters['manuals/curManual']
        form.name = curManualInfo.manualName
        form.author = curManualInfo.authorName
        form.desc = curManualInfo.description
        form.id = curManualInfo.id
      }
    }
  },
  { immediate: true }
)

let submitLoading = ref(false)
const formRef = ref<FormInstance>()
let emits = defineEmits(['close'])
const submit = () => {
  // @ts-ignore
  formRef.value.validate((valid, _fields) => {
    if (valid) {
      doAddOrUpdateManual()
    }
  })
}
function doAddOrUpdateManual () {
  submitLoading.value = true
  store.dispatch('manuals/addOrUpdateManual', form).then(() => {
    ElMessage.success((props.type === 'add' ? '新增': '编辑') + '成功！')
    emits('close')
  }).finally(() => {
    submitLoading.value = false
  })
}

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '名称不能为空', trigger: 'blur' },
    { min: 3, max: 200, message: '长度应在3～200之间', trigger: 'blur' },
  ],
  author: [
    { required: true, message: '作者不能为空', trigger: 'blur' },
  ],
  desc: [
    { required: true, message: '描述不能为空', trigger: 'blur' },
  ],
})
</script>

<template>
  <el-dialog v-model="modalVisible" :title="title" custom-class="text-left" @close="emits('close')" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" :label-width="formLabelWidth">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input v-model="form.desc" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emits('close')">取消</el-button>
        <el-button type="primary" :loading="submitLoading" @click="submit">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang='scss' scoped>

</style>