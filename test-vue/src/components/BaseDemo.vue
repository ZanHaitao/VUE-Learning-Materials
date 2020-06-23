<script>
// <template>
//   <div>
//     插槽测试
//     <slot></slot>
//     <slot name="header"></slot>
//   </div>
// </template>
export default {
  render() {
    return (
      // <div>
      //   插槽测试
      //   {this.$slots.default}
      //   {this.$slots.header}
      // </div>
      <div>
        {this.$scopedSlots.default({
          text: "default"
        })}
      </div>
    );
  }
};
</script>