import install from './install'
import History from './history'

class VueRouter {
  constructor(options) {
    this.RouterMap = this.CreateRouterMap(options.routes || []);
    this.history = new History();
    this.mode = options.mode || 'hash'
    this.init();
  }

  CreateRouterMap(routes) {
    const RouterMap = {};

    routes.forEach(item => {
      RouterMap[item.path] = item.component;
    });

    return RouterMap;
  }

  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/';

      document.addEventListener('DOMContentLoaded', () => {
        this.history.current.path = location.hash.slice(1);
      })

      window.addEventListener('hashchange', () => {
        this.history.current.path = location.hash.slice(1);
      })
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        this.history.current.path = location.pathname;
      })

      window.addEventListener('popstate', () => {
        this.history.current.path = location.pathname;
      })
    }

  }
}

VueRouter.install = install;

export default VueRouter;