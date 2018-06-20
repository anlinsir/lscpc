<template>
	<div class="Warp">
		<Head  />

		<Head  :id='heade11' v-show='ernav' :color='color' :po='po'  :tex='tex' :bs='bs'/>

		<div class="indexWarp">
			<vue-particles
		        color="#dedede"
		        :particleOpacity="0.7"
		        :particlesNumber="40"
		        shapeType="circle"
		        :particleSize="4"
		        linesColor="#dedede"
		        :linesWidth="1"
		        :lineLinked="true"
		        :lineOpacity="0.4"
		        :linesDistance="150"
		       	:moveSpeed='moveSpeed'
		        :hoverEffect="true"
		        hoverMode="repulsepp"
		        :clickEffect="true"
		        clickMode="bubble"
		        class='dsds4'
      >
      </vue-particles>
			
				<span style="width: 77px;
    height: 109px;" class="logoImg icon" ></span><br>
				<span style="    background-position: -235px -192px;" class="logoText icon" ></span><br>
				<span class="text">去中心化的二手交易区块链创新生态系统</span><br>
				<button @click='download' class="ibtn image down"></button>
				<button @click='baipi' class="ibtn image  book"></button>	


			<transition
			name="custom-classes-transition"
    enter-active-class="animated rollIn"
    leave-active-class="animated rollOut">
					<div v-if='alert' class="alert">
							<span  @click='co' style="position: absolute;right: 20px;top:20px;"><img src="/static/img/close.png"></span>
							<p class="lh" style="font-size: 20px;color: #1C243A;letter-spacing: 0;margin-top: 50px;">扫描二维码 下载APP</p><br>
							<p class="lh" style="width: 221px;height: 228px;margin-top:20px;"><img style="width: 100%;height: 100%;" src="http://52.80.194.182:8886/img/down-qrcode.png?v=2"></p>
						</div>
			</transition>
			
		</div>

		<div class="erWarp">
			<div class="er">
				<div class="title icon"></div>

				<ul>
					<li v-for='(item,index) in introduceList'>
						<p class="icon" :class="'img' + index"></p>
						<p class="title">{{item.title}}</p>
						<p class="text">{{item.text}}</p>
					</li>
				</ul>
			</div>
		</div>

		<div class="wasWarp">
			<div class="was">
				<span class="title lh icon"></span>
				<span class="more lh ">炉石星球是由美国硅谷开发团队针对全球去中心化二手交易区块链生态系统平台，我们为二手行业提供商业级的区块链基础设施服务，在打造区块链基础平台的同时，我们折受构建高扩展性的应用业务支撑系统。<br />炉石星球将现实的二手交易世界映射到区块链上，通过跨平台、跨企业、跨行业、跨国界的互联协作<br />创造全新的商业模式，为各方参与方提供可信的区块链服务。</span>
			</div>
		</div>

		<div class="proWarp">
			<!-- width: 70%;
    height: 80%;
    background-size: 150%;
    background-position: -190px -76px; -->
			<div :style="{paddingTop:SSWidth[5]?SSWidth[5]:''}" class="pro">
				<span :style="{marginBottom:SSWidth[5]?SSWidth[5]:''}" class="lh icon title"></span>
				<span :style="{width:SSWidth[0]?SSWidth[0]:'',height:SSWidth[1]?SSWidth[1]:'',backgroundSize:SSWidth[2]?SSWidth[2]:'',backgroundPosition:SSWidth[3]?SSWidth[3]:'' }" class="lh image IIMg"></span>
				<span :style="{bottom:SSWidth[4]?SSWidth[4]:''}" class="lh line"></span>
			</div>
		</div>

		<div class="appWarp">
			<div class="str" ></div>
			<div class="san"></div>	
			<div class="app">
				<div :style="{width:SSApp[0]?SSApp[0]:'',height:SSApp[1]?SSApp[1]:'',transform:SSApp[2]?SSApp[2]:''}" class="bpp lh">
					<p :style="{marginTop:SSApp[3]?SSApp[3]:'',marginBottom:SSApp[4]?SSApp[4]:''}" class="lh title icon"></p>
					<ul>
						<li :style="{width:SSApp[5]?SSApp[5]:'',height:SSApp[6]?SSApp[6]:''}" v-for='(item,index) in bpp'>
							<p class="lh image" :class=" 'ulImg'+ index"></p>
							<span style="white-space: nowrap;text-align: center;">{{item.text}}</span>
						</li>
					</ul>
					
				</div>	
			</div>		
					<div class="str"></div>	
		</div>

		<div class="ecologyWarp">
			<div class="ecology">
				<p class="lh icon title"></p><br>	
				<p class="lh more">鼓励全球区块链爱好者和开发者投入到炉石星球生态建设中来，基于炉石星球开发更多优秀的应用及场景方案，所有用户均可在炉石星球提出二手交易细分场景的产品，第三方公司均可与炉石星球进行数据链的深度合作，二手商家可在炉石星球发布产品并使用我们提供的区块链底层技术服务。</p>
			</div>
		</div>

		<div class="informationWarp">
			<div class="information">
				<p :style="{marginBottom:SSInfo[1]?SSInfo[1]: '' }" class="lh title icon"></p>
				<ul>
					<li style="box-sizing: content-box;" @click='todeta(id)' v-for='(ii,id) in 3'>
						<img src="/static/img/d81bca446095aa380f3b38c611f8e839688e5ca91429d-BGS6ii_fw658.jpeg">
						<p class="titles">数据块链（PreICO）</p>
						<p class="deta">DataBlockChain.io是一个革命性的数据平台，它打乱了公司和个人收集优质数据的方式。我们的产品将</p>
						<p :style="{backgroundImage:mozColor? mozColor :'',transform:mozTrs ? mozTrs : 'translateX(-123px)'}" class="moew">查看更多 →</p>
					</li>
					
				</ul>
				<button @click='tozixun'>更多资讯</button>
			</div>
		</div>

		<div class="linMapWarp">
			<div :class="'side' +f" class="sides image" v-for='(i,f) in 3'></div>


			<div :style="{paddingTop:SSMap[0]?SSMap[0]:''}" class="map">
				<p :style="{marginBottom:SSMap[1]?SSMap[1]:''}" class="lh icon title">	</p><br>	
				<div class="img image lh">
					<div :class="'texts' + index" class="tesrs" v-for='(item,index) in line'>  
						<p class="title">{{item.title}}</p>
						<p class="detali">{{item.detali}}</p>
					</div>
				</div>
			</div>		
		</div>


		<div class="endWarp">
			<div class="end">
				<div class="quotes image"></div>

				<div :style="{left:SSInfo[0]?SSInfo[0]:''}" class="info">
					<p class="icon" style="background-position: -1963px -753px;"></p>
					<p class="terx">炉石星球项目团队由美国硅谷开发团队组成。运营团队主要由二手交易领域高管、专注二手市场领域的投资人、 区块链资深专家以及二手市场行业资深程序员构成，核心团队成员在二手行业有超过十年以上经验和积累。并在美国运营有成熟的二手线上交易平台，并拥有大量用户数量。</p>
				</div>

				<ul class="chnegyuan">
					<transition-group 
			name="custom-classes-transition"
    :enter-active-class="sss"
    :leave-active-class="sss"
    >
					<li  v-if="infoac == id " @mousedown='add' @mousemove='add' @mouseup='add'  :key='id'   v-for='(ii,id) in proson'>
						<p style="margin-bottom: 35px;">
							<span style="font-size: 48px;color: #9883F1;letter-spacing: 0;">{{ii.name + id}}</span><br>
							<span style="font-size: 16px;color: #1C243A;letter-spacing: 0;">{{ii.p}}</span>
							<img style="float: right;width: 100px;height: 100px;border-radius: 50%;border:1px solid;transform: translateY(-60px);background-color: #334;" src="">
						</p>
						<span style="font-size: 16px;color: #9CA8CA;letter-spacing: 0;line-height: 30px;margin-bottom: 1%" v-for="(i,d) in ii.span">{{i}}<br></span>
					</li>
				</transition-group>
					<!-- <li class="sss" style="width:50%;height: 542px;position: absolute;right: 0;background:linear-gradient(-135deg, #3D486B 0%, #262F49 100%);	"></li>		 -->
					<transition-group 
			name="custom-classes-transition"
   :enter-active-class="sss"
    :leave-active-class="sss"> 
					<li  v-if="Number(infoac)+1 == ids "  :key='ids'  style="margin-left: 55%;"  @mousedown='add' @mousemove='add' @mouseup='add' v-for='(ii,ids) in proson'>
						<p style="margin-bottom: 35px;">
							<span style="font-size: 48px;color: #9883F1;letter-spacing: 0;">{{ii.name + ids}}</span><br>
							<span style="font-size: 16px;color: #1C243A;letter-spacing: 0;">{{ii.p}}</span>
							<img style="float: right;width: 100px;height: 100px;border-radius: 50%;border:1px solid;transform: translateY(-60px);background-color: #334;" src="">
						</p>
						<span style="font-size: 16px;color: #9CA8CA;letter-spacing: 0;line-height: 30px;margin-bottom: 1%" v-for="(i,d) in ii.span">{{i}}<br></span>
					</li>
				</transition-group>


				</ul>

				<div class="pages">
					<div class=" icon" :class="infoac == 0 ? 'leftss' : 'lefts'" @click='sub'></div>

					<div class=" icon" :class="infoac >= 2 ? 'rightss' : 'rights'" @click='addss' ></div>

				</div>
					

			</div>
		</div>

		<Footer />
	</div>
</template>

<script>
	import Head from '../components/header'
	import Footer from '../components/footer'

		var alert = null;

	export default{
		components:{
			Head,
			Footer
		},
		data(){
			return({
				SSInfo:[],
				SSMap:[],
				SSApp:[],
				SSWidth:[],
				mozTrs:'',
				mozColor:'',
				moveSpeed:8,
				sss:'animated bounceInLeft',
				introduceList:[
						{
							title:'二手交易巨大的市场空间',
							text:'二手交易按分类可分为大众商品与个人闲置。大众商品如二手车、二手房、二手3C类等物品。每年各行业的二手交易数据都成几何式增加，互联网巨头公司也纷纷涉足二手交易，市场空间巨大。'
						},
						{
							title:'二手市场面临的诸多问题',
							text:'多层级中介，增加了诸多无效成本，不透明的产品质量溯源过程，导致很多用户对二手物品的质量问题堪忧，产品鉴定和第三方托管极度缺乏公信力，产品售后服务方面无法有效为用户提供应用的保障。'
						},
						{
							title:'区块链为二手交易带来的革新',
							text:"区块链具有公共可查询、不可篡改、不可伪造、质量溯源等特点。区块链的智能合约与二手市场天然的契合，区块链技术必然成为二手市场下一个发展阶段的底层技术。"
						}
					],
				bpp:[
					{
						text:'二手交易市场',
					},
					{
						text:'链上透明鉴定',
					},
					{
						text:'智能合约',
					},
					{
						text:'链上质量溯源',
					}
				],
				line:[
					{
						title:'第一阶段（2015.5-2017.9）',
						detali:'团队进行了深入的行业调研，走访了数十个国家和地区，拜访了数百家二手商家和科技公司，并在全球发布了数个非常有影响力的行业报告，在二手行业上下又进行了投资。 区块链和二手行业结合进入提案和探讨。'
					},
					{
						title:'第二阶段（2017.9-2017.12）',
						detali:'团队加强，正式立项炉石星球项目，启动基石投资和代币互换计划，并正式启动炉石星球主网项目开发。'
					},
					{
						title:'第三阶段（2018.1-2018.8）',
						detali:'基于以太坊完成第一个生态应用炉石星球，全球用户都可以在区块链上提交自己的二手物品，并可以使用代币进行产品购买，第一个落地项目 炉石星球主网同步开发启动。'
					},
					{
						title:'第四阶段（2018.9-2019）',
						detali:'炉石星球主网进入生产环节， 落地区块链商家管理系统 和 二手鉴定溯源系统，选择合适方案进行代币互换和互通。'
					}
				],
				proson:[
					{
						name:'杨轩',
						p:'中国区负责人',
						img:'#',
						span:[
							'曲速资本创始合伙人' ,
							'浙报集团梦工场创投' ,
							'董事总经理' ,
							'全国信息学奥赛一等奖'
						]
					},
					{
						name:'杨轩',
						p:'中国区负责人',
						img:'#',
						span:[
							'曲速资本创始合伙人' ,
							'浙报集团梦工场创投' ,
							'董事总经理' ,
							'全国信息学奥赛一等奖'
						]
					},
					{
						name:'杨轩',
						p:'中国区负责人',
						img:'#',
						span:[
							'曲速资本创始合伙人' ,
							'浙报集团梦工场创投' ,
							'董事总经理' ,
							'全国信息学奥赛一等奖'
						]
					},
					{
						name:'杨轩',
						p:'中国区负责人',
						img:'#',
						span:[
							'曲速资本创始合伙人' ,
							'浙报集团梦工场创投' ,
							'董事总经理' ,
							'全国信息学奥赛一等奖'
						]
					},
				],
				infoac:0,
				infoacs:1,
				color:'#fff',
				po:'fixed',
				tex:'#000',
				ernav:false,
				bs:'rgba(177, 191, 230) 0px -3px 22px 0px',
				alert:false,
				flag:null,
				x:null,
				y:null,
				lefts:'leftss',
				rights:'rights',
				heade11:'heade11',

				
				})
		},
		methods:{
			download(){
				this.alert = true
				alert = true
			},
			baipi(){
				window.alert('编写中，即将开放下载')
			},
			co(){
				this.alert = 0

			},
			tozixun(){
				this.$router.push('/zixun')
			},
			todeta(id){
				this.$router.push(`/zixunDetali/${id}`)
			},
			add(e){
				console.log(e.type)
				switch (e.type){
					case 'mousedown':
					this.flag = 0
						this.x = e.offsetX
							
						break;
					case 'mousemove':
					this.flag = 1
						break;
					case 'mouseup':
							console.log('snj')
							this.y = e.offsetX
							console.log(this.x, this.y)
							if(this.flag == 1){
								if(this.x > this.y && this.x - this.y >=80){
									console.log('sub')
									if(this.infoac == 0){
											this.infoac = 0
											return

									}
										this.infoac-= 2
									return
								}
								if(this.x<this.y && this.y - this.x >=80){
									console.log('add')
									if(this.infoac>=2){
										this.infoac = 2
											return
									}
									this.infoac += 2
									return
								}
								if(this.x == this.y){
									return
								}

							}else{
								console.log('no')
							}
						break;
						
						
				}
				return
				if(this.infoac>=2){
					this.infoac = 2
					return
				}
				this.infoac += 2

			},
			addss(){
				this.sss = 'animated bounceInLeft'
				if(this.infoac>=2){
					this.infoac = 2
					return
				}
				this.infoac += 2
			},
			sub(){
				this.sss = 'animated bounceInRight'
				if(this.infoac == 0){
						this.infoac = 0
						return

				}
				this.infoac-= 2

			}
		},
		mounted(){
			if(document.documentElement.offsetWidth < 1400){
				
				this.SSWidth[0] = '70%'
				this.SSWidth[1] = '80%'
				this.SSWidth[2] = '150%'
				this.SSWidth[3] = '-220px -76px'
				this.SSWidth[4] = '-8%'
				this.SSWidth[5] = '5%'
				this.SSApp[0] = '1200px'
				this.SSApp[1] = '400px'
				this.SSApp[2] = 'translateX(7%)'
				this.SSApp[3] = '5%'
				this.SSApp[4] = '2%'
				this.SSApp[5] = '100px'
				this.SSApp[6] = '100px'
				this.SSMap[0] = '5%'
				this.SSMap[1] = '3%'

				this.SSInfo[0] = '5%'
				this.SSInfo[1] = '3%'









				
				// this.bppS = '100%'
				// this.infoUls = '-4%'
				// this.inilli[0] = '30%'
				// this.inilli[1] = '80%'
				// this.bpptiS = '3%'
				// this.strSb = '5%'
				// this.linS = '-10%'
				// this.EvS = '10%'
				// this.chS[0] = '50%'
				// this.chS[1] = '50%'
				// this.chS[2] = '10px'
				// this.chS[3] = '10px'
			}
			if(navigator.userAgent.indexOf('Firefox') != -1){
				this.mozColor = '-webkit-gradient(linear, 0 0, 0 bottom, from(rgba(152, 131, 241, 1)), to(rgba(252,119,177, 1)))'
				this.mozTrs = 'translateX(-85px)'
			}
			window.onscroll = (event)=> {
				 var event = event ? event : window.event;
   				console.log(event);
				event.returnValue = false 
				this.alert = 0
				
				if(document.documentElement.scrollTop >=document.documentElement.offsetHeight){
					this.ernav = true
					console.log('dsdsds')
					heade11.style.display = 'block'
				}else{
					this.ernav = false
					heade11.style.display = 'none'


				}
			}
		}
	}
</script>


<style scoped lang="scss">
.dsds4{
	position: absolute;
	top:0;
	width: 100%;
	height: 100%;
}
	.Warp{
		width: 100%;
		height: 100%;
		position: relative;
		>.indexWarp{
			width: 100%;
			height: 100%;			
			background-color: #000;
			background-image: url('/static/img/indexbg.jpg');
			background-position: center center; 
				padding-top: 15%;		

			
				position: relative;
				z-index: 3;
				text-align: center;
				color: #fff;
				>.alert{
					position: absolute;top: 130px;
					bottom: 0;
					left: 0;
					text-align: center;
					right: 0;
					margin: auto;
					width: 572px;
					z-index: 10;
					height: 366px;
					background-color: #fff;
				}
				>.logoImg{
				    width: 77px;
					height: 109px;
					margin-bottom: 7px;
					background-position: -372px -78px;
				}
				>.logoText{
				    width: 205px;
				    height: 53.2px;
				    margin-bottom: 20px;
				    background-position: -307px -190px;

				}
				>.text{
					font-size: 34px;
					letter-spacing: 1px;
					margin-bottom: 100px;
					display: inline-block;
				}
				>.ibtn{
					width: 245px;
					height: 60px;
					border-radius: 100px;
					outline: none;
					border:none;
					cursor: pointer;
				}	
				>.down{
					background-position:1063px  -2434px;
					margin-right: 100px;
					position: relative;
					z-index: 6;					
				}
				>.book{
					background-position:722px  -2434px;		
					position: relative;
					z-index: 6;			
				}
				>.icon{
					display:inline-block;
					width: 	336px;
					height:67px;
				}
			
		}
		>.erWarp{
			width: 100%;
			height: 828px;	
			background-color: #fff;
			position: relative;
			z-index: 5;
			>.er{
				width: 1200px;
				height: 828px;
				padding-top: 160px;			
				margin: auto;
				text-align: center;
				>.title{
					width: 392px;
					height: 67px;
					display: inline-block;
					background-position: -41px -579px;
					margin-bottom: 112px;
				}
				>ul{
					width: 100%;
					height: 328PX;
					>li:not(:nth-last-child(1)){
						margin-right: 120px;
					}
					>li{
						width: 318px;
						float: left;
						text-align: left;
						>.title{
							font-size: 18px;
							color: #1C243A;
							letter-spacing: 0.3px;
							margin-bottom: 18px;
						}
						>.text{
							width: 323px;
							font-size: 14px;
							color: #9CA8CA;
							line-height: 30px;
						}
						>.icon{
							width: 88px;
							height: 88px;
							border-radius: 50%;
							margin-bottom: 50px;
							box-shadow: 0 8px 22px 0 rgba(177,191,230,0.40);
						}
						>.img0{
							background-position: -655px -124px;
						}
						>.img1{
							background-position: -814px -124px;
						}
						>.img2{
							background-position: -960px -124px;
						}
					}
				}

			}
		}
		>.wasWarp{
			width: 100%;
			height: 547px;	
			background-color: #F4F6FA;
			position: relative;
			z-index: 5;
			>.was{
				width: 1200px;
				height: 547px;
				margin: auto;
				text-align: center;
				padding-top: 160px;
				>.title{
					width: 343px;
					height: 67px;
					background-position: -507px -579px;
					margin-bottom: 40px;
				}
				>.more{
					width: 900px;
					height: 120px;
					text-align: center;
					font-size: 16px;
					color: #3A4568;
					letter-spacing: 0.3px;
					text-align: center;
					line-height: 30px;
				}
			}
		}
		>.proWarp{
			width: 100%;
			height: 100%;	
			background-color: #F4F6FA;
			position: relative;
			z-index: 5;
			background-image: linear-gradient(-179deg, #3D486B 0%, #262F49 100%);
			>.pro{
				width: 1200px;
				height: 100%;
				margin: auto;
				padding-top: 100px;
				text-align: center;
				>.title{
					width: 441px;
					height: 67px;
					background-position: -939px -579px;
					margin-bottom: 100px;
				}
				>.IIMg{
					
				    width: 800px;
				    height: 610px;
					background-size: 188%;

	
					
					background-position: -348px  -98px;
				}
				>.line{
					width: 3px;
					height: 58px;
					border-left:2px dashed #9883F1;
					position: absolute;
					left: 50%;
					bottom: 3%;
				}
			}
		}
		>.appWarp{
			width: 100%;
			height: 100%;	
			position: relative;		

			>.str{
					width: 100%;
					height: 300px;
					background-color: #262F49;
				}
			>.san{
				width: 100%;
				height:600px;

				 background: linear-gradient(-9deg, transparent 374px, #262F49 0);
			}
			>.app{
				width: 1200px;				
				margin: auto;
				text-align: center;
				position: absolute;
				top: 100px;
				left: -12%;
				right: 0;
				bottom: 0;
				>.bpp{	
					width: 1400px;
					height: 620px;
					box-shadow:0px 7px 39px -4px rgba(177, 191, 230, 0.4);
					background-color: #fff;
					>.title{
						width: 440px;
						height: 67px;
						margin-bottom: 8%;
						background-position: -41px -753px;
						margin-top: 120px;
					}
					>ul{
						width: 100%;
						height: 213px;
						padding: 0 100px;
						>li:not(:nth-last-child(1)){
							margin-right: 180px;
						}
						>li{
							width: 150px;
							height: 213px;
							float: left;
							font-size: 24px;
							color: #3A4568;
							letter-spacing: 0.46px;
							text-align: center;
							>.image{
								width: 150px;
								height: 150px;
								margin-bottom: 30px;

							}
							>.ulImg0{
							    background-position: -361px -1081px;
							}
							>.ulImg1{
							    background-position: -711px -1081px;
							}
							>.ulImg2{
							    background-position: -1061px -1081px;
							}
							>.ulImg3{
							    background-position: -1411px  -1081px;
							}

						}
					}


				}
				
			}
			>.str{
				width:2px;
				height:58px;
				border-left: 2px dashed  #9883F1;
				position: absolute;
				bottom:8%;
				background-color: 	transparent;
				left: 	50%;
			}
		}
		>.ecologyWarp{
			width: 100%;
			height: 300px;	
			position: relative;		
			>.ecology{
				width: 	1200px;
				height: 300px;
				margin: auto;
				text-align: center;
				>.title{
					width: 	343px;
					margin-bottom: 40px;
					height: 67px;
					background-position: -559px -753px;
				}
				>.more{
					width: 	848px;
					height: 120px;
					font-size: 16px;
					color: #3A4568;
					letter-spacing: 0.3px;
					text-align: center;
					line-height: 30px;
				}
			}
		}
		>.informationWarp{
			width: 	100%;
			background: #F4F6FA;
			height: 100%;
			>.information{
				width: 	1200px;
				height: 100%;
				margin: auto;
				padding-top: 5%;
				text-align: center;
				>.title{
					width: 	196px;
					height: 67px;
					background-position: -1004px -753px;
					margin-bottom: 7%;
				}
				>ul{
					width: 	100%;
					display: flex;
					justify-content: space-between;
					height: 53%;
					margin-bottom: 5%;
					>li:hover{
						transform: scale(1.04);
					}
					>li{
						border-radius: 8px;
						padding-bottom: 5px;
						width: 	30%;
						height: 100%;
						cursor: pointer;
						background-color: #fff;
						padding-top: 20px;
						transition: .5s all;
						box-shadow: 0 8px 22px 0 rgba(177, 191, 230, 0.4);

						>img{
							border-radius: 8px;
							width: 90%;
							height: 40%;
							/*width: 	330px;
							height: 223px;*/
							margin-bottom: 5%;
						}
						>.titles{
							text-align: left;
							padding:0 20px;
							font-size: 20px;
							color: #1C243A;
							letter-spacing: 0.38px;
							margin-bottom: 10px;
						}
						>.deta{
							padding: 0 20px;
							font-size: 16px;
							text-align: left;
							color: #9CA8CA;
							letter-spacing: 0.3px;
							line-height: 30px;
							margin-bottom: 20px;
						}
						>.moew{
							   display: inline-block;
							    color: green;
							    background-image: -webkit-gradient(linear, 80% 0, 0 0, from(rgba(252,119,177, 1)), to(rgba(152, 131, 241, 1)));
							    -webkit-background-clip: text;
							    -webkit-text-fill-color: transparent;
							/*background: linear-gradient(to right,  #9883F1 20%, #FC77B1 80%);
			        		-webkit-background-clip: text;

			        		-moz-background-clip: text;
			        		background-clip: text;
			        		-webkit-text-fill-color: transparent;

			        		color: transparent;
			        		display:inline-block;
			        		transform: translateX(-123px);*/


						}
					}
				}
				>button{
					width: 	240px;
					height: 60px;
					background-image: linear-gradient(-270deg, #FC77B1 0%, #9883F1 100%);
					border-radius: 100px;
					font-size: 24px;
					outline: none;
					color: #FFFFFF;
					letter-spacing: 0.46px;
					text-align: center;
					border:none;
					cursor: pointer;
				}
			}
		}
		>.linMapWarp{
			width: 	100%;
			height:100%;
			position: relative;
			>.sides{
				position: absolute;
			}
			>.side0{
				height: 240px;
				width: 190px;
				top:40%;
				background-position: -620px -1639px;
			}
			>.side1{
				height: 264px;
   				 width: 152px;
   				 right: 0;
   				 top: 26%;
   				 background-position: -978px -1614px;
			}
			>.side2{
				height: 143px;
   				 right: 0;
   				 top:80%;
  				  width: 148px;
  				  background-position: -1337px -1679px;
			}
			>.map{
				width: 	1200px;
				height: 100%;
				margin: auto;
				padding-top: 8%;
				text-align: center;
				>.title{
					width: 	441px;
					height: 67px;
					background-position:-1380px -753px;
					margin-bottom: 119px;
				}
				>.img{
					width: 	360px;
					height: 347px;
					background-position: -82px -1542px;
					position: relative;
					>.tesrs{
						width: 110%;
						position: absolute;
						>.title{
							font-size: 16px;
							color: #1C243A;
							letter-spacing: 0.3px;
							margin-bottom: 2%;							
						}
						>.detali{
							font-size: 16px;
							color: #9CA8CA;
							letter-spacing: 0.3px;
						}
					}
					>.texts0{
						    top: 35%;
						left: -120%;
						>.title{
							text-align: right;
						}
						>.detali{
							text-align: right;
						}
					}
					>.texts1{
						top:17%;
    					left: 100%;
						>.title{
							text-align: left;
						}
						>.detali{
							text-align: left;
						}
					}
					>.texts2{
						top: 78%;
    					left: 100%;
						>.title{
							text-align: left;
						}
						>.detali{
							text-align: left;
						}
					}
					>.texts3{
						top: 108%;
    					left:-11%;
						>.title{
							text-align: center;
						}
						>.detali{
							text-align: center;
						}
					}

				}

			}
		}
		>.endWarp{
			width: 100%;
					overflow: hidden;
			height: 849px;
			>.end{
				width: 100%;
				height: 849px;
				position: relative;
				>.pages{
					position: absolute;
					width: 180px;
					bottom: 8%;
					right: 20%;
					height: 60px;
					display: flex;
					justify-content: space-between;
					>.lefts,.rights,.leftss,.rightss{
						width: 60px;
						height: 60px;
						border-radius: 50%;
						cursor: pointer;
					}
					>.lefts{
						right: 25%;
						background-position: -1510px -138px;
					}
					>.leftss{
						right: 25%;

						background-position: -1255px -138px;
					}
					>.rightss{
						right: 20%;
						background-position: -1636px -138px;
					}

					>.rights{
						right: 20%;
						background-position: -1383px -138px;
					}
				}
				
				>.quotes{
					width: 517px;
					height: 484px;
					background-position: -98px -2192px;
					position: absolute;
					top: 0;
				}
				>.info{
					width:474px;
					position: absolute;
					top:30%;
					left: 15%;
					>.icon{
						width: 336px;
						height: 67px;
						margin-bottom: 40px;
					}
					>.terx{
						font-size: 16px;
						color: #9CA8CA;
						letter-spacing: 0;
						line-height: 30px;
					}
				}
				>.chnegyuan{
					width: 50%;
					height: 540px;
					background:linear-gradient(-135deg, #3D486B 0%, #262F49 100%);
					position:absolute;
					cursor: pointer;
					right: 0;
					top:15%;
					li:hover:not(.sss){
						transform:scale(1.02)

					}
					li:not(.sss){
						box-shadow: 0 8px 22px 0 rgba(177, 191, 230, 0.4);

					}
					li{
						width: 45%;
						height: 55%;
						
						/*width: 474px;
						height: 300px;*/
						background-color: #fff;
						border-radius: 8px;
						padding-right: 20px;
						padding-left: 43px;
						position: absolute;
						float: left;
						left: -10%;
						top:25%;
						padding-top: 26px;
						transition: 0.5s all;

					}
				}
			}

		}
	}
</style>