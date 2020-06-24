<template>
  <div class="demo">
    <div class="box">hello javascript</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyName: "world"
    };
  },
  methods: {
    changeKey() {
      this.keyName = this.keyName === "world" ? "javascript" : "world";
    }
  }
};
</script>

<style scoped>
.demo {
  padding-left: 200px;
}

button {
  display: block;
}

.box {
  position: absolute;
  width: 200px;
  height: 100px;
  background: gray;
  color: #fff;
  text-align: center;
  line-height: 100px;
  display: inline-block;
  margin-top: 100px;
  border: 2px solid #fff;
}

.v-enter {
  opacity: 1;
  transform: translateX(200px) scale(1.2);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateX(0px) scale(1);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-200px) scale(0.8);
}
</style>