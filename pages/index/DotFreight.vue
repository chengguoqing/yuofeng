<template>
	<view class="dxform">
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				<text class="cz">起始站：</text>
			</view>
			<view class="col " @tap="ipoe(1)">
				<text class="z9 fz30 " v-if="!form.dsfsdfa">请选择</text>
				<text class="z3 fz30 " v-else>{{form.dsfsdfa}}</text>
			</view>
			<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				品名：
			</view>
			<view class="col">
				<input type="text" value="" placeholder="请输入品名" class="fz30" v-model="form.dsfsdfb" />
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
				重量：
			</view>
			<view class="col">
				<input type="text" value="" placeholder="请输入重量" class="fz30" v-model="form.dsfsdfd" />
			</view>
		</view>
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				体积：
			</view>
			<view class="col">
				<input type="text" value="" placeholder="请输入体积" class="fz30" v-model="form.dsfsdfd" />
			</view>
		</view>
			<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				配送方式：
			</view>
			<view class="col fz30">
				<radio-group v-model="form.dsfsdff">
					<label class="radio">
						<radio value="1" color="#00a0e9" style="transform:scale(0.8)" /><text>自提</text>
					</label>
					<label class="radio ml50">
						<radio value="2" color="#00a0e9" style="transform:scale(0.8)" /><text>送货</text>
					</label>
				</radio-group>
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
		<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				收货地址：
			</view>
			<view class="col" @tap="ipoe(2)">
				<text class="z9 fz30" v-if="!form.dsfsdfh">请选择</text>
				<text class="z3 fz30" v-else>{{form.dsfsdfh}}</text>
			</view>
			<image src="../../static/img/right.png" mode="widthFix" class="rightydeer"></image>
		</view>
			<view class="row dxlisteetr pd">
			<view class="fz30 z6 jjhhxeer">
				详细地址：
			</view>
			<view class="col pt25">
				<textarea value="" v-model="form.dsfsdi" class="w100 fz30" placeholder="请输入详细地址" />
				</view>
		</view>
		
		<view class="pd mt40">
			<button type="primary" class="fz32">查询</button>
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
				form:{
					dsfsdfa:'',
					dsfsdfb:'',
					dsfsdfc:'',
					dsfsdfd:'',
					dsfsdfe:'',
					dsfsdff:'',
					dsfsdfg:'',
					dsfsdfh:'',
					dsfsdfi:''
				},
				index:-1,
				kxeer:1,//1起始 2 收货地址
				array: ['卸货（不上楼）', '卸货（含上楼）']
			}
		},
		components: {
			dxarea
		},
		methods: {
			hggdeet(e){
				this.index = e.target.value
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
</style>
