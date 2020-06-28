export default {
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      const mode = this.$router.mode;
      if (mode === 'hash') {
        location.hash = '#' + this.to;
      } else {
        history.pushState(null, null, this.to);
        this.$route.path = this.to;
      }
    }
  },
  render(h) {
    const mode = this.$router.mode;
    console.log(mode);
    const data = {}
    if (this.tag === 'a' && mode === 'hash') {
      data.attrs = { href: '#' + this.to }
    } else {
      data.on = {
        click: this.handleClick
      }
    }

    return h(this.tag, data, this.$slots.default)
  },
}