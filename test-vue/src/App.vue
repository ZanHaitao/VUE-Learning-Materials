
<script>
import BaseDemo from "./components/BaseDemo";

export default {
  name: "App",
  components: {
    BaseDemo
  },
  data() {
    return {
      msg: "hello world!",
      show: false
    };
  },
  methods: {
    handleClick(num) {
      console.log(num);
    }
  },
  filters: {
    filter(val) {
      return val + 1;
    }
  },
  render() {
    return (
      <div>
        <div>{this.msg}</div>
        <div domPropsTextContent="<p>i am a p</p>"></div>
        <div domPropsInnerHTML="<p>i am a p</p>"></div>
        <div v-show={this.show}>哈哈哈</div>
        {true && <div>测试</div>}
        {this.show ? <div>true</div> : <div>false</div>}
        {[1, 2, 3].map(item => (
          <div key={item}>{item}</div>
        ))}
        <div onClick={this.handleClick}>{this.msg}</div>
        <div on-click={this.handleClick}>{this.msg}</div>
        <div
          on-click={() => {
            this.handleClick(4);
          }}
        >
          {this.msg}
        </div>
        <div class={{ active: true }} style={{ fontSize: "30px" }}>
          测试
        </div>
        <div>{this.$options.filters.filter(5)}</div>
        <base-demo
          {...{
            scopedSlots: {
              default: props => props.text
            }
          }}
        ></base-demo>
      </div>
    );
  }
};
</script>

<style>
</style>
