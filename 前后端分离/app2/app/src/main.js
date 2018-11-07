import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import App from './component/App.vue'
Vue.use(VueRouter);
Vue.use(axios);
/*console.log(VueRouter);*/
import Home from './component/Apphome.vue'
import Login from './component/Login.vue'
import Regist from './component/Regist.vue'
import Message from './component/Message.vue'
import List from './component/List.vue'
import Personalmessage from './component/Personalmessage.vue'
import Mypersonal from './component/Mypersonal.vue'
import Fabiao from './component/Fabiao.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

const routes = [
  { path: '/',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/login',component:Login},
  {path:'/regist',component:Regist},
  { path: '/message', component: Message },
  { path: '/list/:id', component: List },
  { path: '/personalmessage', component: Personalmessage },
  { path: '/Mypersonal', component: Mypersonal },
    { path: '/Fabiao', component: Fabiao }
];
const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
