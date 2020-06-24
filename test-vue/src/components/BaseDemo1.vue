<template>
  <div>
    <button @click="show = !show">click</button>
    <transition name="box1">
      <div class="box" v-if="show">hello world!</div>
    </transition>
    <transition name="box2">
      <div class="box" v-if="show">hello world!</div>
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

.box1-enter,
.box1-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

.box1-enter-active,
.box1-leave-active {
  transition: all 1s;
}

.box1-enter-to,
.box1-leave {
  opacity: 1;
  transform: translateX(0);
}

.box2-enter,
.box2-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.box2-enter-active,
.box2-leave-active {
  transition: all 1s;
}

.box2-enter-to,
.box2-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>