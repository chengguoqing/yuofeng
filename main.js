import Vue from 'vue'
import App from './App'
import store from './store'
import {
	base
} from '@/static/js/base.js'
Vue.prototype.$store = store
Vue.prototype.hf = function(url) {
	uni.navigateTo({
		url: url
	});
}
Vue.prototype.ht = function() {
	uni.navigateBack()
}

Vue.config.productionTip = false

Vue.use(base)
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
