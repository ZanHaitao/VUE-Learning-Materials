<template>
  <div>
    <button @click="handleLogin">{{isNowLogin}}</button>
  </div>
</template>

<script>
import Auth from "../utils/auth";
export default {
  data() {
    return {
      isLogin: Auth.isLogin()
    };
  },
  methods: {
    handleLogin() {
      if (this.isLogin) {
        const cancelLogin = confirm("是否确认取消登陆？");
        if (cancelLogin) {
          Auth.cancelLogin();
          this.isLogin = false;
        }
      } else {
        Auth.login();
        const isGoBack = confirm("登陆成功！是否跳转上一个页面？");
        isGoBack ? this.$router.go(-1) : "";
        this.isLogin = true;
      }
    }
  },
  computed: {
    isNowLogin() {
      return this.isLogin ? "取消登陆" : "登陆";
    }
  }
};
</script>