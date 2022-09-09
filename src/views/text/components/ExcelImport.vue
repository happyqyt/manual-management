<script setup lang='ts'>
import { ElMessage, ElLoading } from 'element-plus'
import type { UploadProps, UploadRawFile } from 'element-plus'
import xlsx from 'node-xlsx'; // https://github.com/mgcrea/node-xlsx
import store from '../../../store'

const beforeUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
  if (rawFile.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    ElMessage.error('File must be Excel format!')
  } else if (rawFile.size > 5 * 1024 * 1024) {
    ElMessage.error('File size can not exceed 5MB!')
  } else {
    let reader = new FileReader()
    reader.readAsArrayBuffer(rawFile)
    reader.onloadend = e => {
      const specTexts = parseXlsx(e.target?.result)
      // console.log(specTexts)
      const loading = ElLoading.service({
        lock: true,
        text: '导入中',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      store.dispatch('texts/importData', specTexts).then(() => {
        ElMessage.success('导入成功')
      }).finally(() => {
        loading.close()
      })
    }
  }

  return false
}
function parseXlsx (file: any): Object[] {
  let specTexts:Object[] = []
  if (file) {
    const sheets = xlsx.parse(file);
    // console.log(sheets)
    // if (sheets?.length > 0) {
    const sheet = sheets[0]

    if (sheet?.data?.length > 0) {
      const row0:any = sheet['data']['0']
      
      for (let rowInd in sheet.data) {
        const row:any = sheet['data'][rowInd];
        
        if (rowInd !== '0') {
          let tempObj:any = {}

          if (row.length > 0) {
            row.forEach((val:string, ind:number) => {
              tempObj[row0[ind]] = val
            })

            specTexts.push(tempObj)
          }
        }
      }
      // }
    }
  }
  
  return specTexts
}
</script>

<template>
  <el-upload
    ref="upload"
    :limit="1"
    :show-file-list="false"
    :auto-upload="true"
    :before-upload="beforeUpload"
  >
    <template #trigger>
      <el-button type="primary">导入</el-button>
    </template>
  </el-upload>
</template>

<style lang='scss' scoped>

</style>