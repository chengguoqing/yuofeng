<template>
	<view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="cz">服务态度：</text>
			</view>
			<view class="col pt40">
					<uni-rate :value="4" :size="22" :disabled="true"/>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="cz">物流时效：</text>
			</view>
			<view class="col pt40">
					<uni-rate :value="5" :size="22" :disabled="true"/>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="cz">安全到达：</text>
			</view>
			<view class="col pt40">
					<uni-rate :value="5" :size="22" :disabled="true"/>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="">整体评价：</text>
			</view>
			<view class="col  fz28 z9">
					好评
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="cz">评价内容：</text>
			</view>
			<view class="col z9 fz28 dsfdfrtrtxew">
				物流很给力。物流很给力。物流很给力。物流很给力。物流很给力。物流很给力。
				</view>
			</view>
			<view class="row dxlisteetr pd pm20">
				<view class="fz28 z3 jjhhxeer">
					<text class="">图片：</text>
				</view>
				<view class="col">
					<view class="jhhxedertxc cz pr" v-for="(sd,idx) in imgdf">
						<image :src="sd.path" class="dsfrrt" @tap="liussd(sd.path)"></image>
					</view>
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz28 z3 jjhhxeer">
					<text class="cz">回复内容：</text>
				</view>
				<view class="col z9 fz28 dsfdfrtrtxew">
					回复内容回复内容回复内容回复内容回复内容
					</view>
				</view>
    </view>
</template>
<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'
export default {
    data () {
        return {
		imgdf: [
			{
				path:'http://duxinggj.com/www/static/img/2.jpg'
			},{
				path:'http://duxinggj.com/www/static/img/2.jpg'
			},{
				path:'http://duxinggj.com/www/static/img/2.jpg'
			}
		]
		}
    },
    components: {
		uniRate
	},
    methods: {
		sxde () {
			let th = this
			uni.chooseImage({
			    success: function (res) {
					console.log(res.tempFilePaths)
					res.tempFiles.map(a=>{
						th.imgdf.push(a)
					})
			    }
			});
		},
		closee(idx){
			this.imgdf.splice(idx, 1);
		},
		liussd(urle){
			let sdeer = []
			sdeer.push(urle)
			   uni.previewImage({
			            urls: sdeer
			        });
		}
	},
    mounted () {}
}
</script>
<style  scoped>
.dxlisteetr{
		line-height: 80upx;
	}
	.dxlisteetr input{
		height: 80upx;
		font-size: 28upx;
	}
	.dsfdfrtrtxew{
		line-height: 1.5;
		padding-top: 15upx;
		padding-bottom: 15upx;
	}
</style>
