//配置路由相关的信息
import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');
const HomeNews= ()=>import('../components/HomeNews');
const HomeMessage= ()=>import('../components/HomeMessage');


//1.通过Vue.use(插件) 来安装插件
Vue.use(VueRouter);

//解决切换路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home' //redirect 重定向
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      },
    ]

  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }, 
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 3.将router传入到vue实例中
export default router;







// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
