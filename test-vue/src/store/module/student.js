export default {
  namespaced: true,
  state: {
    studentList: [],
  },
  getters: {
    studentLength: state => state.studentList.length,
    studentMinor: state => state.studentList.filter(item => item.age < 18)
  },
  mutations: {
    studentAdd(state, { obj }) {
      state.studentList.push(obj)
    }
  }
}