<template>
  <div id="app">
    <!-- <router-link to='/home' tag="button" replace active-class="active" >首页</router-link>
    <router-link to='/about' tag="button" replace active-class="active">关于</router-link>
    <router-view/> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home" tag="button" active-class="active"
      >首页</router-link
    >
    <router-link to="/about" tag="button" active-class="active"
      >关于</router-link
    >
    <!-- <router-link :to="'/user/'+userId" tag="button" active-class="active">用户</router-link>
   <router-link :to='{path:"/profile",query:{name:"josie",age:26,height:1.60}}' tag="button" active-class="active">档案</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    homeClick() {
      this.$router.push("/home");
      console.log("homeClick");
    },
    aboutClick() {
      this.$router.push("/about");
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "josie",
          age: 26,
          height: 1.6,
        },
      });
    },
  },
  data() {
    return {
      userId: "zhangsan",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: green;
}
/* .router-link-active{
  color: red;
} */
</style>
