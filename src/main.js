import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import axios from 'axios'
import router from './router'
import service from './service'
import echarts from 'echarts'

const app = createApp(App)
app.config.globalProperties.$https = axios
app.config.globalProperties.service = service
app.config.globalProperties.$echarts = echarts

//路由导航守卫
router.beforeEach((to,from,next) => {
    if(!localStorage.getItem('username')) {
      if(to.path !== '/login') {
        next('/login')
      } else next()
    } next()
  })
app.use(ElementPlus,{locale}).use(router).mount('#app')
