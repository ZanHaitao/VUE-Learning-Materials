<template>
  <div class="box">
    <button @click="show = !show">click</button>
    <transition mode="out-in">
      <div v-if="show" key="aa">test1</div>
      <div v-else key="bb">test2</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>