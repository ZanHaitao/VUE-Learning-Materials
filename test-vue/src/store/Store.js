import Vuex from 'vuex'
import Vue from 'vue'
import { CHANGE_OBJ, CHANGE_MSG } from './mutation-types'
import student from './module/student'
import count from './module/count'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    student,
    count
  },
  state: {
    obj: { a: 2 },
    msg: ''
  },
  mutations: {
    [CHANGE_OBJ](state) {
      // state.obj.newProp = 1;
      Vue.set(state.obj, 'newProp', 1)
    },
    [CHANGE_MSG](state, { value }) {
      state.msg = value
    }
  },
})