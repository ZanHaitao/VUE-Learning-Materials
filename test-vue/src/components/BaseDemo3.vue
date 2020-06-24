<template>
  <div>
    <button @click="show = !show">click</button>
    <transition
      appear
      enter-active-class="animate__animated animate__backInUp"
      leave-active-class="animate__animated animate__backOutRight"
    >
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
</style>