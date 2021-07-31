<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <h2>{{ msg }}</h2>
    <router-link to="/home/news">时事新闻</router-link>
    <router-link to="/home/message">新消息</router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      path:'/home/news'
    };
  },
  created() {
    console.log("created");
  },
  // mounted() {
  //   console.log("mounted");
  // },
  // updated() {
  //   console.log("updated");
  // },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");  
    this.$router.push(this.path);
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log(this.$route.path);
    this.path = this.$route.path;
    next(); 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
