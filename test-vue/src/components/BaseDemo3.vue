<template>
  <div>
    <input type="text" v-model="query" />
    <transition-group tag="ul" @before-enter="beforeEnter" @enter="enter" @leave="leave">
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
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1, height: "24px" },
        { duration: 500, complete: done }
      );
    },
    leave(el, done) {
      Velocity(
        el,
        { opacity: 0, height: 0 },
        { duration: 500, complete: done }
      );
    }
  }
};
</script>
