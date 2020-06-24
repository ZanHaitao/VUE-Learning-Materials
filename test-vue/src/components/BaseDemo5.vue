<template>
  <div>
    <button @click="show = !show">click</button>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
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
  },
  methods: {
    beforeEnter(el) {
      Velocity(el, { opacity: 1 }, { duration: 300 });
    },
    enter(el, done) {
      Velocity(el, { rotateZ: 360 }, { duration: 300, complete: done });
    },
    afterEnter(el) {
      Velocity(el, { opacity: 1 }, { duration: 300 });
    }
  }
};
</script>

<style scoped>
.box {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border: 1px solid red;
  color: red;
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
}

/* .v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

.v-enter-active,
.v-leave-active {
  transition: all 1s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateX(0);
} */
</style>