<template>
	<view>
		<view class="xrttyxweret bgff pm20">
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
			
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">运单状态：</text>
				</view>
				<view class="col " >
					<picker mode="selector" :range="array" @change="hggdeet">
						<text class="z9 fz28" v-if="index < 0">请选择</text>
						<text class="z3 fz28" v-else>{{array[index]}}</text>
					</picker>
				</view>
				<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
			</view>
			<view class="row dxlisteetr pd">
				<view class="col" >
					<input type="text" value="" placeholder="收货电话/收货人/到达站/单号" />
				</view>
			</view>
			<view class="pd pt40 btm">
				<button type="primary" class="fz32">查询</button>
			</view>
		</view>
			<view class="pd pt40">
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
						<text class="ml20" @tap="hf('/pages/MyWaybill/evaluate')">评价</text>
						<text class="ml20" @tap="hf('/pages/MyWaybill/settlement')">理赔</text>
					</view>
				</view>
			</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				startime: '',
				endtime: '',
				index:-1,
				array: ['全 部', '待发货（备注：网上下单后运单状态）', '已发货（备注：文员、司机开单后运单状态）', '已装车（备注：已配载给外线）', '已签收（备注：客户签收后）']
			}
		},
		components: {
		},
		methods: {
			hggdeet(e){
				this.index = e.target.value
			},
			gettimert(e) {
				this.startime = e.detail.value
			},
			gettimertb(e) {
				this.endtime = e.detail.value
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
	.dxlisteetr{
		height: 80upx;
		line-height: 80upx;
	}
	.dxlisteetr input{
		height: 80upx;
		font-size: 28upx;
	}
</style>
