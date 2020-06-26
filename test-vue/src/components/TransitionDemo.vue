

<script>
export default {
  functional: true,
  render(h, context) {
    const { slots } = context;
    return (
      <transition name="demo" mode="out-in">
        {slots().default}
      </transition>
    );
  }
};
</script>

<style>
.demo-enter,
.demo-leave-to {
  opacity: 0;
}

.demo-enter-active,
.demo-leave-active {
  transition: all 0.5s;
}

.demo-enter-to,
.demo-leave {
  opacity: 1;
}
</style>