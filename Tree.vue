<template>
  <ul>
    <li v-for="(node,index) in data" :key="node[defaultProps.label]">
      <i
        class="iconfont"
        :class="{'icon-right':!showNodeTree[index],'icon-down':showNodeTree[index],}"
        v-if="node[defaultProps.children]"
      ></i>
      <span @click="handleClick(index)">{{ node[defaultProps.label] }}</span>
      <keep-alive>
        <base-tree :data="node[defaultProps.children]" v-if="showNodeTree[index] && node[defaultProps.children]" />
      </keep-alive>
    </li>
  </ul>
</template>

<script>
export default {
  name: "base-tree",
  props: {
    data: {
      type:Array,
      required: true
    },
    defaultProps: {
      type: Object,
      default: () => ({
        label: "label",
        children: "children"
      })
    }
  },
  data() {
    return {
      showNodeTree: []
    };
  },
  methods: {
    handleClick(index) {
      const show = !this.showNodeTree[index];
      this.$set(this.showNodeTree, index, show);
    }
  }
};
</script>

<style scoped>
@import url("./assets/font.css");

ul {
  list-style: none;
}

li {
  cursor: pointer;
}

li .iconfont {
  color: #999;
  vertical-align: middle;
}

li span {
  margin-left: 10px;
  vertical-align: middle;
}
</style>