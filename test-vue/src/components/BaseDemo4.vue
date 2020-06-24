<template>
  <div>
    <button @click="show = !show">click</button>
    <transition name="box1" :duration="2000">
      <div class="box" v-show="show">
        <transition name="span">
          <span v-if="show">hello world !</span>
        </transition>
      </div>
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
  color: red;
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
}

.box1-enter,
.box1-leave-to {
  /* opacity: 0; */
  transform: translateX(200px);
}

.box1-enter-active,
.box1-leave-active {
  transition: all 1s;
}

.box1-enter-to,
.box1-leave {
  /* opacity: 1; */
  transform: translateX(0);
}

.span-enter,
.span-leave-to {
  font-size: 0px;
}

.span-enter-active,
.span-leave-active {
  transition: all 1s 1s;
}

.span-enter-to,
.span-leave {
  font-size: 20px;
}
</style>