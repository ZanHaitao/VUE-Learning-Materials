<template>
  <div>
    {{ msg }}
    <cmp-son />
    <p>app.vue测试</p>
  </div>
</template>

<script>
import son from "./son";
export default {
  components: {
    "cmp-son": son
  },
  data() {
    return {
      msg: "测试"
    };
  }
};
</script>

<style scoped>
</style>