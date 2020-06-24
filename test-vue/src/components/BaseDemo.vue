<script>
export default {
  functional: true,
  inject: ["name"],
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render(h, context) {
    const {
      props,
      slots,
      scopedSlots,
      data,
      parent,
      listeners,
      injections,
      children
    } = context;
    console.log(children);
    const tag = "h" + props.level;
    return (
      <tag>
        {slots().default}
        <div onClick={listeners.click}>{slots().header}</div>
        {scopedSlots.default({ text: "测试" })}
        {injections.name}
        {children[0]}
      </tag>
    );
  }
};
</script>