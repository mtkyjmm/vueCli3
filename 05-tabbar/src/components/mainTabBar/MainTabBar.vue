<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path='/home' activeColor='green'>
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item  path='/call' activeColor='pink'>
        <img slot="item-icon" src="../../assets/img/tabbar/call.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/call_active.png" alt="" />
        <div slot="item-text">电话</div>
      </tab-bar-item>
      <tab-bar-item  path='/message' activeColor='deeppink'>
        <img slot="item-icon" src="../../assets/img/tabbar/message.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/message_active.png" alt="" />
        <div slot="item-text">信息</div>
      </tab-bar-item>
      <tab-bar-item  path='/photo'>
        <img slot="item-icon" src="../../assets/img/tabbar/photo.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/photo_active.png" alt="" />
        <div slot="item-text">照片</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../tabbar/Tabbar";
import TabBarItem from "../tabbar/TabBarItem";
export default {
  name: "MainTabBar",
   components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
