<template>
	<div :style="{background:color ? color : '',position: po ? po : '',boxShadow:bs ? bs : ''}" class="HeadWarp ">
		<div class="head">
			<div @click='toIndex' class="leftIMg">
				<span @click='toIndex' class="logo icon"></span>
			</div>

			<ul class="rightUl">
				<li   @mousemove='othercolor(index)' @mouseleave='othercolors(index)' :style="{color:tex ? navActive != index ? borderShow3==index ? '' :   tex : ''  :''}" v-on:click="search(index)" :class="navActive == index ? 'navActive' : '' "  v-for='(item,index) in navList'>{{item}}
					 <transition name="slide-fade"><div v-show='navActive == index || borderShow3 == index' class="border"></div></transition>
				</li>
			</ul>
		</div>
	</div>
</template>


<script>
	export default {
		props:{
			color:{
				type:String
			},
			po:{
				type:String
			},
			tex:{
				type:String
			},
			bs:{
				type:String

			}
		},
		data(){
			return({
				navList:['简介','项目简介','应用场景','资讯','路线图','团队'],
				navActive:0,
				borderShow:0,
				borderShow3:-1,
				touchGray:-1
			})
		},
		methods:{
			search(id){
				this.navActive = id
				if(id == 0){
					if(this.$router.name = 'index'){
							document.documentElement.scrollTop  = 0
							return

					}
					this.$router.push('/index')

				}
				if(id == 1){
					document.documentElement.scrollTop  = 980
				}
				if(id == 2){
					document.documentElement.scrollTop  = 2299

				}
				if(id == 3){
					document.documentElement.scrollTop  = 4600

					// this.$router.push('/zixun')
				}
				if(id == 4){
					document.documentElement.scrollTop  = 5499

				}
				if(id == 5){
					document.documentElement.scrollTop  = 6364

				}
			},
			toIndex(){
				this.$router.push('/index')
			},
			othercolor(id){
				this.borderShow3 = id 
			},
			othercolors(){
				this.borderShow3 = -1 

			}
		},
		mounted(){

			if(this.$route.name == 'zixun'){
				this.navActive = 3
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
		z-index:8;
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
				cursor: pointer;
				>.logo{
					display:inline-block;
					width: 151px;
    				height: 49px;
					background-position: -89px -77px;
				}

			}
			>.rightUl{
				width: 550px;
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
				>li:hover{
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