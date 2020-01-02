<template>
	<view>
		<uni-list>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							运单单号：
						</view>
						<view class="col fz28 z9">
							191110025
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							运单时间：
						</view>
						<view class="col fz28 z9">
							2019-11-10
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
						<view class="fz28 z3 jjhhxeer">
							起始站：
						</view>
						<view class="col fz28 z9">
							江苏省 无锡市 锡山区 洛舍镇
						</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
						<view class="fz28 z3 jjhhxeer">
							到达站：
						</view>
						<view class="col fz28 z9">
							江苏省 无锡市 锡山区 洛舍镇
						</view>
				</view>
			</uni-list-item>
			
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							发货人：
						</view>
						<view class="col fz28 z9">
							李四
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							发货电话：
						</view>
						<view class="col fz28 z9">
							13125240016
						</view>
					</view>
				</view>
			</uni-list-item>
			
			
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							收件人：
						</view>
						<view class="col fz28 z9">
							张三
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							收货电话：
						</view>
						<view class="col fz28 z9">
							13906251178
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
						<view class="fz28 z3 jjhhxeer">
							收货地址：
						</view>
						<view class="col fz28 z9">
							上海市浦东新区XX小区
						</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							货物名称：
						</view>
						<view class="col fz28 z9">
							助力电动车
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							包装：
						</view>
						<view class="col fz28 z9">
							箱
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							件数：
						</view>
						<view class="col fz28 z9">
							3
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							重量(吨)：
						</view>
						<view class="col fz28 z9">
							0.75
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							体积(方)：
						</view>
						<view class="col fz28 z9">
							0.6
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							配送方式：
						</view>
						<view class="col fz28 z9">
							送货
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
						<view class="fz28 z3 jjhhxeer ab">
							自提网点编号：
						</view>
						<view class="col fz28 z9">
							送货则不显示
						</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
						<view class="fz28 z3 jjhhxeer ab">
							自提网点地址：
						</view>
						<view class="col fz28 z9">
							送货则不显示
						</view>
				</view>
			</uni-list-item>
			
			
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							卸货：
						</view>
						<view class="col fz28 z9">
							无
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer ab">
							是否等通知：
						</view>
						<view class="col fz28 z9">
							是
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
						总运费：
						</view>
						<view class="col fz28 z9">
						3000
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							现付：
						</view>
						<view class="col fz28 z9">
							0
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
						到付：
						</view>
						<view class="col fz28 z9">
							0
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							欠付：
						</view>
						<view class="col fz28 z9">
							3000
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							代收款：
						</view>
						<view class="col fz28 z9">
							4500
						</view>
					</view>
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
							代垫费：
						</view>
						<view class="col fz28 z9">
						0
						</view>
					</view>
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
					<view class="row col">
						<view class="fz28 z3 jjhhxeer">
						回单类型：
						</view>
						<view class="col fz28 z9">
							回单
						</view>
					</view>
					
				</view>
			</uni-list-item>
			<uni-list-item :show-arrow="false">
				<view class="row">
						<view class="fz28 z3 jjhhxeer ">
							收货备注：
						</view>
						<view class="col fz28 z9">
							收货备注收货备注收货备注收货备注收货备注
						</view>
				</view>
			</uni-list-item>
		</uni-list>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {},
		mounted() {}
	}
</script>
<style lang='scss' scoped>
.jjhhxeer.ab{
	width: 210upx;
}
</style>
