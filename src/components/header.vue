<template>
	<div class="HeadWarp">
		<div class="head">
			<div class="leftIMg">
				<span class="logo icon"></span>
			</div>

			<ul class="rightUl">
				<li v-on:click="search(index)" :class="navActive == index ? 'navActive' : '' "  v-for='(item,index) in navList'>{{item}}
					 <transition name="slide-fade"><div v-show='navActive == index' class="border"></div></transition>
				</li>
			</ul>
		</div>
	</div>
</template>


<script>
	export default {
		data(){
			return({
				navList:['简介','项目简介','应用场景','资讯','团队'],
				navActive:0,
				borderShow:0
			})
		},
		methods:{
			search(id){
				this.navActive = id
			}
		}
	}
</script>


<style scoped lang="scss">
	.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(50px);
}

	.HeadWarp{
		width: 100%;
		height: 82px;
		position: absolute;
		top: 0;
		z-index: 4;
		color: #fff;
		>.head{
			width: 1200px;
			height: 82px;
			margin: auto;
			>.leftIMg{
				float: left;
				width: 148.5px;
				height:46px;
				margin: 18px;
				>.logo{
					display:inline-block;
					width: 151px;
    				height: 49px;
					background-position: -89px -77px;
				}

			}
			>.rightUl{
				width: 431px;
				height: 82px;
				float: right;
				font-size: 15px;
				letter-spacing: 0.3px;
				color: #FFFFFF;
				font-family: PingFangSC-Regular;
				>.navActive{
					background: linear-gradient(to right,  #9883F1 5%, #FC77B1 95%);
			        -webkit-background-clip: text;
			        color: transparent;
			     
				}
				>li:not(:nth-last-child(1)){
					margin-right: 50px;
				}
				>li{
					height: 82px;
					line-height: 82px;
					float: left;
					position: relative;
					cursor: pointer;
					>.border{
						position: absolute;
						bottom: 0;
						width: 100%;
						height: 2px;
					background: linear-gradient( #9883F1 20%, #FC77B1 80%);

					}
				}
			}
		}
	}

</style>