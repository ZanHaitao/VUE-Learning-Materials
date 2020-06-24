<template>
  <!-- <div> -->
  <!-- <base-demo :level="1">标题</base-demo>
    <base-demo :level="2">标题</base-demo>
    <base-demo :level="3">标题</base-demo>
    <base-demo :level="4">标题</base-demo>
    <base-demo :level="5">标题</base-demo>
  <base-demo :level="6">标题</base-demo>-->

  <!-- </div> -->

  <div>
    <base-demo :level="1" @click="handleClick">
      <template #default>默认</template>
      <template #header>具名插槽</template>
      <p>aaa</p>
      <p>ccc</p>
    </base-demo>
  </div>
</template>

<script>
import BaseDemo from "./components/BaseDemo";

export default {
  provide: {
    name: "张三"
  },
  name: "App",
  components: {
    BaseDemo
  },
  data() {
    return {
      level: 2
    };
  },
  methods: {
    handleClick() {
      console.log("xxx");
    }
  }
};
</script>

<style>
</style>
