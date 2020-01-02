import Vue from 'vue'
import App from './App'
import store from './store'
import uniSection from '@/components/uni-section/uni-section.vue'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
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
Vue.component('uniSection',uniSection)
Vue.component('uniList',uniList)
Vue.component('uniListItem',uniListItem)
Vue.component('uniPopup',uniPopup)
Vue.use(base)
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
