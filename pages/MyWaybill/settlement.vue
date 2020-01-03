<template>
	<view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">运单编号：</text>
			</view>
			<view class="col">
				<input type="text" value="" placeholder="请输入运单编号" />
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">货损金额：</text>
			</view>
			<view class="col">
				<input type="number" value="" placeholder="请输入货损金额" />
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z6 jjhhxeer">
				<text class="cz">货损说明：</text>
			</view>
			<view class="col">
				<textarea value="" placeholder="请输入货损说明" class="w100 fz28 pt25" />
				</view>
			</view>
			<view class="row dxlisteetr pd pm20">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">上传图片：</text>
				</view>
				<view class="col" >
					<view class="jhhxedertxc cz pr" v-for="(sd,idx) in imgdf">
						<image :src="sd.path"  class="dsfrrt"  @tap="liussd(sd.path)"></image>
						<text  @tap.stop="closee(idx)" class="sdeeer" > 
						 <icon type="cancel" size="24" /></text>
					</view>
					<view class="jhhxedertxc cz pr" @tap="sxde">
						<image src="../../static/img/Add.png" mode="widthFix" class="addickdeert cz"></image>
					</view>
				</view>
			</view>
			<view class="pt40 pm20 fz28 z9 cen">
				<label>
					<checkbox style="transform: scale(0.8)"/><text>我已阅读并同意</text>
				</label>
				<text class="ls" @tap="hf('/pages/MyWaybill/ClaimsThat')">理赔说明</text>
			</view>
			<view class="pd">
				<button type="primary" class="fz32 mt20">提交</button>
			</view>
    </view>
</template>
<script>
export default {
    data () {
        return {
			imgdf:[]
		}
    },
    components: {},
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
