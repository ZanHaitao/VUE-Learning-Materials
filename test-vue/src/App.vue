<template>
  <div>
    <div class="header">
      <router-link to="/">首页</router-link>
      <router-link to="/student">学生</router-link>
      <router-link to="/learn">学习</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/activity">社区</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  height: 80px;
  background: blue;
  align-items: center;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.header,
.container {
  padding: 0 200px;
}

.container {
  padding-top: 50px;
}
</style>
