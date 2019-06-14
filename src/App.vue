<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
i {
  font-style: normal;
}
</style>

<script>
export default {
  // 如果想看我写的详情页，把注释解开即可！！！！！！！！！！！
  // created() {
  //   if (this.$router.path !== "/detail") {
  //     this.$router.replace("/detail");
  //   }
  // }
};
</script>

