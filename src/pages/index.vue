<template>
	<div class="Warp">
		<Head />
		<div class="indexWarp">
			<div class="index">
				<span class="logoImg icon" ></span><br>
				<span class="logoText icon" ></span><br>
				<span class="text">去中心化的二手交易区块链创新生态系统</span><br>
				<button @click='download' class="ibtn image down"></button>
				<button class="ibtn image  book"></button>	

			</div>
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
				<span class="more lh ">炉石星球是由美国XLab基金会(非营利性)发起的针对全球的去中心化二手交易区块链生态系统平台。 我们的定位，是提供二手行业商业级的区块链基础设施服务。一方面打造企业级区块链基础平台，另一方面在其上构建高扩展性的应用业务支撑系统。 其中，最底层的就是我们专注于保险行业的公有区块链炉石星球。 将现实的二手交易世界映射到区块链上。 通过跨平台、跨企业、跨行业、跨国界的互联协作，创造全新的商业模式，为协作参与方提供信任服务</span>
			</div>
		</div>

		<div class="proWarp">
			<div class="pro">
				<span class="lh icon title"></span>
				<span class="lh image IIMg"></span>
				<span class="lh line"></span>
			</div>
		</div>

		<div class="appWarp">
			<div class="str" ></div>
			<div class="san"></div>	
			<div class="app">
				<div class="bpp lh">
					<p class="lh title icon"></p>
					<ul>
						<li v-for='(item,index) in bpp'>
							<p class="lh image" :class=" 'ulImg'+ index"></p>
							<span>{{item.text}}</span>
						</li>
					</ul>
					
				</div>	
			</div>		
					<div class="str"></div>	
		</div>

		<div class="ecologyWarp">
			<div class="ecology">
				<p class="lh icon title"></p><br>	
				<p class="lh more">鼓励全球区块链爱好者和保险行业的开发者投入到炉石星球生态建设中，基于炉石星球开发更多优秀的应用及场景方案
						所有用户可以在炉石星球提出二手交易需求或设计细分二手交易产品
						第三方公司可以在炉石星球为用户提供服务
						商家可以在炉石星球发布产品并使用我们基于区块链的底层技术服务</p>
			</div>
		</div>

		<div class="informationWarp">
			<div class="information">
				<p class="lh title icon"></p>
				<ul>
					<li>
						<img src="/static/img/d81bca446095aa380f3b38c611f8e839688e5ca91429d-BGS6ii_fw658.jpeg">
						<p class="titles">数据块链（PreICO）</p>
						<p class="deta">DataBlockChain.io是一个革命性的数据平台，它打乱了公司和个人收集优质数据的方式。我们的产品将</p>
						<p class="moew">查看更多 →</p>
					</li>
					<li>
						<img src="/static/img/d81bca446095aa380f3b38c611f8e839688e5ca91429d-BGS6ii_fw658.jpeg">
						<p class="titles">数据块链（PreICO）</p>
						<p class="deta">DataBlockChain.io是一个革命性的数据平台，它打乱了公司和个人收集优质数据的方式。我们的产品将</p>
						<p class="moew">查看更多 →</p>
					</li>
					<li>
						<img src="/static/img/d81bca446095aa380f3b38c611f8e839688e5ca91429d-BGS6ii_fw658.jpeg">
						<p class="titles">数据块链（PreICO）</p>
						<p class="deta">DataBlockChain.io是一个革命性的数据平台，它打乱了公司和个人收集优质数据的方式。我们的产品将</p>
						<p class="moew">查看更多 →</p>
					</li>
				</ul>
				<button>更多资讯</button>
			</div>
		</div>

		<div class="linMapWarp">
			<div class="map">
				<p class="lh icon title">	</p><br>	
				<div class="img image lh">
					<div class="texts1">
						ctyfcujvjyhk
					</div>
				</div>
			</div>		
		</div>
	</div>
</template>

<script>
	import Head from '../components/header'
	export default{
		components:{
			Head
		},
		data(){
			return({
				introduceList:[
						{
							title:'二手交易巨大的市场空间',
							text:'二手交易按分类可分为大宗商品与个人闲置。大宗商品如二手车、二手房、二手3C类等物品。每年各行业的二手交易数据都成几何式增加，互联网巨头公司也纷纷涉足二手交易，市场空间巨大。'
						},
						{
							title:'二手市场面临的诸多问题',
							text:'多层级中介，增加了无效成本。不透明的产品质量追溯过程，导致很多用户对二手物品的质量问题堪忧。产品鉴定和第三方托管极度缺乏公信力。'
						},
						{
							title:'区块链为二手交易带来的革新',
							text:"区块链具有公共可查询、不可篡改、不可伪造等特点，区块链的智能合约与二手市场天然契合，区块链技术必然成为二手市场下一个发展阶段的底层技术"
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
				]
			})
		},
		methods:{
			download(){
				alert('下载')
			}
		}
	}
</script>


<style scoped lang="scss">

	.Warp{
		width: 100%;
		height: 100%;
		position: relative;
		>.indexWarp{
			width: 100%;
			height: 100%;			
			background-color: #000;
			background-image: url('/static/img/indexbg.jpg');
			>.index{
				width: 1200px;
				height: 100%;
				margin: auto;
				position: relative;
				z-index: 3;
				text-align: center;
				padding-top: 345px;
				color: #fff;
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
				}
				>.book{
					background-position:722px  -2434px;					
				}
				>.icon{
					display:inline-block;
				}
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
							font-size: 14px;
							color: #9CA8CA;
							letter-spacing: 0.3px;
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
					background-size: 188%;
					height: 610px;
					background-position: -365px -98px;
				}
				>.line{
					width: 3px;
					height: 58px;
					border-left:2px dashed #9883F1;
					transform: translateX(-408px) translateY(5px);
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
				position: absolute;top: 100px;
				left: 30%;
				transform: translateX(-25%);
				>.bpp{	
					width: 1400px;
					height: 620px;
					background-color: #fff;
					>.title{
						width: 440px;
						height: 67px;
						margin-bottom: 100px;
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
				bottom: 100px;
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
				padding-top: 160px;
				text-align: center;
				>.title{
					width: 	196px;
					height: 67px;
					background-position: -1004px -753px;
					margin-bottom: 100px;
				}
				>ul{
					width: 	100%;
					display: flex;
					justify-content: space-between;
					height: 473px;
					margin-bottom: 81px;
					>li:hover{
						transform: scale(1.04);
					}
					>li{
						width: 	370px;
						height: 473px;
						background-color: #fff;
						padding-top: 20px;
						transition: .5s all;
						box-shadow: 0 8px 22px 0 rgba(177, 191, 230, 0.4);

						>img{
							width: 	330px;
							height: 223px;
							margin-bottom: 30px;
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
							background: linear-gradient(to right,  #9883F1 20%, #FC77B1 80%);
			        		-webkit-background-clip: text;
			        		color: transparent;
			        		display:inline-block;
			        		transform: translateX(-123px);


						}
					}
				}
				>button{
					width: 	240px;
					height: 60px;
					background-image: linear-gradient(-270deg, #FC77B1 0%, #9883F1 100%);
					border-radius: 100px;
					font-size: 24px;
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
			>.map{
				width: 	1200px;
				height: 100%;
				margin: auto;
				border:1px solid red;
				padding-top: 8%;
				text-align: center;
				>.title{
					width: 	441px;
					height: 67px;
					background-position:-1380px -753px;
					margin-bottom: 119px;
				}
				>.img{
					width: 	346px;
					height: 347px;
					background-position: -90px -1542px;
					position: relative;
					>.texts1{
						position: absolute;top: 0;
					}

				}

			}
		}
	}
</style>