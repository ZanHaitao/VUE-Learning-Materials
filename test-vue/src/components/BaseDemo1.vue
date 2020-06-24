<template>
  <div>
    <div class="btns">
      <button @click="btnAdd">添加</button>
      <button @click="btnRemove">移除</button>
      <button @click="btnShuffle">洗牌</button>
    </div>
    <transition-group tag="ul">
      <li v-for="item in lists" :key="item">{{item}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      nextNum: 11
    };
  },
  methods: {
    btnAdd() {
      const randomIndex = Math.floor(Math.random() * this.lists.length);
      this.lists.splice(randomIndex, 0, this.nextNum++);
    },
    btnRemove() {
      const randomIndex = Math.floor(Math.random() * this.lists.length);
      this.lists.splice(randomIndex, 1);
    },
    btnShuffle() {
      this.lists.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

<style scoped>
.btns {
  margin-bottom: 10px;
}

.btns button {
  margin: 0 5px;
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 10px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.7s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateY(0);
}

.v-move {
  transition: transform 0.5s;
}
</style>