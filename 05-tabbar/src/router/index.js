import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const Home = () => import('../views/home/Home');
const Call = () => import('../views/call/Call');
const Photo = () => import('../views/photo/Photo');
const Message = () => import('../views/message/Message');

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/call',
    component: Call
  },
  {
    path: '/photo',
    component: Photo
  },
  {
    path: '/message',
    component: Message
  },

]
export default new Router({
  routes,
  mode: 'history'
})
