import {
  postIdataOnlineInstructionV1PictureManageGetPictureList
} from '../../apis/cloudOnlineInstructionService'

export default {
  namespaced: true,
  state: () => ({
    data: [],
    bigPics: [],
    smallPics: [],
    urls: [],
    bigUrls: []
  }),
  getters: {
    data (state: any) {
      return state.data
    },
    bigPics (state: any) {
      return state.bigPics
    },
    smallPics (state: any) {
      return state.smallPics
    },
    urls (state: any) {
      return state.urls
    },
    bigUrls (state: any) {
      return state.bigUrls
    },
  },
  mutations: {
    setData (state: any, newVal: []) {
      state.data = newVal
    },
    setBigPics (state: any, newVal: []) {
      state.bigPics = newVal
    },
    setSmallPics (state: any, newVal: []) {
      state.smallPics = newVal
    },
    setUrls (state: any, newVal: []) {
      state.urls = newVal
    },
    setBigUrls (state: any, newVal: []) {
      state.bigUrls = newVal
    }
  },
  actions: {
    getData (ctx: any) {
      return postIdataOnlineInstructionV1PictureManageGetPictureList({
        pageNo: 1,
        pageSize: 10000,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(res => {
        // @ts-ignore
        let list: CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PictureManageGetPictureListResponseResultPictueList[] = res.result?.pictureList
        // list = list.concat(list).concat(list).concat(list).concat(list).concat(list).concat(list).concat(list)
        ctx.commit('setData', list)

        let bigs: any[] = [], smalls: any[] = [], urls: string[] = [], burls: string[] = []
        list.forEach((pic: any) => {
          if (pic.width < 100 && pic.length < 100) smalls.push(pic)
          else {
            bigs.push(pic)
            burls.push(pic.pictureUrl)
          }
          urls.push(pic.pictureUrl)
        })

        ctx.commit('setBigPics', bigs)
        ctx.commit('setSmallPics', smalls)
        ctx.commit('setUrls', urls)
        ctx.commit('setBigUrls', burls)
      })
    },
  }
}
