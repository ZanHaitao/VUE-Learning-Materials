

<script>
export default {
  props:{
    name:String
  },
  render(h) {
    return h(
      "div",
      {
        class: {
          active: true,
          hide: false
        },
        style: {
          color: "red",
          fontSize: "20px"
        },
        attrs:{
          id:'app'
        },
        on:{
          click:()=>{
            console.log('click');
          }
        }
      },
      this.name,
    );
  }
};
</script>
