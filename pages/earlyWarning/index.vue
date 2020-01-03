<template>
	<view>
		<!-- <scroll-view class="tajhxetxe w100" scroll-x="true" >
			<view class="ov pl20">
				<view class="fz28 z6 shhxeertx" v-for="(sd,idx) in menusd" :class="idx ==idxs?'act':''" @tap="qiehuna(idx)">
					{{sd}}
				</view>
			</view>
		</scroll-view> -->
		<view class="row tajhxetxe w100 cen">
			<view class="col fz28 z6 shhxeertx" v-for="(sd,idx) in menusd" :key="idx" :class="idx ==idxs?'act':''" @tap="qiehuna(idx)">
				{{sd}}
			</view>
		</view>
		<view class="pt20 pm20 fz32 cen">
			待发运单52票
		</view>
		<view class="pd">
			<view class="jhssdcase bgff mb20" v-for="sd in 20">
				<view class="fz30 cf ytyticrert pd pt10 pm10">
					系统编号：191113040手工单号：022451
				</view>
				<view class="fz28 z6 pd pt20 pm20">
					<view class="dfdfg_eer">
						日期：2019-11-13
					</view>
					<view class="dfdfg_eer">
						到达站：萧山
					</view>
					<view class="dfdfg_eer">
						收货人：张三
					</view>
					<view class="dfdfg_eer">
						电话：13961112415
					</view>
					<view class="dfdfg_eer">
						货名：助力车
					</view>
					<view class="dfdfg_eer">
						件数：3
					</view>
					<view class="qc"></view>
				</view>
				<view class="btm tr pd ls fz28 z6 pt10 pm10">
					<text @tap="hf('/pages/earlyWarning/details')">详情</text> 
					<text class="ml20" @tap="hf('/pages/earlyWarning/trace')">追踪</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				idxs: 0,
				menusd: ['超时运单', '等通知/代收运单', '待发运单', '退货运单']
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		components: {

		},
		methods: {
			qiehuna (idx){
				this.idxs = idx
			},
			zuussd(){
				uni.navigateTo({
					url:'/pages/earlyWarning/trace'
				})
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	
</style>
