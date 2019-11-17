<template>
	<div>
			<router-view class="main" />
			
			
		<div class="d-article-card" v-for="(theme,index) in themes" :key="index">
			
			
			<div class="d-pic">
				<img :src="theme.pic" class="pic">
			</div>
			
			
			<div class="d-con">
				
				
			<h2>{{theme.thname}}</h2>
				<div class="d-nickname">
			 	        <h3>{{theme.thname}}</h3>
				</div>
				<div class="d-content">
					    <h4>{{theme.look.substring(0,60)}}</h4>
				</div>
				<div class="small">
				         <p><i class="iconfont">&#xe626;</i>{{theme.attention}}</p>
				         <p><i class="iconfont">&#xe63f;</i>{{theme.thtime}}</p>
						 <p><i class="iconfont">&#xe620;</i>{{theme.production}}</p>
						 
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
				themes: []
			}
		},
		created(){
			alert("themes")
			this.axios.get('http://localhost:8080/api/theme').then(res => {
				console.log(res.data.data);
				this.themes = res.data.data;
				for (var i = 0; i < this.themes.length; i++) {
					this.themes[i].pic = this.getImage(this.themes[i].pic);
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
	  background:url(http://up.deskcity.org/pic/49/85/31/4985310b574461d305b975b29ae4047b.jpg);
	  background-size: calc(100%);
	  background-attachment:fixed;
	  position: relative;
	}
	.d-article-card {
		display: flex;
		flex: 0 0 50%;
		width: 75%;
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
	  src: url('//at.alicdn.com/t/font_1473594_lu3r8rcdnmf.eot');
	  src: url('//at.alicdn.com/t/font_1473594_lu3r8rcdnmf.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1473594_lu3r8rcdnmf.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1473594_lu3r8rcdnmf.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1473594_lu3r8rcdnmf.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1473594_lu3r8rcdnmf.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:23px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
		}
	.d-pic {
		width: 15%;
		justify-content: flex-end;
	}
	.pic {
		width: 180px;
		height: 230px;
		border-radius: 20px;
		margin-right: 30px;
	}
	.d-con {
		margin-left: 32px;
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
