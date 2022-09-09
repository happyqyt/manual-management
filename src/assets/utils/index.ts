import store from '../../store'

export function setCurManualId (manualList: CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResultManualList[]) {
  let finded: boolean = false
  for (const manual of manualList) {
    if (localStorage.getItem('vs-manual-id') === (manual.id + '')) {
      finded = true
      store.commit('manuals/setCurId', manual.id)
      break
    }
  }

  if (!finded) {
    store.commit('manuals/setCurId', manualList[0]?.id)
    localStorage.setItem('vs-manual-id', manualList[0]?.id + '')
  }
}

export function initObj (keys: string[], defau: any) {
  let ret = {}
  for (const key of keys) {
    ret[key] = defau
  }
  return ret
}