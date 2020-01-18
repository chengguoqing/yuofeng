<template>
	<view class="dxform">
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				<text class="cz">起始站：</text>
			</view>
			<view class="col " >
				<!-- form.dsfsdfa -->
				<picker mode="selector" :range="arrayer" @change="hggdeetswer">
					<text class="z9 fz30" v-if="form.dsfsdfa < 0">请选择</text>
					<text class="z3 fz30" v-else>{{arrayer[form.dsfsdfa]}}</text>
				</picker>
			</view>
			<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				收货地址：
			</view>
			<view class="col" @tap="ipoe(2)">
				<text class="z9 fz30" v-if="!form.dsfsdfh">请选择省/市/区/镇</text>
				<text class="z3 fz30" v-else>{{form.dsfsdfh}}</text>
			</view>
			<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
		</view>
			<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				详细地址：
			</view>
			<view class="col pt25">
				<textarea value=""  v-model="form.dsfsdi" class="w100 fz30 dsfrttxww" placeholder="请输入详细地址" />
				</view>
		</view>
		<view class="row dxlisteetr pd ay">
			<view class="fz30 z6 jjhhxeer">
				货名：
			</view>
			<view class="col">
				<input type="text" value=""  @input="xrerttswer" placeholder="请输入货名" class="fz30" v-model="form.dsfsdfb" />
			</view>
			<view class="kjdsjfrdrte" v-if="xdeewrrty">
				<view class="fz26 bbm" v-for="(sd,idx) in 5" @tap="jjhhggse('选项'+idx)">
					选项{{idx}}
				</view>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				件数：
			</view>
			<view class="col">
				<input type="text" value="" placeholder="请输入件数" class="fz30" v-model="form.dsfsdfc" />
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				重量(kg)：
			</view>
			<view class="col">
				<input type="text" value="" placeholder="请输入重量" class="fz30" v-model="form.dsfsdfd" />
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				体积(㎥)：
			</view>
			<view class="col">
				<input type="text" value="" placeholder="请输入体积" class="fz30" v-model="form.dsfsdfe" />
			</view>
		</view>
			<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				配送方式：
			</view>
			<view class="col fz30 row">
				<view class="col">
				<radio-group v-model="form.dsfsdff" @change="cewrrtxe">
					<label class="radio">
						<radio :checked="form.dsfsdff==1?true:false" value="1" color="#F39616" style="transform:scale(0.8)" /><text>自提</text>
					</label>
					<label class="radio ml50">
						<radio :checked="form.dsfsdff==2?true:false" value="2" color="#F39616" style="transform:scale(0.8)" /><text>送货</text>
					</label>
				</radio-group>
				</view>
				<view class="dsfdsrtxwe" v-if="form.dsfsdff==1">
					<button type="primary" class="fz24" @tap="hf('/pages/test')">自提网点选择</button>
				</view>
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				卸货：
			</view>
			<view class="col">
				<picker mode="selector" :range="array" @change="hggdeet">
					<text class="z9 fz30" v-if="index < 0">请选择</text>
					<text class="z3 fz30" v-else>{{array[index]}}</text>
				</picker>
			</view>
		</view>
		
		
		<view class="pd mt40">
			<button type="primary" class="fz32" @tap="isxiansh=true">查询</button>
		</view>
		<view class="pd pt20">
		<view class="row  dsfdfsdtrtxer" v-if="form.dsfsdff ==2&&isxiansh">
			<view class="col fz28 z3">
				运价：300
			</view>
			<view class="col tr fz28">
				预计到达时间：5天
			</view>
		</view>
		
			
		</view>
		<view class="pd pt20" v-if="form.dsfsdff ==1&&isxiansh">
			<view class="dsfdfsdtrtxer">
			<view class="row  " >
				<view class="col  fz28">
					自提运费：
				</view>
				<view class="col  fz28 tr">
					预计到达时间：5天
				</view>
			</view>
			<view class="row pt20" >
				<view class="col  fz28">
					网点编号：
				</view>
				<view class="col  fz28 tr">
					自提里程：
				</view>
			</view>
			<view class="row  pt20" >
				<view class="col  fz28">
					网点地址：

				</view>
			</view>
			
				
			</view>
		</view>
		
		<view class="pd fz26 z9 pt40 pm40">
			备注：1、长度超4.2米，宽度超2.4米，高度超2.8米的异形货，请联系业务经理报价
			           2、大宗货物请联系业务经理报价
		</view>
		<uni-popup ref="showpopup" type="bottom" @change="change">
			<dxarea @closew="closew"></dxarea>
		</uni-popup>
		
	</view>
</template>
<script>
	import dxarea from '@/components/dxarea'
	export default {
		data() {
			return {
				arrayer:['无锡',' 永康','金华','武义'],
				xdeewrrty: false,
				form:{
					dsfsdfa:-1,
					dsfsdfb:'',
					dsfsdfc:'',
					dsfsdfd:'',
					dsfsdfe:'',
					dsfsdff:'-1',
					dsfsdfg:'',
					dsfsdfh:'',
					dsfsdfi:''
				},
				index:0,
				isxiansh:false,
				kxeer:1,//1起始 2 收货地址
				array: ['无','卸货（不上楼）', '卸货（含上楼）']
			}
		},
		components: {
			dxarea
		},
		methods: {
			hggdeet(e){
				this.index = e.target.value
			},
			hggdeetswer(e){
				this.form.dsfsdfa = e.target.value
			},
			ipoe (ider) {
				this.kxeer = ider
				this.$refs.showpopup.open()
			},
			closew (e) {
				if(this.kxeer == 1){
					this.form.dsfsdfa = e[0].name + '-' + e[1].name + '-'+e[2].name 
				}else{
					this.form.dsfsdfh = e[0].name + '-' + e[1].name + '-'+e[2].name 
				}
				this.$refs.showpopup.close()
			},
			mhhad(){
				uni.chooseLocation({
				    success: function (res) {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
				    }
				});
			},
			cewrrtxe(e){
				this.form.dsfsdff= e.detail.value
				this.isxiansh = false
			},
			xrerttswer(e) {
				if (e.detail.value) {
					this.xdeewrrty = true
				} else {
					this.xdeewrrty = false
				}
			},
			jjhhggse(e) {
				this.form.dsfsdfb = e
				this.xdeewrrty = false
			}
		},
		mounted() {
			
		}
	}
</script>
<style >
	.dxform input{
		height: 80upx !important;
	}
	.pt25{
		padding-top: 25upx;
	}
	.dsfdsrtxwe{
		padding-top: 15upx;
	}
	.dsfrttxww{
		height: 100upx;
	}
	.dsfdfsdtrtxer{
		border: 1px solid #e8e8e8;
		border-radius: 8upx;
		padding: 20upx;
		
	}
</style>
<style scoped>
	.kjdsjfrdrte{
		padding-left: 180upx;
	}
</style>