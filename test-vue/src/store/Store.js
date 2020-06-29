import Vuex from 'vuex'
import Vue from 'vue'
import { COUNT_ADD, CHANGE_OBJ, CHANGE_MSG } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    studentList: [],
    obj: { a: 2 },
    msg: ''
  },
  getters: {
    studentLength: state => state.studentList.length,
    studentMinor: state => state.studentList.filter(item => item.age < 18)
  },
  mutations: {
    [COUNT_ADD](state, { num }) {
      state.count += num;
    },
    [CHANGE_OBJ](state) {
      // state.obj.newProp = 1;
      Vue.set(state.obj, 'newProp', 1)
    },
    [CHANGE_MSG](state, { value }) {
      state.msg = value
    }
  },
  actions: {
    [COUNT_ADD](state, payload) {
      setTimeout(() => {
        state.commit(COUNT_ADD, payload)
      }, 1000)
    }
  }
})