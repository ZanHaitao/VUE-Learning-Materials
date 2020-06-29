import { COUNT_ADD } from '../mutation-types'

export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    countDouble: state => state.count * 2
  },
  mutations: {
    [COUNT_ADD](state, { num }) {
      state.count += num;
    },
  },
  actions: {
    [COUNT_ADD](context, payload) {
      setTimeout(() => {
        context.commit(COUNT_ADD, payload)
      }, 1000)
    }
  }
}