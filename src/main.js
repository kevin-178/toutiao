import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载vant核心组件库
import Vant from 'vant'

// 加载vant全局样式
import 'vant/lib/index.css'

//引入全局样式
import '@/style/index.less'

// 加载动态rem设置
import 'amfe-flexible'

// 引入公共的组件
import common from '@/components/common'
// 注册全局组件
for(let key in common){
  Vue.component(key,common[key]);
}
// 注册使用vant组件库
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
