import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    studentList: []
  },
  getters: {
    studentLength: state => state.studentList.length,
    studentMinor: state => state.studentList.filter(item => item.age < 18)
  }
})