<template>
	<div class="FooterWarp">
		<div class="foter1">
			<div class="footerchi1">
				<div class="footerLoggi icon lh"></div>
				<div class="lh lines"></div>
				<div class="texrtds lh">
					<p style="font-size: 20px;color: #FFFFFF; letter-spacing: 0.38px;margin-bottom: 20px;">电报联系群</p>
					<p style="font-size: 22px;color: #9883F1;letter-spacing: 0.42px;margin-bottom: 10px;">https://t.me/lsstar</p>
					<p style="font-size: 14px;color: #9CA8CA;letter-spacing: 0.27px;margin-bottom: 40px;">点击电报链接即可进群</p>
					<p style="font-size: 20px;color: #FFFFFF;letter-spacing: 0.38px;margin-bottom: 20px;">联系我们</p>
					<p style="font-size: 18px;color: #9CA8CA;letter-spacing: 0.63px;">官方邮箱： <a style="color: #9CA8CA;"  href="mailto:shxiao918@gmail.com">shxiao918@gmail.com</a>	</p>
				</div>	
				<div class="erwei lh">
					<p style="font-size: 20px;letter-spacing: 0.38px;color: #fff;margin-bottom: 20px;">微信联系</p>
					<p style="width: 155px;height: 148px;margin-bottom: 10px;"><img style="width: 100%;height: 100%;" src="/static/img/erwei.png"></p>
					<p style="font-size: 14px;color: #9CA8CA;letter-spacing: 1.37px;">扫码添加客服微信进群</p>
				</div>
			</div>
		</div>
		<div class="foter2">
			<div class="footerchi2" >
				<p class="lh" style="text-align: center;font-size: 14px;
color: #4C587D;
letter-spacing: 0;">Copyright © 2017 Cybereits - All Rights Reserved</p>
			</div>
		</div>

	</div>
</template>


<script>
	export default{

	}
</script>


<style scoped lang="scss">
	.FooterWarp{
		width: 100%;
		height: 416px;
		>.foter1{
			width: 100%;
			height: 296px;
			background: #3A4568;
			>.footerchi1{
				width: 1200px;
				height: 296px;
				margin: auto;
				overflow: hidden;
				padding-top: 48px;
			position: relative;

				>.footerLoggi{
					width: 160px;
					height: 160px;
					vertical-align: top;
					background-position: -47px -981px;
				}
				>.lines{
					width: 2px;
					vertical-align: top;
					margin: 0  160px;

					height: 200px;
					background-color: #4E5979;
				}
				>.texrtds{
					vertical-align: top;

					min-height:  256px;
					min-width: 300px;

				}
				>.erwei{	
					position: absolute;
					right: 0;

				}

			}
		}
		>.foter2{
			width: 100%;
			height: 120px;
			background: #1C243A;
			>.footerchi2{
				width: 1200px;
				height: 120px;
				margin: auto;
				line-height: 120px;
				text-align: center;

			}
		}
	}
</style>