import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './style/acc_style'
import './config/rem'
import $ from 'jquery'

import 'bootstrap3/dist/js/bootstrap'
import 'bootstrap3/dist/css/bootstrap'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.woff'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.woff2'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.eot'
import 'bootstrap3/dist/fonts/glyphicons-halflings-regular.ttf'


Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')