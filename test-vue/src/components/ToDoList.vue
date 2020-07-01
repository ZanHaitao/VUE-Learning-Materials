<template>
  <div>
    <div>
      <input type="text" v-model="mask" />
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <li v-for="(mask,index) in maskList" :key="index">{{mask}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mask: "",
      maskList: []
    };
  },
  methods: {
    handleClick() {
      this.maskList.push(this.mask);
      this.mask = "";
    }
  }
};
</script>