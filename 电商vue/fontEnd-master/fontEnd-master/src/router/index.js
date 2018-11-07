import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/page/PageHome'//首页
import PageReg from '@/components/page/PageReg'//注册
import PageLogin from '@/components/page/PageLogin'//登录
import PageCollect from '@/components/page/PageCollect'//收藏
import PageCart from '@/components/page/PageCart'//购物车
import PageOrder from '@/components/page/PageOrder'//订单
import PageDetails from '@/components/page/PageDetails'//详情页
import PageUser from '@/components/page/PageUser'//个人主页
import PageUserSet from '@/components/page/PageUserSet'//个人信息
import PageAddress from '@/components/page/PageAddress'//地址管理
import PageEditAddress from '@/components/page/PageEditAddress'//编辑地址
import PageEditAddressSelect from '@/components/page/PageEditAddressSelect'//编辑省市
import PageOrderAll from '@/components/page/PageOrderAll'//全部订单
import PageOrderPay from '@/components/page/PageOrderPay'//待付款订单
import PageOrderGo from '@/components/page/PageOrderGo'//待发货订单
import PageOrderWait from '@/components/page/PageOrderWait'//待收货订单
import PageOrderOn from '@/components/page/PageOrderOn'//已收货订单
import PageOrderComment from '@/components/page/PageOrderComment'//已收货订单
import PageAllClass from '@/components/page/PageAllClass'//所有分类
import PageClassify from '@/components/page/PageClassify'//分类页
import PageSearch from '@/components/page/PageSearch'//搜索
import PageSearchRecommend from '@/components/page/PageSearchRecommend'//搜索推荐
import PageSearchResult from '@/components/page/PageSearchResult'//搜索结果
import PageDiscount from '@/components/page/PageDiscount'//优惠券
import PageAboutus from '@/components/page/PageAboutus'//关于我们
import PageComment from '@/components/page/PageComment'//评论页
import PageOrderForGoods from '@/components/page/PageOrderForGoods'//付款页

import MyTest from '@/components/MyTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/test',
      component: MyTest
    },
    {
      path:'/home',
      component: PageHome
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/reg',
      component: PageReg
    },
    {
      path:'/login',
      component: PageLogin
    },
    {
      path:'/collect',
      component: PageCollect
    },
    {
      path:'/cart',
      component: PageCart
    },
    {
      path:'/order',
      redirect:'/order/all'
    },
    {
      path: '/order',
      component: PageOrder,
      children: [
        { path: "/order/all", component: PageOrderAll },
        { path: "/order/wait_pay", component: PageOrderPay },
        { path: "/order/wait_go", component: PageOrderGo },
        { path: "/order/wait_arrive", component: PageOrderWait },
        { path: "/order/on_arrive", component: PageOrderOn }
      ]
    },
    {
      path:'/order/comment_all',
      component: PageOrderComment
    },
    {
      path:'/details/:tag',
      component: PageDetails
    },
    {
      path:'/user',
      component: PageUser
    },
    {
      path:'/user/set',
      component: PageUserSet
    },
    {
      path:'/user/address',
      component: PageAddress
    },
    {
      path:'/user/address/edit/:id',//地址id
      component: PageEditAddress
    },
    {
      path:'/user/address/edit/select/:id',
      component: PageEditAddressSelect
    },
    {
      path:'/all_class',
      component: PageAllClass
    },
    {
      path:'/classify/:name/:page',
      component: PageClassify
    },
    {
      path:'/search',
      redirect:'/search/recommend'
    },
    {
      path:'/search',
      component: PageSearch,
      children: [
        { path: "/search/recommend", component: PageSearchRecommend },
        { path: "/search/result/:key", component: PageSearchResult },
      ]
    },
    {
      path:'/discount',
      component: PageDiscount,
    },
    {
      path:'/aboutus',
      component: PageAboutus,
    },
    {
      path:'/order/comment_all/comment',
      component: PageComment,
    },
    {
      path:'/cart/orderforgoods',
      component:PageOrderForGoods,
    }

  ]
})
