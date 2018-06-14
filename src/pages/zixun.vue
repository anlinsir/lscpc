<template>
	<div class="Warp">
		<Head />
		<div class="TopWarp">
			<div class="top">
				<div class="lh icon topImg"></div>	
			</div>
		</div>

		<div class="MianWarp">
			<ul class="main">
				<li @click='todetalis(inex)' v-for='(item,inex) in 9'>
					<img src="/static/img/c720b5be30452c487117fb815b6998f22247c50f5e55-PAS2S2_fw658.jpeg">
					<p style="font-size: 20px;color: #1C243A;letter-spacing: 0.38px;margin-bottom: 14px;">数据块链（PreICO）</p>
					<p style="font-size: 14px;color: #9CA8CA;letter-spacing: 0.27px;margin-bottom: 20px;width: 100%;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">DataBlockChain.io是一个革命性的数据平台，它打乱了公司和个人收集优质数据的方式。我们的产品将</p>
					<p style="background: -webkit-gradient(linear, left top, right top, color-stop(20%, #9883F1), color-stop(80%, #FC77B1));    background: linear-gradient(to right, #9883F1 20%, #FC77B1 80%);    -webkit-background-clip: text;    color: transparent;    display: inline-block;   -webkit-transform: translateX(0px);    transform: translateX(0px); text-align: left;">查看更多 →</p>
				</li>
				

			</ul>
		</div>

		<Footer />
	</div>
</template>


<script>
	import Head from '../components/header'
	import Footer from '../components/footer'
	export default{
		components:{
			Head,Footer
		},
		methods:{
			todetalis(id){
				this.$router.push(`/zixunDetali/${id}`)
			}
		},
		mounted(){
			document.documentElement.scrollTop  = 0
		}
	}
</script>


<style scoped lang='scss'>
	.Warp{
		width: 100%;
		min-height: 100%;
		>.TopWarp{
			width: 100%;
			height: 412px;
			background-image: url('/static/img/indexbg.jpg');
			background-position: center center;
			>.top{
				width: 1200px;
				height: 412px;
				margin: auto;
				text-align: center;
				padding-top: 135px;
			background-image: url('/static/img/indexbg.jpg');
			background-position: center center;

				>.topImg{
					width: 247px;
    				height: 208px;
					background-position: -315px -938px;

				}

			}
		}
		>.MianWarp{
			width: 100%;
			min-height: 1000px;
			background-color: #fff;
			>.main{
				overflow: hidden;
				width: 1200px;
				min-height: 1000px;
				margin: auto;
				padding-top: 120px;
				>li:hover{
					transform:scale(1.02);
					cursor: pointer;
				}
				>li{
					width: 370px;	
					height: 427px;
					margin-right: 45px;
					margin-bottom: 60px;
					background-color: #fff;
					float: left;
					padding: 20px 20px 0 20px;
					box-shadow: 0 8px 22px 0 rgba(177, 191, 230, 0.4);
					transition: 0.5s all;
					>img{
						width: 330px;
						height: 223px;
						margin-bottom: 30px;
					}
				}
				>:nth-child(3n){
					margin: 0;
				}

			}
		}
	}

</style>