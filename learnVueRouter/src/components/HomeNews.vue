<template>
  <div>
      <ul>
         <li>新闻1</li>
         <li>新闻2</li>
         <li>新闻3</li>
         <li>新闻4</li>
     </ul>  
  </div>
</template>

<script>
export default {
  name: 'HomeNews',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul>li{
    list-style: none;
}
</style>
