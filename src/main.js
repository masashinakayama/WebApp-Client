import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui' // 追記
import locale from 'element-ui/lib/locale/lang/ja' // 追記
import 'element-ui/lib/theme-chalk/index.css' // 追記

import firebase from 'firebase' // 追記

Vue.config.productionTip = false
Vue.use(ElementUI, { locale }) // 追記

var config = {
  apiKey: 'AIzaSyBIspLSnBaJzsrqYHFLVGjySTGLE5vbJNM',
  authDomain: 'webapp-38b61.firebaseapp.com',
  databaseURL: 'https://webapp-38b61.firebaseio.com',
  projectId: 'webapp-38b61',
  storageBucket: 'webapp-38b61.appspot.com',
  messagingSenderId: '351774348336'
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
