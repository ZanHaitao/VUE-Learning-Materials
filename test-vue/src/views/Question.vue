<template>
  <div v-if="questionData">
    <div class="title">{{ questionData.title }}</div>
    <div class="options">
      <div
        :class="question.type"
        v-for="question in questionList"
        :key="question.id"
        @click="handleClick(question.id)"
      >{{question.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      questionData: null
    };
  },
  methods: {
    getData() {
      const { id } = this;
      this.$axios(`/question/${id}`).then(res => {
        this.questionData = res;
      });
    },
    handleClick(id) {
      this.$router.push({
        name: "question",
        params: {
          id
        }
      });
    }
  },
  computed: {
    questionList() {
      const arr = [];
      if (this.questionData.next) {
        arr.push({
          title: this.questionData.next,
          type: "next",
          id: this.questionData.nextId
        });
      }
      if (this.questionData.prev) {
        arr.push({
          title: this.questionData.prev,
          type: "prev",
          id: this.questionData.prevId
        });
      }
      return arr;
    }
  },
  watch: {
    $route: {
      handler() {
        this.getData();
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.options {
  margin-top: 200px;
}

.options .next,
.options .prev {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #06a5ff;
  text-decoration: underline;
  cursor: pointer;
}

.options .next {
  float: right;
}

.options .prev {
  float: left;
}
</style>