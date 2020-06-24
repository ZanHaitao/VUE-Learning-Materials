<template>
  <div>
    <input type="text" v-model="query" />
    <transition-group tag="ul">
      <li v-for="item in newUserList" :key="item.name">{{ item.name }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      userList: [
        { name: "张三" },
        { name: "师二" },
        { name: "王五" },
        { name: "李三" },
        { name: "张明" }
      ]
    };
  },
  computed: {
    newUserList() {
      return this.userList.filter(item => {
        return item.name.includes(this.query);
      });
    }
  }
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  height: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
  height: 24px;
}
</style>