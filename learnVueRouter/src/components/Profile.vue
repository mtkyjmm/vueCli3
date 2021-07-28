<template>
  <div>
      <h2>我是用户档案</h2>
      <p>我是档案内容，哈哈哈</p>  
      <!-- <h4>{{$route.params.userId}}</h4> -->
      <h4>{{$route.query}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
