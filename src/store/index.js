import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Name1',
        desc: 'Desc1'
      },
      {
        id: 2,
        name: 'Name2',
        desc: 'Desc2'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
