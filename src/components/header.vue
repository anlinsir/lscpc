<template>
	<div :id='id' :style="{background:color ? color : '',position: po ? po : '',boxShadow:bs ? bs : ''}" class="HeadWarp ">
		<div class="head">
			<div @click='toIndex' class="leftIMg">
				<span @click='toIndex' class="logo icon"></span>
			</div>
<!-- tex ? navActive != index ? borderShow3==index ? '' :   tex : ''  :'' -->
			<ul id='uull' @mouseenter='chengcoll' @mousemove='chengcoll'  @mouseleave='nochanj' class="rightUl">
				<li   @mousemove='othercolor(index,$event)' @mouseleave='othercolors(index,$event)' :style="{color:tex ? navActive != index ? borderShow3==index ? '' :   tex : ''  :''}" v-on:click="search(index)" :class="navActive == index  ? 'navActive' : '' "  v-for='(item,index) in navList'>{{item}}
					 <div v-show='navActive == index || borderShow3 == index' class="border"></div>
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

			},
			id:{
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
				if(this.$route.name == 'index'){
					if(id == 0){
						if(this.$router.name = 'index'){
								document.documentElement.scrollTop  = 0
								return

						}
						this.$router.push('/index')

					}
					if(id == 1){
						document.documentElement.scrollTop  = document.documentElement.offsetHeight
				this.navActive = id

					}
					if(id == 2){
						document.documentElement.scrollTop  = document.documentElement.offsetHeight + 828+547 
				this.navActive = id


					}
					if(id == 3){
						document.documentElement.scrollTop  = document.documentElement.offsetHeight*3  +250+ 828 +547
				this.navActive = id


						// this.$router.push('/zixun')
					}
					if(id == 4){
						document.documentElement.scrollTop  = document.documentElement.offsetHeight*4 +250 + 828 +547
				this.navActive = id


					}
					if(id == 5){
						document.documentElement.scrollTop  = document.documentElement.offsetHeight*5 +250 + 828 +547
				this.navActive = id


					}
				}else if(this.$route.name != 'index'){
					this.$router.push('/index')
				}
			},
			toIndex(){
				this.$router.push('/index')
			},
			chengcoll(e){				
				for(let i of uull[0].children){
					i.style.color = '#9CA8CA'
				}
				for(let i of uull[1].children){
					i.style.color = '#9CA8CA'
				}
				e.target.style.color = ''
				document.getElementsByClassName('navActive')[0].style.color = ''
				document.getElementsByClassName('navActive')[1].style.color = ''
			},
			nochanj(e){
				for(let i of  uull[0].children){
					i.style.color = '#fff'
					document.getElementsByClassName('navActive')[0].style.color = ''

					if(this.$route.name == 'index'){
						document.getElementsByClassName('navActive')[1].style.color = ''
						document.getElementsByClassName('navActive')[0].style.color = ''
					}
				

				}
				for(let i of  uull[1].children){
					i.style.color = '#000'
					document.getElementsByClassName('navActive')[0].style.color = ''

					if(this.$route.name == 'index'){
						document.getElementsByClassName('navActive')[1].style.color = ''
						document.getElementsByClassName('navActive')[0].style.color = ''
					}
				

				}

			},
			othercolor(id,e){
				this.borderShow3 = id
				console.log(e.target.parentNode.children)
				for(let i of e.target.parentNode.children){
					i.style.color = '#9CA8CA'
				}
				e.target.style.color = ''
				document.getElementsByClassName('navActive')[0].style.color = ''
				document.getElementsByClassName('navActive')[1].style.color = ''


				this.borderShow3 = id 
			},
			othercolors(id,e){
				this.borderShow3 = -1 
				e.target.style.color = ''

				for(let i of e.target.parentNode.children){
					i.style.color = this.tex ? this.tex : ''
					document.getElementsByClassName('navActive')[0].style.color = ''

					if(this.$route.name == 'index'){
						document.getElementsByClassName('navActive')[1].style.color = ''
						document.getElementsByClassName('navActive')[0].style.color = ''
					}
				

				}

				

			}
		},
		mounted(){
			if(this.$route.name != 'index'){
				this.navActive = 3
			}
			setInterval(()=>{
				if(this.$route.name == 'index'){
					if(document.documentElement.scrollTop  <= document.documentElement.offsetHeight){
					this.navActive = 0
					document.getElementsByClassName('navActive')[0].style.color = ''


				}
				if(document.documentElement.scrollTop  >= document.documentElement.offsetHeight){
					this.navActive = 1
				}
				if(document.documentElement.scrollTop  >= document.documentElement.offsetHeight + 828+547 ){
					this.navActive = 2

				}
				if(document.documentElement.scrollTop  >= document.documentElement.offsetHeight*3  +250+ 828 +547 ){
					this.navActive = 3

				}
					if(document.documentElement.scrollTop  >= document.documentElement.offsetHeight*4 +250 + 828 +547 ){
					this.navActive =4

				}
				if(document.documentElement.scrollTop  >= document.documentElement.offsetHeight*5 +250 + 828 +547){
					this.navActive =5
				}
				}
			},100)

			

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
				>.navActive:after{
					  content: ' ';
					    position: absolute;
					    z-index: 2;
					    bottom: 0;
					    left: 50%;
					    display: block;
					    width: 100%;
					    height: 1px;
					    transform: translate(-50%); height: 2px;
   					 animation: ad_width .1s linear forwards;
   					 background: linear-gradient(to right, #9883F1 5%, #FC77B1 95%);
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
					
				}

				>li:after{
					    content: ' ';
					    position: absolute;
					    z-index: 2;
					    bottom: 0;
					    left: 50%;
					    display: block;
					    width: 100%;
					    height: 1px;
					    transform: translate(-50%);
				}
				>li:hover:after{
					 height: 2px;
   					 animation: ad_width .2s linear forwards;
   					 background: linear-gradient(to right, #9883F1 5%, #FC77B1 95%);
				}
				@keyframes ad_width {
				    from {
				        width: 0
				    }

				    to {
				         width: 100%;
				    }
				}
			}
		}
	}

</style>