<template>
	<view>
		<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
		 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasRing')"></canvas>
		<view class="pd mt40">
			<view class="genaral-area">
				<view class="flex-box tc thead">
					<view class="item-3">地区</view>
					<view class="item-3">票数</view>
					<view class="item-3">占比</view>
				</view>
				<view class="flex-box table tc" v-for="sd in 8">
					<view class="item-3">
						北京
					</view>
					<view class="item-3">
						50
					</view>
					<view class="item-3">
						40
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
			}
		},
		components: {},
		methods: {
			showPie(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					padding: [15, 0, 0, 0],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: false,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
		},
		mounted() {
			_self = this
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			let xdeder = {
				"series": [{
					"name": "北京",
					"data": 50
				}, {
					"name": "上海",
					"data": 30
				}, {
					"name": "常州",
					"data": 20
				}, {
					"name": "无锡",
					"data": 18
				}, {
					"name": "杭州",
					"data": 8
				}, {
					"name": "潇山",
					"data": 8
				}, {
					"name": "西安",
					"data": 8
				}]
			}
			this.showPie("canvasRing", xdeder);

		}
	}
</script>
<style lang="scss" scoped>
	$color:#e0e0e0;

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #fbf9fe;
	}

	.flex-box {
		display: flex;
		flex-wrap: wrap;
	}


	.flex-box>.item-2 {
		flex: 0 0 50%;
	}

	.flex-box>.item-3 {
		flex: 0 0 33.3333%;
	}

	.title {
		margin: 20upx 0;
		color: red;
	}

	//普通表格
	.genaral-area {
		.item-3 {
			font-size: 26upx;
			border: 1upx solid $color;
			border-width: 1upx 1upx 0 0;
			padding: 16upx 0;
			box-sizing: border-box;
			text-align: center;

			&:first-child {
				border-left-width: 1upx;
			}

			&:last-child {
				border-right-width: 1upx;
			}
		}

		.thead {
			.item-3 {
				font-weight: bold;

				box-sizing: border-box;
			}
		}

		.table {
			&:last-child {
				border-bottom: 1upx solid $color;
			}

			.item-3 {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
			}
		}
	}
</style>
