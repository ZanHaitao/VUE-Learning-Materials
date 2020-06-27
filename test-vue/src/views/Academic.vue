<template>
  <ul v-if="questionList" class="question-list">
    <router-link
      tag="li"
      v-for="question in questionList"
      :key="question.id"
      :to="{name:`question`,params:{ id:question.id }}"
    >{{question.title}}</router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      questionList: []
    };
  },
  mounted() {
    this.$axios.get("/question").then(res => {
      this.questionList = res;
    });
  }
};
</script>

<style scoped>
.question-list li {
  margin-bottom: 20px;
  cursor: pointer;
}

.question-list li:hover {
  color: #06a5ff;
  text-decoration: underline;
}
</style>