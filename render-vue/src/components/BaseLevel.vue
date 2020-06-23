<script>
export default {
  props:{
    level:{
      type:Number
    }
  },
  render(h) {
    return h('h'+this.level,this.$slots.default)
  },
}
</script>