<template>
	<view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">服务态度：</text>
			</view>
			<view class="col pt40">
					<uni-rate :value="0" :size="22"/>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">物流时效：</text>
			</view>
			<view class="col pt40">
					<uni-rate :value="0" :size="22"/>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">安全到达：</text>
			</view>
			<view class="col pt40">
					<uni-rate :value="0" :size="22"/>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">整体评价：</text>
			</view>
			<view class="col  fz28 z6">
					<radio-group >
						<label class="radio">
							<radio value="1" color="#00a0e9" style="transform:scale(0.8)" /><text class="cz">好评</text>
						</label>
						<label class="radio ml50">
							<radio value="2" color="#00a0e9" style="transform:scale(0.8)" /><text  class="cz">中评</text>
						</label>
						<label class="radio ml50">
							<radio value="2" color="#00a0e9" style="transform:scale(0.8)" /><text  class="cz">差评</text>
						</label>
					</radio-group>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">评价内容：</text>
			</view>
			<view class="col">
				<textarea value="" placeholder="请输入评价内容" class="w100 fz28 pt25" />
				</view>
			</view>
			<view class="row dxlisteetr pd pm20">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">上传图片：</text>
				</view>
				<view class="col" >
					<view class="jhhxedertxc cz pr" v-for="(sd,idx) in imgdf">
						<image :src="sd.path"  class="dsfrrt"  @tap="liussd(sd.path)"></image>
						<image src="../../static/img/close.png" mode="widthFix" @tap.stop="closee(idx)" class="sdeeer"></image>
					</view>
					<view class="jhhxedertxc cz pr" @tap="sxde">
						<image src="../../static/img/Add.png" mode="widthFix" class="addickdeert cz"></image>
					</view>
				</view>
			</view>
			<view class="pt40 pm20 fz28 z9  pd">
				说明：签收7天后，系统自动默认好评
			</view>
			<view class="pd">
				<button type="primary" class="fz32 mt20">提交</button>
			</view>
    </view>
</template>
<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'
export default {
    data () {
        return {
			imgdf:[]
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
	
</style>
