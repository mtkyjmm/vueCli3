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
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');


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
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        // meta: {
        //   title: '新闻'
        // },
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]

  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: About
  },
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User,
    beforeEnter: (to, from, next) => {
      // ... 路由独享首位
      console.log('beforeEnter----------');
      next();
    }
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // 从from跳到to
  // console.log(to);
  document.title = to.meta.title;//第一次进入为undefined
  document.title = to.matched[0].meta.title;
  // 一定要执行next() 否则无法进行下一步 
  next()
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
