<template>
  <div>
    <button @click="show = !show">click</button>
    <!-- <transition-demo>
      <div v-if="show">hello world!</div>
    </transition-demo>
    <transition-demo>
      <div v-if="show">hello eee!</div>
    </transition-demo>-->

    <transition-demo>
      <div key="1" v-if="show">hello world!</div>
      <div key="2" v-else>hello xiamen!</div>
    </transition-demo>
  </div>
</template>

<script>
import TransitionDemo from "./components/TransitionDemo";

export default {
  components: {
    TransitionDemo
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
</style>
