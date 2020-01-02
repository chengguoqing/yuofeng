<template>
	<view>
		<view class="pr">
			<image src="../../static/img/top.jpg" class="w100" mode="widthFix"></image>
			<view class="denglboxde">
				<view class="pr hggsinput">
					<image src="../../static/img/dsfdsa.png" class="xiaodee" mode="widthFix"></image>
					<input type="text" placeholder="请输入用户名" />
				</view>
				<view class="pr hggsinput mt40">
					<image src="../../static/img/dsfdsb.png" class="xiaodee" mode="widthFix"></image>
					<input type="password" placeholder="请输入密码" />
				</view>
				<view class="mt60">
					<button type="primary" @tap="dengluer">登录</button>
				</view>
			</view>
		</view>
		<view class="bhxdrrt">
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			dengluer(){
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	

	.denglboxde {
		width: 570upx;
		margin: auto;
	}
	.hggsinput{
		box-shadow: 0 0 20upx rgba(0,0,0,0.2);
	}
	.hggsinput input {
		height: 90upx;
		padding-left: 80upx;
		font-size: 30upx;

	}
	.xiaodee{
		width: 39upx;
		position: absolute;
		left: 20upx;
		top: 25upx;
	}
</style>
