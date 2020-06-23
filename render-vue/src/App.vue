<script>
// <template>
//     <div>
//         <base-level :level="1">标题</base-level>
//         <base-level :level="2">标题</base-level>
//         <base-level :level="3">标题</base-level>
//         <base-level :level="4">标题</base-level>
//         <base-level :level="5">标题</base-level>
//         <base-level :level="6">标题</base-level>
//     </div>
// </template>

// import BaseLevel from './components/BaseLevel';
import BaseChildren from "./components/BaseChildren";
import BaseSlot from "./components/BaseSlot";

export default {
  name: "App",
  data() {
    return {
      value: "agsddadssda"
    };
  },
  directives: {
    slice: {
      bind(el, binding, vnode) {
        const vm = vnode.context;
        let { value, expression, arg, modifiers } = binding;

        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }

        el.value = value.slice(0, arg);
        vm[expression] = value.slice(0, arg);

        el.oninput = function(e) {
          let inputVal = el.value;

          if (modifiers.number) {
            inputVal = inputVal.replace(/[^0-9]/g, "");
          }

          el.value = inputVal.slice(0, arg);
          vm[expression] = inputVal.slice(0, arg);
        };
      },
      update(el, binding, vnode) {
        const vm = vnode.context;
        let { value, arg, expression, modifiers } = binding;

        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }

        el.value = value.slice(0, arg);
        vm[expression] = value.slice(0, arg);
      }
    }
  },
  components: {
    // BaseLevel,
    BaseChildren,
    BaseSlot
  },
  render(h) {
    return h("div", {}, [
      h("BaseChildren", {
        props: {
          name: "test测试"
        },
        nativeOn: {
          click: () => {
            console.log("nativeOn");
          }
        }
      }),
      h("div", {
        domProps: {
          innerHTML: "test domProps"
        }
      }),
      h("input", {
        attrs: {
          value: this.value
        },
        directives: [
          {
            name: "slice",
            value: this.value,
            expression: "value",
            arg: "5",
            modifiers: {
              number: true
            }
          }
        ]
      }),
      this.value,
      h(
        "BaseSlot",
        {
          scopedSlots: {
            default: function(props) {
              return h("span", props.text);
            }
          }
        },
        "aaaaa"
      )
    ]);
  }
};
</script>

<style></style>
