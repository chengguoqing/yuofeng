<template>
	<view>
		<view class="xrttyxweret">
			<view class="row bgff pd pt40 jhhdrrtx pm20">
				<view class="xdrrtxeert pd">
					<picker mode="date" @change="gettimert">
						<text class="z3 fz28 cz" v-if="startime">{{startime}}</text>
						<text class="z9 fz28 cz" v-else>起始月份</text>
					</picker>
					<image src="../../static/img/down.png" mode="widthFix" class="downicojcetr"></image>
				</view>
				<view class="col fz30 z3 cen">
					至
				</view>
				<view class="xdrrtxeert pd">
					<picker mode="date" @change="gettimertb" :start="startime">
						<text class="z3 fz28 cz" v-if="endtime">{{endtime}}</text>
						<text class="z9 fz28 cz" v-else>结束月份</text>
					</picker>
					<image src="../../static/img/down.png" mode="widthFix" class="downicojcetr"></image>
				</view>
			</view>

			<view class="row tajhxetxe w100 cen">
				<view class="col fz28 z6 shhxeertx" v-for="(sd,idx) in menusd" :key="idx" :class="idx ==idxs?'act':''" @tap="qiehuna(idx)">
					{{sd}}
				</view>
			</view>
		</view>
		<view class="">
			<view class="" v-if="idxs==0">1
				<list :kkxer="xdder" ids="sewerra" jhshse="1"></list>
			</view>
			<view class="" v-if="idxs==1">2
				<list :kkxer="xdderb" v-if="idxs==1" ids="sewerrb" jhshse="2"></list>
			</view>
			<view class="" v-if="idxs==2">3
				<list :kkxer="xdderc" v-if="idxs==2" ids="sewerrc" jhshse="3"></list>
			</view>
			<view class="" v-if="idxs==3">4
				<list :kkxer="xdderd" v-if="idxs==3" ids="sewerrd" jhshse="4"></list>
			</view>
			<view class="" v-if="idxs==4">5
				<list :kkxer="xddere" v-if="idxs==4" ids="sewerre" jhshse="5"></list>
			</view>





		</view>
	</view>
</template>
<script>
	import list from './components/list.vue'
	export default {
		data() {
			return {
				startime: '',
				endtime: '',
				idxs: 0,
				menusd: ['运单分布', '费用分布', '准点率', '货损率', '好评率'],
				xdder: {
					"series": [{
						"name": "北京",
						"data": 50
					}, {
						"name": "上海",
						"data": 30
					}, {
						"name": "常州",
						"data": 20
					}, {
						"name": "无锡",
						"data": 18
					}, {
						"name": "杭州",
						"data": 8
					}, {
						"name": "潇山",
						"data": 8
					}, {
						"name": "西安",
						"data": 8
					}]
				},
				xdderb: {
					"series": [{
						"name": "北京",
						"data": 50
					}, {
						"name": "上海",
						"data": 30
					}, {
						"name": "常州",
						"data": 20
					}]
				},
				xdderc: {
					"series": [{
						"name": "常州",
						"data": 20
					}, {
						"name": "无锡",
						"data": 18
					}, {
						"name": "杭州",
						"data": 8
					}, {
						"name": "潇山",
						"data": 8
					}, {
						"name": "西安",
						"data": 8
					}]
				},
				xdderd: {
					"series": [{
						"name": "北京",
						"data": 50
					}, {
						"name": "上海",
						"data": 30
					}, , {
						"name": "杭州",
						"data": 8
					}, {
						"name": "潇山",
						"data": 8
					}, {
						"name": "西安",
						"data": 8
					}]
				},
				xddere: {
					"series": [{
						"name": "潇山",
						"data": 8
					}, {
						"name": "西安",
						"data": 8
					}]
				},
			}
		},
		components: {
			list
		},
		methods: {
			gettimert(e) {
				this.startime = e.detail.value
			},
			gettimertb(e) {
				this.endtime = e.detail.value
			},
			qiehuna(idx) {
				this.idxs = idx
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.xdrrtxeert {
		height: 60upx;
		width: 300upx;
		border: 1px solid #E0E0E0;
		position: relative;
		line-height: 50upx;
	}

	.jhhdrrtx {
		line-height: 60upx;
	}

	.downicojcetr {
		width: 30upx;
		position: absolute;
		right: 20upx;
		top: 14upx;
	}

	.xrttyxweret {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 10;
		/* #ifdef H5 */
		top: 88upx;
		/* #endif */
	}
</style>
