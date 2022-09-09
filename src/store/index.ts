import { createStore } from 'vuex'
import texts from './modules/texts'
import pics from './modules/pics'
import pages from './modules/pages'
import manuals from './modules/manuals'

// 在调用createStore是传入一个自己root的type
const store = createStore({
  state: () => ({
    menuCollapse: false,
    userInfo: JSON.parse(localStorage.getItem('vs-manual-user') || '{}'),
    // devEnv: import.meta.env.DEV
    mockData: true
  }),
  getters: {
    menuCollapse (state) {
      return state.menuCollapse
    },
    userInfo (state) {
      return state.userInfo
    },
    mockData (state) {
      return state.mockData
    }
  },
  mutations: {
    setMenuCollapse (state, newVal) {
      state.menuCollapse = newVal
    },
    setUserInfo (state, newVal) {
      state.userInfo = newVal
      localStorage.setItem('vs-manual-user', JSON.stringify(newVal))
    }
  },

  modules: {
    texts,
    pics,
    pages,
    manuals
  },
})

export default store
