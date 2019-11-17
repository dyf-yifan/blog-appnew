<template>
	<div>
			<router-view class="main" />
			
			
		<div class="d-article-card" v-for="(article,index) in articles" :key="index">
			
			
			<div class="d-pic">
				<img :src="article.cover" class="pic">
			</div>
			
			
			<div class="d-con">
				
				
			<h2>{{article.title}}</h2>
				<div class="d-nickname">
			 	        <h3>{{article.nickname}}</h3>
				</div>
				<div class="d-content">
					    <h4>{{article.content.substring(0,60)}}</h4>
				</div>
				<div class="small">
				         <p><i class="iconfont">&#xe607;</i>{{article.likes}}</p>
				         <p><i class="iconfont">&#xe60b;</i>{{article.unlikes}}</p>
			             <p><i class="iconfont">&#xe600;</i>{{article.comments}}</p>
				         <p><i class="iconfont">&#xe63f;</i>{{article.publish_time}}</p>
				</div>	
			</div>		
		</div>
		
		
		</router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				articles: []
			}
		},
		created(){
			alert("article")
			this.axios.get('http://localhost:8080/api/article').then(res => {
				console.log(res.data.data);
				this.articles = res.data.data;
				for (var i = 0; i < this.articles.length; i++) {
					this.articles[i].cover = this.getImage(this.articles[i].cover);
				}
			});
		},
		methods:{
			getImage(url) {
						return 'https://images.weserv.nl/?url=' + url;
			}
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	.main {
	  width: 100%;
	  margin: 0 auto;
	  border: 1px solid #eee;
	  /**filter:alpha(opacity=50);
	  -moz-opacity:0.5;  
	  -khtml-opacity: 0.5;  
	  opacity: 0.5;
	  position:absolute; 
	  background:url(http://up.deskcity.org/pic/49/85/31/4985310b574461d305b975b29ae4047b.jpg) ;
	  background-size: calc(100%);
	  background-attachment:fixed;**/
	  background:url(http://up.deskcity.org/pic/49/85/31/4985310b574461d305b975b29ae4047b.jpg);
	  background-size: calc(100%);
	  background-attachment:fixed;
	  position: relative;
	}
	/* .d-picd {
		background:url(http://up.deskcity.org/pic/49/85/31/4985310b574461d305b975b29ae4047b.jpg) no-repeat;
		background-size: cover;
		width: 500px;
		height: 300px;
		position: relative;
	}
	.pice {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 500px;
		height: 300px;
		line-height: 50px;
		background: rgba(255,255,255,0.3);
	} */
	.d-article-card {
		display: flex;
		flex: 0 0 50%;
		width: 65%;
		padding-left: 60px;
		padding-top: 20px;
		
/* 		position: absolute;
 */		left: 0;
		top: 0;
		bottom: 0;
		height: auto;
		/* line-height: 50px; */
		background: rgba(255,255,255,0.7);
	}
	@font-face {
	  font-family: 'iconfont';  /* project id 1473594 */
	  src: url('//at.alicdn.com/t/font_1473594_nbi1e2h42.eot');
	  src: url('//at.alicdn.com/t/font_1473594_nbi1e2h42.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1473594_nbi1e2h42.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1473594_nbi1e2h42.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1473594_nbi1e2h42.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1473594_nbi1e2h42.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:23px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
		}
	.d-pic {
		width: 20%;
	}
	.pic {
		width: 180px;
		height: 240px;
		border-radius: 10px;
	}
	.d-con {
		margin-left: 25px;
	}
	.d-nickname {
		padding-top: 10px;
		display: flex;
	}
	.d-content {
		padding-top: 10px;
	}
	.small {
		padding-top: 9px;
		display: flex;
		justify-content: space-around;
	}
	h2 {
		margin-top: 10px;
		color: rgb(54,58,54);
		font-weight: 400;
		font-size: 29px;
	}
	h3 {
		color: rgb(54,58,54);
		font-size: 20px;
		font-weight: 300;
	}
	h4 {
		color: rgb(54,58,54);
		font-size: 25px;
		font-weight: 280;
	}
</style>
