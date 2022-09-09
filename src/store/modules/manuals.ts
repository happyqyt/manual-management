import {
  postIdataOnlineInstructionV1DesignManageGetManualListByUserId,
  postIdataOnlineInstructionV1DesignManageDeleteManual,
  postIdataOnlineInstructionV1DesignManageAddOrUpdateManual,
  postIdataOnlineInstructionV1DesignManageGetAllLanguageByManualId
} from '../../apis/cloudOnlineInstructionService'
import { setCurManualId } from '../../assets/utils'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: () => ({
    data: [],
    curId: null,
    langs: []
  }),
  getters: {
    data (state: any) {
      return state.data
    },
    curId (state: any) {
      return state.curId
    },
    curManual (state: any) {
      for (const manual of state.data) {
        if (state.curId === manual.id) {
          return manual
        }
      }
      return state.data[0]
    },
    langs (state: any) {
      return state.langs
    }
  },
  mutations: {
    setData (state: any, newVal: []) {
      state.data = newVal
    },
    setCurId (state: any, newVal: number) {
      state.curId = newVal
      localStorage.setItem('vs-manual-id', newVal + '')
    },
    setLangs (state: any, newVal: string[]) {
      state.langs = newVal
    }
  },
  actions: {
    getData (ctx: any) {
      postIdataOnlineInstructionV1DesignManageGetManualListByUserId({}, undefined, ctx.rootGetters.mockData).then(res => {
        // console.log(res)
        // @ts-ignore
        let manualList: CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResultManualList[] = res.result.manualList
        ctx.commit('setData', manualList)
        setCurManualId(manualList)
      })
    },
    delCurManual (ctx: any) {
      return postIdataOnlineInstructionV1DesignManageDeleteManual({
        manualId: ctx.getters['curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        // 本地删除数据
        let manualList = ctx.getters['data']
        let curIndex = manualList.findIndex((ele: CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResultManualList) => localStorage.getItem('vs-manual-id') === (ele.id + '') )
        manualList.splice(curIndex, 1)
        setCurManualId(manualList)
      })
    },
    addOrUpdateManual (ctx: any, data: any) {
      return postIdataOnlineInstructionV1DesignManageAddOrUpdateManual({
        manualDescription: data.desc,
        manualAuthor: data.author,
        manualName: data.name,
        manualId: data.id
      }, undefined, ctx.rootGetters.mockData).then(() => {
        if (!data.id) { // 新增
          ctx.dispatch('getData')
        } else {
          // 本地更新数据
          let manualList = ctx.getters['data']
          let finded: boolean = manualList.some((ele: CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResultManualList) => {
            if (data.id === ele.id) {
              ele.manualName = data.name
              ele.authorName = data.author
              ele.description = data.desc
              return true
            }
          })
          if (!finded) ElMessage.error('修改本地数据出错：找不到当前说明书～')
        }
      })
    },
    getLangs (ctx: any) {
      postIdataOnlineInstructionV1DesignManageGetAllLanguageByManualId({
        manualId: ctx.getters['curId']
      }, undefined, ctx.rootGetters.mockData).then(res => {
        // @ts-ignore
        ctx.commit('setLangs', res.result?.languageList)
      })
    }
  }
}
