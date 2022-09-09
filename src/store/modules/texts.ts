import {
  postIdataOnlineInstructionV1TextManageGetTextList,
  postIdataOnlineInstructionV1TextManageImportText,
  postIdataOnlineInstructionV1TextManageResetText,
  postIdataOnlineInstructionV1TextManageUpdateText
} from '../../apis/cloudOnlineInstructionService'

export default {
  namespaced: true,
  state: () => ({
    data: []
  }),
  getters: {
    data (state: any) {
      return state.data
    }
  },
  mutations: {
    setData (state: any, newVal: []) {
      state.data = newVal
    },
    setText (state: any, cell: any) {
      for (const row of state.data) {
        if (row.textId === cell.tid) {
          row[cell.lang].updateValue = cell.updateValue
          break
        }
      }
    }
  },
  actions: {
    getData (ctx: any) {
      postIdataOnlineInstructionV1TextManageGetTextList({
        pageNo: 1,
        pageSize: 10000,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(res => {
        let dataList = []
        // @ts-ignore
        const list: CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1TextManageGetTextListResponseResultTextList[] = res.result?.textList
        for (const row of list) {
          let temp: {
            [k: string]: Object
          } = {}
          for (const cell of row.rowsData) {
            temp[cell.language.toLocaleLowerCase()] = cell
          }
          temp.textId = row.rowsData[0].textId

          dataList.push(temp)
        }

        ctx.commit('setData', dataList)
      })
    },
    importData (ctx: any, data: any) {
      return postIdataOnlineInstructionV1TextManageImportText({
        text: JSON.stringify(data),
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.dispatch('getData')
      })
    },
    resetAllText (ctx: any) {
      return postIdataOnlineInstructionV1TextManageResetText({
        textId: -1,
        languageType: 'allLanguage',
        restAllText: 0,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.dispatch('getData')
      })
    },
    resetText (ctx: any, parm: {
      tid: number
      lang: string
    }) {
      return postIdataOnlineInstructionV1TextManageResetText({
        textId: parm.tid,
        languageType: parm.lang,
        restAllText: 1,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.commit('setText', {
          tid: parm.tid,
          lang: parm.lang
        })
      })
    },
    updateText (ctx: any, parm: {
      tid: number,
      lang: string
      updateValue: string
    }) {
      return postIdataOnlineInstructionV1TextManageUpdateText({
        textId: parm.tid,
        languageType: parm.lang,
        updateValue: parm.updateValue,
        manualId: ctx.rootGetters['manuals/curId']
      }, undefined, ctx.rootGetters.mockData).then(() => {
        ctx.commit('setText', {
          tid: parm.tid,
          lang: parm.lang,
          updateValue: parm.updateValue
        })
      })
    }
  }
}
