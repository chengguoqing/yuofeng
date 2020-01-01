<template>
    <view>
		<view class="pd pt20 pm20 bgff">
			<textarea v-model="messgder" placeholder="点击这里输入内容" class="fz30 w100 br pt20 pd" />
			<view class=" pt40">
				<view class="sdfdfsderr pr10">
					<button class="fz30" @click="qingkong">清空</button>
				</view>
				<view class="sdfdfsderr pl10">
					<button type="primary" class="fz30">提交</button>
				</view>
				<view class="qc"></view>
			</view>
		</view>
    </view>
</template>
<script>
export default {
    data () {
        return {
			messgder:''
		}
    },
    components: {},
    methods: {
		qingkong(){
			this.messgder = ''
		}
	},
    mounted () {}
}
</script>
<style lang='scss' scoped>

</style>
