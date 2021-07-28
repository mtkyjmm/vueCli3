<template>
  <div>
      <h2>我是用户</h2>
      <p>我是用户内容，哈哈哈</p>  
      <!-- <h4>{{$route.params.userId}}</h4> -->
      <h4>{{userId}}</h4>
  </div>
</template>

<script>
export default {
  name: 'User',
 computed:{
     userId(){
        //  $route 当前活跃路由
         return this.$route.params.userId
     }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
