<template>
  <div>
    <div class="activity-nav">
      <router-link :to="{ name:'academic' }">学术讨论</router-link>
      <router-link :to="{ name:'personal' }">个人中心</router-link>
      <router-link :to="{ name:'download' }">资源下载</router-link>
    </div>

    <div class="activity-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.activity-nav a {
  padding: 5px 10px;
  margin-right: 10px;
  text-decoration: none;
  color: #000;
}

.activity-nav a.router-link-exact-active {
  background: #06a5ff;
  color: #fff;
}

.activity-view {
  margin-top: 40px;
  padding-left: 10px;
}
</style>