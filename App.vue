<template>
  <div>
    <date-picker v-model="date" v-for="index in 2" :key="index"></date-picker>
  </div>
</template>

<script>
import DatePicker from "./DatePicker";
export default {
  components: {
    DatePicker
  },
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

<style scoped>
</style>