import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../view/home/Home');
const Cart = () => import('../view/cart/Cart');
const Category = () => import('../view/category/Category');
const Profile = () => import('../view/profile/Profile');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/profile',
      component:Profile
    }
  ]
})
