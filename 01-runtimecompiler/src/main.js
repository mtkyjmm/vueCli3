// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// const cpn ={
//   template:`<div>{{message}}</div>`,
//   data(){
//     return {
//       message:'河南加油！'
//     }
//   } 
// }
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
  // render: function (createElement) {
  //   // 1.普通用法：createElement('标签',{标签的属性},['标签里的内容'])
  //   // return createElement('h2', { class: 'box' }, ['Hello World'])
  //   // return createElement(cpn);
  // }
})
// vue.options.template->(parse)->ast(abstract syntax tree抽象语法树)->(compiler)->render->virtual dom->UI 