<template>
  <div>
    <button @click="show = true">click</button>
    <async-demo-1 v-if="show" />
    <async-demo-2 v-if="show" />
  </div>
</template>

<script>
// import AsyncDemo1 from "./components/AsyncDemo1";

export default {
  components: {
    AsyncDemo1: () =>
      import(/* webpackChunkName:"async" */ "./components/AsyncDemo1"),
    AsyncDemo2: () =>
      import(/* webpackChunkName:"async" */ "./components/AsyncDemo2")
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
</style>
