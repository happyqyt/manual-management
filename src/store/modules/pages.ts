import {
  postIdataOnlineInstructionV1PageManageGetPageOutLine,
  postIdataOnlineInstructionV1PageManageAddParentPage,
  postIdataOnlineInstructionV1PageManageDeletePage,
  postIdataOnlineInstructionV1PageManageUpdateParentPage,
  postIdataOnlineInstructionV1PageManageAddSubPage,
  postIdataOnlineInstructionV1PageManageExchangePage,
  postIdataOnlineInstructionV1PageManageGetSubPageInfo,
  postIdataOnlineInstructionV1PageManageUpdateSubPage
} from '../../apis/cloudOnlineInstructionService'

export default {
  namespaced: true,
  state: () => ({
    data: [],
    maxSort: 0,
    curSubPage: {}
  }),
  getters: {
    data (state: any) {
      return state.data
    },
    maxSort (state: any) {
      return state.maxSort
    },
    curSubPage (state: any) {
      return state.curSubPage
    }
  },
  mutations: {
    setData (state: any, newVal: []) {
      state.data = newVal
    },
    setMaxSort (state: any, newVal: number) {
      state.maxSort = newVal
    },
    setSubPageInfo (state: any, payload: any) {
      state.data.some((page: any) => {
        if (page.pageId === payload.parentId) {
          page.subPageList.some((subpage: any, ind: number, arr) => {
            if (subpage.pageId === payload.id) {
              arr.splice(ind, 1, payload.subPage)
              return true
            }
          })
          return true
        }
      })
    },
    setCurSubPage (state: any, newVal: any) {
      state.curSubPage = newVal
    }
  },
  actions: {
    getData (ctx: any) {
      postIdataOnlineInstructionV1PageManageGetPageOutLine({
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(res => {
        // @ts-ignore
        let list: CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponseResultPageList[] = res.result?.pageList
        ctx.commit('setData', list)

        for (const page of list) {
          const sort = parseInt(page.sort)
          if (sort > ctx.getters['maxSort']) {
            ctx.commit('setMaxSort', sort)
          }

          let maxSubSort = 0
          // 查找每个页面下所有子页的最大sort值
          for (const subpage of page.subPageList) {
            const subsort = parseInt(subpage.sort)
            if (subsort > maxSubSort) maxSubSort = subsort
          }
          page.maxSubSort = maxSubSort
        }
      })
    },
    addParentPage (ctx: any, title: string) {
      return postIdataOnlineInstructionV1PageManageAddParentPage({
        pageTitle: title,
        sort: ctx.getters['maxSort'] + 1,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.dispatch('getData')
      })
    },
    updateParentPage (ctx: any, parm: {
      id: number
      title: string
    }) {
      return postIdataOnlineInstructionV1PageManageUpdateParentPage({
        pageId: parm.id,
        pageTitle: parm.title,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.dispatch('getData')
      })
    },
    deletePage (ctx: any, parm: {
      pageId: number
      deletePageType: number
    }) {
      return postIdataOnlineInstructionV1PageManageDeletePage({
        pageId: parm.pageId,
        deletePageType: parm.deletePageType,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.dispatch('getData')
      })
    },
    addSubPage (ctx: any, parm: {
      pageId: number
      sort: number
    }) {
      postIdataOnlineInstructionV1PageManageAddSubPage({
        pageId: parm.pageId,
        sort: parm.sort,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.dispatch('getData')
      })
    },
    exchangePage (ctx: any, parm: {
      ids: number[]
      pageLevel: number
      parentPageId?: number
    }) {
      let obj: {
        orderIdList: number[]
        pageLevel: number
        parentPageId?: number
      } = {
        orderIdList: parm.ids,
        pageLevel: parm.pageLevel
      }
      if (parm.parentPageId) obj.parentPageId = parm.parentPageId
      return postIdataOnlineInstructionV1PageManageExchangePage({
        ...obj,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).catch(() => {
        ctx.dispatch('getData')
      })
    },
    getSubPageInfo (ctx: any, parm: {
      id: number,
      parentId: number
    }) {
      return postIdataOnlineInstructionV1PageManageGetSubPageInfo({
        pageId: parm.id,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then((res: any) => {
        ctx.commit('setSubPageInfo', {
          id: parm.id,
          parentId: parm.parentId,
          // @ts-ignore
          subPage: res.result.subPage
        })

        return res.result.subPage
      })
    },
    updateSubPage (ctx: any, parm: {
      parentId: number,
      subPage: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageUpdateSubPageRequestSubPage
    }) {
      return postIdataOnlineInstructionV1PageManageUpdateSubPage({
        subPage: parm.subPage,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.commit('setSubPageInfo', {
          id: parm.subPage.pageId,
          parentId: parm.parentId,
          subPage: parm.subPage
        })
      })
    },
    // getSubPageInfoByPageId (ctx: any, payload: {
    //   id: number,
    //   parentId: number
    // }) {
    //   let ret
    //   ctx.getters.data.some((page: any) => {
    //     if (page.pageId === payload.parentId) {
    //       page.subPageList.some((subpage: any) => {
    //         if (subpage.pageId === payload.id) {
    //           ret = subpage
    //           return true
    //         }
    //         return false
    //       })
    //       return true
    //     }
    //     return false
    //   })
    //   return ret
    // }
  }
}
