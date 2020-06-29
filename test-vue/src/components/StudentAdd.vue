<template>
  <div class="student-add">
    <div>添加学生</div>
    <div>
      <label for="userName">姓名:</label>
      <input id="userName" type="text" v-model="name" />
    </div>
    <div>
      <label for="userAge">年龄:</label>
      <input id="userAge" type="text" v-model="age" @keydown.enter="addStudent" />
    </div>
    <button @click="addStudent">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: ""
    };
  },
  methods: {
    addStudent() {
      this.$store.state.studentList.push({
        name: this.name,
        age: this.age,
        id: +new Date()
      });
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 15px;
}
label {
  margin-right: 10px;
}
</style>