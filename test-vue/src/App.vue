<template>
  <div>
    <div class="header">
      <div class="logo" @click="handleClick">用 户 中 心</div>
      <div class="nav-list">
        <router-link to="/home">首页</router-link>
        <router-link to="/learn">课程学习</router-link>
        <router-link to="/student">学员展示</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/activity">社区</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
      <router-view name="student"></router-view>
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
  },
  methods: {
    handleClick() {
      this.$router.push("/home");
      // this.$router.replace("/home");
      // this.$router.go(0);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #06a5ff;
  align-items: center;
}

.header .logo {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.header a {
  padding: 5px 20px;
  color: #fff;
  text-decoration: none;
}

.header a.router-link-active {
  font-weight: bold;
}

.header,
.container {
  padding: 0 200px;
}

.container {
  padding-top: 50px;
}
</style>
