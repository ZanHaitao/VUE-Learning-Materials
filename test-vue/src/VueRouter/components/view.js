export default {
  functional: true,
  render(h, context) {
    const { parent } = context
    const routerMap = parent.$router.RouterMap;
    const path = parent.$route.path;
    return h(routerMap[path])
  },
}