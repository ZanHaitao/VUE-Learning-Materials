import link from './components/link'
import view from './components/view'

export default function install(Vue) {

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._router = this.$options.router;
        Vue.util.defineReactive(this, '_route', this.$options.router.history.current)
      }
    },
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this.$root._router;
    }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this.$root._route;
    }
  })

  Vue.component('router-link', link);

  Vue.component('router-view', view)
}