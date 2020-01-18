<template>
    <view>
		<view class="pd mt40">
			       <table class="dfdfrttxze fz26">
			                    <thead>
			                        <tr>
			                            <td>序号</td>
			                            <td>里程</td>
			                            <td>地址</td>
										<td>操作</td>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        <tr>
			                            <td>1</td>
			                            <td>53</td>
			                            <td width="200px">
											<view class="dian deeerrtxer">
												留仙洞大厦留仙洞大厦留仙洞大厦留仙洞大厦留仙洞大厦留仙洞大厦留仙洞大厦留仙洞大厦留仙洞大厦
											</view>
										</td>
										 <td>
											 <view class="ls fz26" @tap="getde">
											 	选择
											 </view>
										 </td>
			                        </tr>
			                    </tbody>
			                </table>
		</view>
		
<view class="map_box mt20">
  <map class="sdfsdrttxx" longitude="113.914624" latitude="22.586422" scale="12" :markers="markers" :polyline="polyline"></map>
</view>

    </view>
</template>
<script>
import amapFile from "@/static/js/amap-wx.js"
export default {
    data () {
        return {
			 markers: [{
			      iconPath: "../../../static/img/qidian.png",
			      id: 0,
			      latitude: '',
			      longitude: 113.914624,
			      width: 24,
			      height: 33
			    },{
			      iconPath: "../../../static/img/zongdian.png",
			      id: 0,
			      latitude: 22.586422,
			      longitude: 113.930429,
			      width: 24,
			      height: 34
			    }],
			    distance: '',
			    cost: '',
			    polyline: [],
				kjhshsfa:'',
				kjhshsfb:'',
		}
    },
    components: {},
    methods: {
		async getde () {
			let ssdde = await  this.getdizhi("广东省深圳市南山区阳光科创")
			this.markers[0].latitude = ssdde.split(",")[1]
			this.markers[0].longitude = ssdde.split(",")[0]
			let ssddese = await  this.getdizhi("广东省深圳市南山区留仙洞大厦")
			this.markers[1].latitude = ssddese.split(",")[1]
			this.markers[1].longitude = ssddese.split(",")[0]
			var that = this;
			  var myAmapFun = new amapFile.AMapWX({key: '4c9b557f99dc1b8f039306f3648ba4b2'});
			  myAmapFun.getDrivingRoute({
			    origin:ssdde,
			    destination: ssddese,
			    success: function(data){
			      var points = [];
			      if(data.paths && data.paths[0] && data.paths[0].steps){
			        var steps = data.paths[0].steps;
			        for(var i = 0; i < steps.length; i++){
			          var poLen = steps[i].polyline.split(';');
			          for(var j = 0;j < poLen.length; j++){
			            points.push({
			              longitude: parseFloat(poLen[j].split(',')[0]),
			              latitude: parseFloat(poLen[j].split(',')[1])
			            })
			          } 
			        }
			      }
			      console.log(that.polyline)
			        that.polyline = [{
			          points: points,
			          color: "#0091ff",
			          width: 6
			        }]
			      if(data.paths[0] && data.paths[0].distance){
			        
			          that.distance=data.paths[0].distance + '米'
			       
			      }
			      if(data.taxi_cost){
			          that.cost='打车约' + parseInt(data.taxi_cost) + '元'
			      }
			        
			    },
			    fail: function(info){
					
			    }
			  })
		}
	},
	onLoad() {
		 
	},
    mounted () {
	}
}
</script>
<style  scoped>
	.sdfsdrttxx{
			width: 100%;
			height: 800upx;
	}
</style>

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
