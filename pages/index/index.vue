<template>
	<view class="">
		<swiper class="cdertxer pr" :circular="true" indicator-color="#fff" indicator-active-color="#F39616" :indicator-dots="true"
		 :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="sd in 3">
				<image src="http://duxinggj.com/www/static/img/2.jpg" @tap="liuys"></image>
			</swiper-item>
		</swiper>

		<view class=" xetxertxe pd pt20 pr">
			<navigator :url="sd.url" class="hhgxdert pd" v-for="sd in jhgder" :class="sd.classname">
				<image :src="sd.icons" class="cz" mode="widthFix"></image>
				<text class="fz36 cf cz">{{sd.name}}</text>
			</navigator>
		</view>
		<view class="bhxdrrt">
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				jhgder: [{
					name: '网点运价',
					classname: 'aa',
					icons: '../../static/img/dsfdsfa.png',
					url: '/pages/index/DotFreight'
				}, {
					name: '我的运单',
					classname: 'ab',
					icons: '../../static/img/dsfdsfb.png',
					url: '/pages/MyWaybill/index'
				}, {
					name: '预警运单',
					classname: 'ag',
					icons: '../../static/img/dsfdsff.png',
					url: '/pages/earlyWarning/index'
				}, {
					name: '我的理赔',
					classname: 'ad',
					icons: '../../static/img/dsfdsfh.png',
					url: '/pages/MyClaim/index'
				}, {
					name: '客户评价',
					classname: 'ae',
					icons: '../../static/img/dsfdsfg.png',
					url: '/pages/ClientEvaluation/index'
				}, {
					name: '运营分析',
					classname: 'af',
					icons: '../../static/img/dsfdsfd.png',
					url: '/pages/operationAnalysis/index'
				}, {
					name: '在线下单',
					classname: 'ac',
					icons: '../../static/img/dsfdsfe.png',
					url: '/pages/onlineOrder/index'
				}, {
					name: '安装售后',
					classname: 'ah',
					icons: '../../static/img/dsfdsfb.png',
					url: ''
				}]
			}
		},
		components: {},
		methods: {
			liuys() {
				uni.previewImage({
					urls: ['http://duxinggj.com/www/static/img/2.jpg'],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							
						}
					}
				});
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.xetxertxe {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.hhgxdert {
		width: 48.8%;
		height: 190upx;
		line-height: 190upx;
		border-radius: 8upx;
		margin-top: 20upx;
		background: linear-gradient(to right, #AED0FF, #69A3F3);
	}

	.hhgxdert image {
		width: 126upx;
		margin-right: 20upx;
	}

	.hhgxdert.ab {
		background: linear-gradient(to right, #81EFD9, #2EC480);
	}

	.hhgxdert.ac {
		background: linear-gradient(to right, #FDC18C, #F4903A);
	}

	.hhgxdert.ad {
		background: linear-gradient(to right, #CDA5F7, #964CE4);
	}

	.hhgxdert.ae {
		background: linear-gradient(to right, #B7BBFF, #5862EF);
	}

	.hhgxdert.af {
		background: linear-gradient(to right, #FF9FD3, #E93F99);
	}

	.hhgxdert.ag {
		background: linear-gradient(to right, #FF9AA8, #F55A70);
	}

	.cdertxer {
		height: 350upx;
		z-index: 1000;
	}

	.cdertxer image {
		width: 100%;
		height: 100%;
	}
</style>
