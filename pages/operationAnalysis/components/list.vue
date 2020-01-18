<template>
	<view>
		<canvas :canvas-id="ids" :id="ids" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
		 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,ids)"></canvas>
		<view class="pd mt40">
			<table class="dfdfrttxze" cellspacing="0" v-if="jhshse==1">
			                    <thead>
			                        <tr>
			                            <td>地区</td>
			                            <td>票数</td>
			                            <td>占比</td>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        <tr v-for="sd in 6">
			                            <td>北京</td>
			                            <td>53</td>
			                            <td>10%</td>
			                        </tr>
			                    </tbody>
			                </table>
			                <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==2">
			                   <thead>
			                        <tr>
			                            <td>地区</td>
			                            <td>票数</td>
			                            <td>占比</td>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        <tr v-for="sd in 6">
			                            <td>北京</td>
			                            <td>53</td>
			                            <td>10%</td>
			                        </tr>
			                    </tbody>
			                </table>
			                <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==3">
			                    <thead>
			                        <tr>
			                            <td>总票数</td>
			                            <td>600</td>
			                            <td>占比</td>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        <tr>
			                            <td>正常</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                        <tr>
			                            <td>超时一天</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                        <tr>
			                            <td>超时两天</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                        <tr>
			                            <td>超时三天</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                        
			                    </tbody>
			                </table>
			                
			                
			                
			                <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==4">
			                    <thead>
			                        <tr>
			                            <td>总票数</td>
			                            <td>600</td>
			                            <td>占比</td>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        <tr >
			                            <td>正常</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                        <tr >
			                            <td>货损</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                    </tbody>
			                </table>
			                 <table class="dfdfrttxze" cellspacing="0" v-if="jhshse==5">
			                    <thead>
			                        <tr>
			                            <td>总票数</td>
			                            <td>600</td>
			                            <td>占比</td>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        <tr >
			                            <td>好评</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                        <tr >
			                            <td>中评</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                        <tr >
			                            <td>差评</td>
			                            <td>577</td>
			                            <td>96.1%</td>
			                        </tr>
			                         <tr >
			                            <td>服务态度</td>
			                            <td colspan="2">4.9</td>
			                        </tr>
			                         <tr >
			                            <td>物流时效</td>
			                            <td colspan="2">4.9</td>
			                        </tr>
			                         <tr >
			                            <td>安全到达</td>
			                            <td colspan="2">4.9</td>
			                        </tr>
			                    </tbody>
			                </table>
		</view>
	</view>
</template>
<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};
	export default {
		props:['kkxer','ids','jhshse'],
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
			let xdeder = this.kkxer 
			this.showPie(this.ids, xdeder);

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
	
	
	.dfdfrttxze {
	       width: 100%;
	       border: 1px solid #e0e0e0;
	       text-align: center;
	       font-size: 14px;
	       line-height: 30px;
	       border-right: 0;
	       border-bottom: 0
	   }
	   .irseerr{
	       position: relative;
	       top: 50px;
	   }
		
	   .dfdfrttxze td {
	       border-right: 1px solid #e0e0e0;
	       border-bottom: 1px solid #e0e0e0;
	   }
			.deeerrtxer{
				max-width: 400upx;
			}
</style>
