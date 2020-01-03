<template>
	<view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="">运单编号：</text>
			</view>
			<view class="col fz28 z9">
				111335544
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="">货损说明：</text>
			</view>
			<view class="col fz28 z9 sdffdeetr">
				货损说明货损说明货损说明货损说明货损说明货损说明货损说明货损说明货损说明货损说明货损说明
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
				<text class="">实际赔偿金额：</text>
			</view>
			<view class="col fz28 z9 ">
				2000
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz28 z3 jjhhxeer">
				<text class="">处理说明：</text>
			</view>
			<view class="col fz28 z9 sdffdeetr">
				处理说明处理说明处理说明处理说明处理说明处理说明处理说明处理说明处理说明
			</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		data() {
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
		components: {},
		methods: {
			sxde() {
				let th = this
				uni.chooseImage({
					success: function(res) {
						console.log(res.tempFilePaths)
						res.tempFiles.map(a => {
							th.imgdf.push(a)
						})
					}
				});
			},
			closee(idx) {
				this.imgdf.splice(idx, 1);
			},
			liussd(urle) {
				let sdeer = []
				sdeer.push(urle)
				uni.previewImage({
					urls: sdeer
				});
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.jjhhxeer{
		width: 200upx;
	}
	.dxlisteetr {
		line-height: 80upx;
	}

	.dxlisteetr input {
		height: 80upx;
		font-size: 28upx;
	}

	.sdffdeetr {
		padding-top: 15upx;
		line-height: 1.8;
		padding-bottom: 15upx;
	}
</style>
