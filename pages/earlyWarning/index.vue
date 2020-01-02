<template>
	<view>
		<scroll-view class="tajhxetxe w100" scroll-x="true" >
			<view class="ov pl20">
				<view class="fz28 z6 shhxeertx" v-for="(sd,idx) in menusd" :class="idx ==idxs?'act':''" @tap="qiehuna(idx)">
					{{sd}}
				</view>
			</view>
		</scroll-view>
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
				menusd: ['待发运单', '超时运单', '退货运单', '等通知/代收运单']
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
	.tajhxetxe {
		height: 80upx;
		background: #fff;
		line-height: 80upx;
		border-bottom: 1px solid #e0e0e0;
		white-space:nowrap;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 100;
		/* #ifdef H5 */
			top: 88upx;
		/* #endif */
	}
	.shhxeertx{
		display: inline-block;
		padding-left:20upx;
		padding-right: 20upx;
		position: relative;
	}
	.shhxeertx.act{
		color: #00a0e9;
	}
	.shhxeertx.act:after{
		content: ' ';
		position: absolute;
		left: 0;
		bottom: 4upx;
		width: 100%;
		height: 4upx;
		z-index: 100;
		background: #00a0e9;
	}
	.ytyticrert{
		background: #00a0e9;
		
	}
	.dfdfg_eer{
		width: 50%;
		float: left;
		line-height: 60upx;
	}
	.jhssdcase{
		border-radius: 8upx;
		border: 1px solid #e0e0e0;
		overflow: hidden;
	}
</style>
