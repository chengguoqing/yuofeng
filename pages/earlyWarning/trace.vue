<template>
    <view>
	<view class="bgff pt40">
		<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
	</view>	
	<view class="pd pt20 pm20">
		<button type="primary" class="fz32">查看图片</button>
	</view>
	<uni-list>
		<uni-list-item :show-arrow="false">
			<view class="row">
				<view class="fz30 z6 jjhhxeer">
					货物名称：
				</view>
				<view class="col fz30 z6">
					助力电动车
				</view>
			</view>
		</uni-list-item>
		<uni-list-item :show-arrow="false">
			<view class="row">
				<view class="fz30 z6 jjhhxeer">
					件数：
				</view>
				<view class="col fz30 z6">
					3
				</view>
			</view>
		</uni-list-item>
		<uni-list-item :show-arrow="false">
			<view class="row">
				<view class="fz30 z6 jjhhxeer">
					托运日期：
				</view>
				<view class="col fz30 z6">
					2019-11-10
				</view>
			</view>
		</uni-list-item>
		<uni-list-item :show-arrow="false">
			<view class="row">
				<view class="fz30 z6 jjhhxeer">
					起始站：
				</view>
				<view class="col fz30 z6">
					江苏省 无锡市 锡山区  洛舍镇
				</view>
			</view>
		</uni-list-item>
		<uni-list-item :show-arrow="false">
			<view class="row">
				<view class="fz30 z6 jjhhxeer">
					到达站：
				</view>
				<view class="col fz30 z6">
					上海市 上海市 宝山区 车亭镇
				</view>
			</view>
		</uni-list-item>
	</uni-list>
    </view>
</template>
<script>
import uniSteps from '@/components/uni-steps/uni-steps.vue'
export default {
    data () {
        return {
			list2: [{
				title: '已签收',
				desc: '2018-11-11'
			}, {
				title: '已到站',
				desc: '2018-11-12'
			}, {
				title: '已装车',
				desc: '2018-11-13'
			}, {
				title: '已发货',
				desc: '2018-11-14'
			}, {
				title: '网上下单',
				desc: '2018-11-14'
			}]
		}
    },
    components: {
		uniSteps
	},
    methods: {},
    mounted () {}
}
</script>
<style  scoped>

</style>
