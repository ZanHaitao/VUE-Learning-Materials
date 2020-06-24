<template>
  <div>
    <button @click="show = !show">click</button>
    <transition>
      <div class="box" v-if="show">hello world !</div>
    </transition>
    <transition>
      <div class="box" v-if="show">hello world !</div>
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
.box {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border: 1px solid red;
  font-size: 20px;
  color: red;
  text-align: center;
  margin-top: 50px;
}

.v-enter-active {
  animation: animate 1s;
}

.v-leave-active {
  animation: animate 1s reverse;
}

@keyframes animate {
  0% {
    transform: translateX(400px) rotateZ(0);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotateZ(360deg);
    opacity: 1;
  }
}
</style>