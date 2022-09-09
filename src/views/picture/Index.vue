<template>
  <div class="btn-wrap">
    <el-button type="primary" @click="handleUpload"
      >上传<el-icon class="el-icon--right"><Plus /></el-icon
    ></el-button>
  </div>
  <div class="upload-wrap">
    <el-upload
      action="#"
      multiple
      drag
      accept="image/jpeg,image/png"
      list-type="picture-card"
      :file-list="fileList"
      :http-request="doUpload"
      :before-upload="beforeUpload"
    >
      <el-icon><Plus /></el-icon>
      <template #file="{ file }">
        <div class="upload-item">
          <el-image
            class="upload-img-wrap"
            :src="file.url"
            fit="contain"
            :preview-src-list="fileList.map((item) => item.url)"
            :initial-index="fileList.findIndex((item) => item.uid === file.uid)"
            :infinite="false"
          >
          </el-image>
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="previewPicture(file.uid)"
            >
              <el-icon><zoom-in /></el-icon>
            </span>
            <span
              class="el-upload-list__item-delete"
              @click="deletePicture(file.uid)"
            >
              <el-icon><Delete /></el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'
import type {
  UploadProps,
  UploadUserFile,
  UploadRequestOptions,
} from 'element-plus'
import { Plus, ZoomIn, Delete } from '@element-plus/icons-vue'
import SparkMD5 from 'spark-md5'
import { postFileServiceV2FileGetFileUploadUrlListV2 } from '../../apis/cloudFileService'
import {
  postIdataOnlineInstructionV1PictureManageDeletePicture,
  postIdataOnlineInstructionV1PictureManageUploadPicture,
} from '../../apis/cloudOnlineInstructionService'

let fileList = ref<UploadUserFile[]>([])
const store = useStore()
const manualId = computed(() => store.getters['manuals/curId'])
const picsData = computed(() => store.getters['pics/data'])
const setFileList = () => {
  fileList.value = picsData.value?.map((item: any) => ({
    uid: item.id,
    name: item.pictureUrl,
    url: item.pictureUrl,
  }))
}
const getPictureList = () => {
  store.dispatch('pics/getData').then(setFileList)
}
watch(() => picsData.value, setFileList, { immediate: true })

const doUpload = (options: UploadRequestOptions) => {
  const file = options.file
  const fileReader = new FileReader()
  fileReader.readAsBinaryString(file)
  fileReader.onload = async (e) => {
    const md5 = SparkMD5.hashBinary(e.target!.result as string)
    const params = {
      fileList: [
        {
          contentType: file.type,
          contentLengthByte: file.size,
          md5,
          fileName: file.name,
        },
      ],
      type: 'vmallImage',
    }
    const res: any = await postFileServiceV2FileGetFileUploadUrlListV2(params)
    const { uploadUrl, accessUrl } = res.result.uploadUrlList[0]
    await fetch(uploadUrl, {
      method: 'put',
      headers: {
        'Content-MD5': md5,
        'Content-Type': file.type,
      },
      body: e.target!.result,
    })
    const img = new Image()
    img.src = URL.createObjectURL(file)
    img.onload = async () => {
      const params = {
        manualId: manualId.value,
        pictureUrl: accessUrl,
        length: img.width,
        width: img.height,
      }
      URL.revokeObjectURL(img.src)
      await postIdataOnlineInstructionV1PictureManageUploadPicture(params)
      getPictureList()
    }
  }
  return Promise.reject()
}

const deletePicture = (pictureId: string) => {
  ElMessageBox.confirm('确定要删除该图片吗？', '确认', {
    type: 'warning',
    confirmButtonText: '是的',
    cancelButtonText: '取消',
  })
    .then(() => {
      const params = {
        manualId: manualId.value,
        pictureId,
      }
      return postIdataOnlineInstructionV1PictureManageDeletePicture(params)
    })
    .then(() => {
      ElMessage.success('删除成功！')
      getPictureList()
    })
    .catch(() => {})
}

const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('图片只能是jpg或png格式！')
    return false
  }
  return true
}

const handleUpload = () => {
  ;(document.querySelector('.el-upload__input') as HTMLElement).click()
}

const previewPicture = (uid: number) => {
  const index = fileList.value.findIndex((item) => item.uid === uid)
  ;(
    document.querySelectorAll('.el-image__preview')[index] as HTMLElement
  ).click()
}
</script>

<style lang="scss" scoped>
.btn-wrap {
  margin-bottom: 10px;
  text-align: left;
}
.upload-wrap {
  text-align: left;
  :deep(.el-upload-dragger) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
}
.upload-item {
  flex: 1;
  .upload-img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    :deep(.el-image__inner) {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
