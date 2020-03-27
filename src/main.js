//入口文件

import Vue from 'vue'
//导入路由的包
import  VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
//导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)
//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需导入
//导入App跟组件Mint-UI中的组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import router from './router.js'
import app from "./App.vue"
var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router
})
