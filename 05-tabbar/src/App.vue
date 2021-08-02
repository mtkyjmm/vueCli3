<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path='/home' activeColor='green'>
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item  path='/call' activeColor='pink'>
        <img slot="item-icon" src="./assets/img/tabbar/call.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/call_active.png" alt="" />
        <div slot="item-text">电话</div>
      </tab-bar-item>
      <tab-bar-item  path='/message' activeColor='yellow'>
        <img slot="item-icon" src="./assets/img/tabbar/message.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/message_active.png" alt="" />
        <div slot="item-text">信息</div>
      </tab-bar-item>
      <tab-bar-item  path='/photo'>
        <img slot="item-icon" src="./assets/img/tabbar/photo.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/photo_active.png" alt="" />
        <div slot="item-text">照片</div>
      </tab-bar-item>
    </tab-bar>
    <router-view />
  </div>
</template>

<script>
import TabBar from "./components/tabbar/Tabbar";
import TabBarItem from "./components/tabbar/TabBarItem";
// import TabBarItem from './components/tabbar/TabBarItem.vue'
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
