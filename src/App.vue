<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
i {
  font-style: normal;
}
#app {
  height: 100%;
}
</style>

<script>
export default {
  // 如果想看我写的详情页，把注释解开即可！！！！！！！！！！！
  created () {
    if (this.$router.path !== "/register") {
      this.$router.replace("/register");
    }
  }
};
</script>

