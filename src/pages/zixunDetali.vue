<template>
	<div class="detaliWarp">
		<Head :color='color' :po='po'  :tex='tex' :bs='bs' />
		<div class="MainWarp">
			<div class="main">
				<div class="tiop">
					<span>炉石星球></span>
					<span>最新资讯></span>
					<span>易宣链去中心化数据交易所打造区块链价值生态</span>

					<button @click='tozixun'>返回列表</button>
				</div>

				<div class="content">
					<div class="head">
						<p class="titke">易宣链去中心化数据交易所打造区块链价值生态</p>
						<p class="otInfo">
							<span  class="icon white lh " ></span><span style="margin-right: 20px;">炉石星球团队</span>
							<span class="icon time lh " ></span><span>2018-03-19</span>

						</p>
						<p  class="sga ab">
							<span  style="font-size: 14px;color: #9CA8CA;letter-spacing: 0;text-align: left;margin-right: 15px;" >分享</span>
							<share style="display:inline-block;" :config="config" >
								 
							</share>
							<!-- <span @click='sh'  class="icon c1 lh social-share"></span>
							<span class="icon c2 lh" ></span>
							<span class="icon c3 lh"></span>
							<span class="icon c4 lh"></span>
							<span class="icon c5 lh"></span> -->

						</p>


					</div>


					<div class="body">
						<p>当你即将开始以太坊开发，创建你的首个以太坊应用程序就成为了你所面临的挑战。</p>
						<p>这会带来一系列围绕在你的应用程序架构和蓝图设计周围的新挑战：传统的客户端-服务器应用程序中现在又有一个新部件，区块链。</p>
						<img src="#">
						<p>在本篇文章中，我将提及以太坊应用程序中最经典的一些场景。它们的出现源于这三个部件（客户端、服务器与区块链）间的不同互动。我将论述无服务器应用程序、浏览器插件、私有节点、离线签名和其他一些在设计你的解决方案蓝图时扮演重要角色的问题。</p>
						<h5>无服务器应用程序中的客户端-区块链</h5>
						<p>以太坊应用程序的典型风格是无服务器的（serverless），你应用程序的整个流程全部是在客户端和区块链之间进行的。</p>
						<p>这里的第一步是向用户确切地分发客户端代码。最简便的方法是建立一个静态页面，其中要包含一个可用web 3（校对注：web3是一套以太坊客户端的API，有几种不同语言的实现，即客户端库，被用来通过JSON RPC接口与以太坊节点进行交互）的网页应用程序。任何地方都可托管这类页面：AWS S3、 Google Cloud、 Github pages、其它云服务供应商或你自己的服务器。另外，如果你能指望你的客户端支持bzz或ipfs协议，那么你就甚至可以通过 Swarm 或IPFS来分发代码以达到完全的去中心化。</p>
						<h5>查询区块链</h5>
						<p>下一步就是使应用程序能够读取区块链中的信息，而这正如你所知，需要连接到一个活跃的以太坊节点上。作为一个处理节点的 Web3 实际连接的组件，Web 3 provider 会设置好它。</p>
						<p>现在，你的一些用户可能已经连接上一个节点了，比如说是通过官方 Mist 客户端或通过浏览器插件，如非常流行的 Metamask，它们对于区块链而言就像轻量级客户端。它们的常见问题答疑中甚至提供一个代码片段，告诉你如何检测它在客户端上是否可用，以及如何将它用作web3 provider。</p>
					</div>


					<div class="pages">
						<p v-if='pagess != 0' @click='pres' class="pre">上一篇：<span style="color: #5295e3;">日本首次拒绝在该国经营加密货币交易所的申请</span></p>
							<p v-if='pagess == 0' style="float: left;color: #9CA8CA;cursor: no-drop;">上一篇：没有了</p>
						<p v-if='pagess !=8' @click='nexs' class="nex">下一篇：<span style="color: #5295e3;">日本首次拒绝在该国经营加密货币交易所的申请</span></p>
							<p  v-if='pagess == 8' style="float: right;color: #9CA8CA;">下一篇：没有了</p>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>


<script>
	import Head from '../components/header'
	import Footer from '../components/footer'
	import $ from 'jquery'

	export default {
		components:{
			Head,Footer
		},
		data(){
			return({
				color:'#fff',
				po:'fixed',
				tex:'#000',
				ernav:false,
				bs:'rgba(177, 191, 230) 0px -3px 22px 0px',
				pagess:null,
				config:{url: window.location.href, // 网址，默认使用 window.location.href  
						source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />  
						title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />  
						description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />  
						image               : '', // 图片, 默认取网页中第一个img标签  
						sites               : ['wechat', 'qq','qzone'], // 启用的站点  
						 
						wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字  
						wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'  }
			})
		},
		methods:{
			sh(e){
				
				
			},
			tozixun(){
				this.$router.push('/zixun')
			},
			pres(){
				this.pagess = Number(this.$route.params.id-1)
				console.log(this.pagess)

				if(Number(this.$route.params.id) == 0){
					this.pagess = 0
							return
				}
				this.$router.push(`/zixunDetali/${Number(this.$route.params.id) -1}`)

			},
			nexs(){
				this.pagess = Number(this.$route.params.id)+1
				console.log(this.pagess)

				if(Number(this.$route.params.id) == 8){
					this.pagess = 8

					return
				}
				this.$router.push(`/zixunDetali/${Number(this.$route.params.id) +1}`)
			}
		},
		mounted(){
			this.pagess = Number(this.$route.params.id)
			document.documentElement.scrollTop  = 0
			console.log(this.$route)
		}
	}
</script>

<style scoped lang="scss">
.icon-qzone{
	 background:url('/static/img/icon.png') !important;
	background-position: -586px -438px !important;
}
	.detaliWarp{
		width: 100%;
		min-height: 100%;
		>.MainWarp{
			width: 100%;
			min-height: 1000px;
			background-color: #fff;
			padding-top: 95px;
			>.main{
				width: 1200px;
				margin: auto;
				min-height: 1000px;
				>.tiop{
					width: 100%;
					height: 110px;
					position: relative;
					>span{
						font-size: 14px;
						color: #9CA8CA;
						letter-spacing: 0;
					}
					>button{
						width: 116px;
						height: 40px;
						border-radius: 100px;
						background: #9CA8CA;
						border:none;
						color: #fff;
						outline: none;
						cursor: pointer;
						position: absolute;
						right: 0;
						bottom: 20px;

					}
				}
				>.content{
					width: 100%;
					min-height: 500px;
					border:1px solid #F4F6FA;
					padding: 0 59px 0 58px;
					margin-bottom:50px;
					>.head{
						width: 100%;
						height: 143px;
						border-bottom:1px solid #F4F6FA;
						padding-top: 30px;
						position: relative;
						>.titke{
							font-size: 24px;
							color: #1C243A;
							letter-spacing: 0;
							margin-bottom: 25px;
						}
						>.otInfo{
							>span{
								font-size: 14px;
								color: #9CA8CA;
								letter-spacing: 0;
							}
							>.icon{
								width: 16px;
								height: 16px;
								vertical-align: middle;
								margin-right: 4px;

							}
							>.white{background-position: -68px -453px;}
							>.time{background-position: -170px -452px;vertical-align: middle;transform: translateY(-1px);}
						}
						>.sga{
							right: 0;
							bottom: 30px;
							width: 350px;
							height: 30px;
							>:nth-last-child(1){
								margin-right: 0px;

							}
							>.icon{
								width: 30px;
								height: 30px;
								margin-right: 20px;
								vertical-align: middle;
								cursor: pointer;
							}
							>.c1{
								    background-position: -423px -438px;
							}
							>.c2{
								    background-position: -586px -438px;
							}
							>.c3{
								    background-position: -734px -438px;
							}
							>.c4{
								    background-position: -875px -438px;
							}
							>.c5{
								    background-position: -974px -438px;
							}
						}
					}
					>.body{
						width: 100%;
						min-height: 200px;
						text-align: center;
						padding-bottom: 100px;
						>p,h5{
							font-size: 16px;
							color: #1C243A;
							margin-bottom: 20px;
							text-align: left;
							line-height: 30px;
						}
						>h5{
							font-size: 20px;
							color: #001200;
							line-height: 28px;
						}
						>img{
							width: 800px;
							height: 300px;
							border:1px solid red;
						}

					}
					>.pages{
						width: 100%;
						height: 30px;
						margin-bottom:100px;

						>.pre{
							float: left;
							font-size: 16px;
							color: #1C243A;
							letter-spacing: 0;
							text-align: right;
							line-height: 28px;
							cursor: pointer;
						}
						>.nex{
							float: right;
							font-size: 16px;
							color: #1C243A;
							letter-spacing: 0;
							text-align: right;
							line-height: 28px;
							cursor: pointer;
						}

					}
				}

			}
		}
	}
</style>