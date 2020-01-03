<template>
	<view class="pm40">
		<view class="">
			<uni-section title="基本信息" type="line"></uni-section>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">手工单号：</text>
				</view>
				<view class="col">
					<input type="text" value="" placeholder="请输入手工单号" v-model="form.dsfsdfa" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">起始站：</text>
				</view>
				<view class="col " @tap="ipoe(1)">
					<text class="z9 fz30 " v-if="!form.dsfsdfb">请选择</text>
					<text class="z3 fz30 " v-else>{{form.dsfsdfb}}</text>
				</view>
				<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">到达站：</text>
				</view>
				<view class="col " @tap="ipoe(2)">
					<text class="z9 fz30 " v-if="!form.dsfsdfc">请选择</text>
					<text class="z3 fz30 " v-else>{{form.dsfsdfc}}</text>
				</view>
				<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
			</view>
		</view>
		
		<view class="">
			<uni-section title="托运人信息" type="line"></uni-section>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">托运单位:</text>
				</view>
				<view class="col">
					<input type="text" disabled value=""  v-model="form.dsfsdfd" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">托运人:</text>
				</view>
				<view class="col ">
					<input type="text" disabled placeholder="请输入手工单号" v-model="form.dsfsdfe" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">电话:</text>
				</view>
				<view class="col ">
					<input type="number" value="" placeholder="请输入手工单号" v-model="form.dsfsdff" />
				</view>
			</view>
		</view>
		
		<view class="">
			<uni-section title="收货人信息" type="line"></uni-section>
			
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">收货人:</text>
				</view>
				<view class="col ">
					<input type="text" value="" placeholder="请输入收货人" v-model="form.dsfsdfg" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">电话:</text>
				</view>
				<view class="col ">
					<input type="number" value="" placeholder="请输入电话" v-model="form.dsfsdfh" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">收货地址:</text>
				</view>
				<view class="col ">
					<input type="text" value="" placeholder="请输入收货地址" v-model="form.dsfsdfi" />
				</view>
			</view>
		</view>
		
		
		<view class="">
			<uni-section title="货物信息" type="line"></uni-section>
			
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">货物:</text>
				</view>
				<view class="col ">
					<input type="text" value="" placeholder="请输入货物" v-model="form.dsfsdfj" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">包装:</text>
				</view>
				<view class="col ">
					<input type="text" value="" placeholder="请输入包装" v-model="form.dsfsdfk" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">件数:</text>
				</view>
				<view class="col ">
					<input type="number" value="" placeholder="请输入件数" v-model="form.dsfsdfl" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">重量(t):</text>
				</view>
				<view class="col ">
					<input type="number" value="" placeholder="请输入重量" v-model="form.dsfsdfq" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">体积(m³):</text>
				</view>
				<view class="col ">
					<input type="number" value="" placeholder="请输入体积" v-model="form.dsfsdfw" />
				</view>
			</view>
		</view>
		
		<view class="">
			<uni-section title="配送信息" type="line"></uni-section>
			
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">配送方式:</text>
				</view>
				<view class="col fz26 row">
					<view class="col">
						<radio-group v-model="form.dfdfdda" @change="cewrrtxe">
							<label class="radio">
								<radio :checked="form.dfdfdda==1?true:false" value="1" color="#00a0e9" style="transform:scale(0.8)" /><text>自提</text>
							</label>
							<label class="radio ml50">
								<radio value="2" :checked="form.dfdfdda==2?true:false" color="#00a0e9" style="transform:scale(0.8)" /><text>送货</text>
							</label>
						</radio-group>
					</view>
					<view class="dsfdsrtxwe" v-if="form.dfdfdda==2">
						<button type="primary" class="fz24" @tap="mhhad">自提网点选择</button>
					</view>
				</view>
			</view>
			<view class="row dxlisteetr pd"  v-if="form.dfdfdda==1">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">自提网点编号:</text>
				</view>
				<view class="col ">
					<input type="text" value="" placeholder="请输入自提网点编号：" v-model="form.dsfsdfk" />
				</view>
			</view>
			<view class="row dxlisteetr pd"  v-if="form.dfdfdda==1">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">自提网点地址:</text>
				</view>
				<view class="col ">
					<input type="text" value="" placeholder="请输入自提网点地址" v-model="form.dsfsdfl" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">是否等通知:</text>
				</view>
				<view class="col ">
					<label class="z3 fz28">
						<checkbox style="transform: scale(0.85)" /><text>等通知</text>
					</label>
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">卸货：</text>
				</view>
				<view class="col " >
					<picker mode="selector" :range="rangea" @change="sddfdsrta">
						<view class="z9 fz28 " v-if="ssdea<0">请选择</view>
						<view class="z3 fz28" v-else>
							{{rangea[ssdea]}}
						</view>
					</picker>
				</view>
				<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
			</view>
			
			<view class="row dxlisteetr pd">
				<view class="fz30 z6 jjhhxeer">
					<text class="cz">回单类型：</text>
				</view>
				<view class="col " >
					<picker mode="selector" :range="rangeb" @change="sddfdsrtb">
						<view class="z9 fz28 " v-if="ssdeb<0">请选择</view>
						<view class="z3 fz28" v-else>
							{{rangeb[ssdeb]}}
						</view>
					</picker>
				</view>
				<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
			</view>
		</view>
		<view class="">
			<uni-section title="费用信息" type="line"></uni-section>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">总运费：</text>
				</view>
				<view class="col">
					<input type="text" disabled placeholder="请输入手工单号" v-model="form.feidera" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">现金：</text>
				</view>
				<view class="col">
					<input type="text"  placeholder="请输入手工单号" v-model="form.feiderb" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">到付：</text>
				</view>
				<view class="col">
					<input type="text"  placeholder="请输入到付" v-model="form.feiderc" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">欠款：</text>
				</view>
				<view class="col">
					<input type="text"  placeholder="请输入欠款" v-model="form.feiderd" />
				</view>
			</view>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">代收款：</text>
				</view>
				<view class="col">
					<input type="text"  placeholder="请输入代收款" v-model="form.feidere" />
				</view>
			</view>
		</view>
		
		<view class="">
			<uni-section title="货物备注" type="line"></uni-section>
			<view class="row dxlisteetr pd">
				<view class="fz28 z6 jjhhxeer">
					<text class="cz">收货备注：</text>
				</view>
				<view class="col">
					<input type="text" disabled placeholder="请输入收货备注:" v-model="form.feiderf" />
				</view>
			</view>
		</view>
		<view class="pd mt40">
			<button type="primary" class="fz32">保存运单</button>
		</view>
		<uni-popup ref="showpopup" type="bottom">
			<dxarea @closew="closew"></dxarea>
		</uni-popup>
	</view>
</template>
<script>
	import dxarea from '@/components/dxarea'
	export default {
		data() {
			return {
				kxeer:1,//1起始 2 到达站
				form:{
					dsfsdfa:'',
					dsfsdfb:'',
					dsfsdfc:'',
					dsfsdfd:'独行工匠',
					dsfsdfe:'程国庆',
					dsfsdff:'13538190372',
					dsfsdfg:'',
					dsfsdfh:'',
					dsfsdfi:'',
					dsfsdfj:'',
					dsfsdfk:'',
					dsfsdfl:'',
					dsfsdfq:'',
					dsfsdfw:'',
					dfdfdda:'1',
					feidera:200,
					feiderb:'',
					feiderc:'',
					feiderd:'',
					feidere:'',
					feiderf:''
				},
				ssdea: -1,
				rangea:['无','卸货（不上楼）','卸货（含上楼）'],
				ssdeb: -1,
				rangeb:['回条','收条']
			}
		},
		components: {
			dxarea
		},
		methods: {
			ipoe (ider) {
				this.kxeer = ider
				this.$refs.showpopup.open()
			},
			closew (e) {
				if(this.kxeer == 1){
					this.form.dsfsdfb = e[0].name + '-' + e[1].name + '-'+e[2].name 
				}else{
					this.form.dsfsdfc = e[0].name + '-' + e[1].name + '-'+e[2].name 
				}
				this.$refs.showpopup.close()
			},
			cewrrtxe(e){
				this.form.dfdfdda= e.detail.value
			},
			sddfdsrta(e){
				this.ssdea = e.detail.value
			},
			sddfdsrtb(e){
				this.ssdeb = e.detail.value
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
			}
		},
		mounted() {}
	}
</script>
<style scoped>
.dxlisteetr{
		line-height: 80upx;
	}
	.dxlisteetr input{
		height: 80upx;
		font-size: 28upx;
	}
	.dsfdsrtxwe{
		padding-top: 15upx;
	}
	.jjhhxeer{
		width: 200upx;
	}
</style>
