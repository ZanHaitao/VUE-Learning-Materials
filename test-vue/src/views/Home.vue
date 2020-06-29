<template>
  <div>
    <button @click="handleClick">点击</button>
    <div>{{ StoreCount }}</div>
    <div>{{obj}}</div>
    <div>
      <input type="text" v-model="msg" />
      {{msg}}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { COUNT_ADD, CHANGE_OBJ, CHANGE_MSG } from "@/store/mutation-types";

export default {
  computed: {
    ...mapState({
      // StoreCount: state => state.count
      StoreCount: "count",
      obj: "obj"
    }),
    msg: {
      get() {
        return this.$store.state.msg;
      },
      set(value) {
        this.$store.commit(CHANGE_MSG, {
          value
        });
      }
    }
  },
  methods: {
    ...mapMutations(["countAdd"]),
    handleClick() {
      this.$store.dispatch(COUNT_ADD, {
        num: 10
      });
      // this.$store.commit("countAdd");
      // this.$store.commit(COUNT_ADD, {
      //   num: 10
      // });
      // this.$store.commit(CHANGE_OBJ);
      // this.countAdd();
    }
  }
};
</script>