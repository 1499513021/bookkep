// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import 'babel-polyfill'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI),

Vue.use(Vuex)
// axios.defaults.baseURL = "http://192.168.0.5:8080"
axios.defaults.baseURL = "http://119.3.158.226:8088"
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
let that = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
if(!that.$store.getters.userMsg){
  that.$router.push("/login")
}
router.beforeEach((to, from, next) => {
  console.log(to)
  const token = that.$store.getters.userMsg  //登录信息
  if (token) {
    next(); //放行
  } else {
    console.log(to)
    next({path:'/login'})
    location.reload();
  }
});