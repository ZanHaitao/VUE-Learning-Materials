<template>
  <div>
    <button @click="handleClick">点击</button>
    <div>{{ count }}</div>
    <!-- <div>{{obj}}</div> -->
    <!-- <div>
      <input type="text" v-model="msg" />
      {{msg}}
    </div>-->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { COUNT_ADD, CHANGE_OBJ, CHANGE_MSG } from "@/store/mutation-types";

export default {
  computed: {
    ...mapState("count", ["count"])
    // msg: {
    //   get() {
    //     return this.$store.state.msg;
    //   },
    //   set(value) {
    //     this.$store.commit(CHANGE_MSG, {
    //       value
    //     });
    //   }
    // }
  },
  methods: {
    ...mapMutations("count", ["countAdd"]),
    handleClick() {
      this.$store.dispatch(`count/${COUNT_ADD}`, {
        num: 10
      });
    }
  }
};
</script>

<style lang="less" scoped>
// @import "../assets/public.less";

div {
  background: @color;
  border: @yellow 10px solid;
  &:hover {
    background: @green;
  }
}
</style>