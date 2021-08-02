import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
  mode:'history'
})
