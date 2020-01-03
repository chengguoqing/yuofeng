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
			<list></list>
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
				menusd: ['运单分布', '费用分布', '准点率', '货损率', '好评率']
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
		mounted() {
		}
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
	.xrttyxweret{
		position: sticky;
		left: 0;
		top: 0;
		z-index: 10;
		/* #ifdef H5 */
		top: 88upx;
		/* #endif */
	}
</style>
