<script>
export default {
  data(){
    return {
      msg:'test'
    }
  },
  render(h) {
    return h("div", {}, [
      this.$slots.default,
      this.$scopedSlots.default({
        text: this.msg
      })
    ]);
  }
};
</script>