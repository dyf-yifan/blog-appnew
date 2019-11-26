<template>
	<div>
			<div class="coll">	
			<div class="coll-left">
		<div class="coll-card" v-for="(theme,index) in themes" :key="index">
			<div class="d-pic">
				<img :src="theme.pic" class="pic">
			</div>
			<div class="d-con">	
				<div class="d-nickname">
					<router-link :to="{ path: '/theme/' + theme.id }"><h3>{{theme.thName}}</h3></router-link>
			 	        
				</div>
				<div class="d-content">
					    <h4>{{theme.look.substring(0,80)}}</h4>
				</div>
				<div class="small">
				         <p><i class="iconfont">&#xe626;</i>{{theme.attention}}</p>
				         <p><i class="iconfont">&#xe63f;</i>{{theme.thTime}}</p>
						 <p><i class="iconfont">&#xe620;</i>{{theme.production}}</p>			 
				</div>	
			</div>		
		</div>
		</div>
		<div class="coll-right">
			<!-- <div><a :href="theme.homepage" class="link" @click="go(theme.homepage)">专题主页</a></div> -->
			
			
		</div>
		<div class="page">
			<button @click="loadMore">点击加载更多</button>
		</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		data(){
				return {
					themes: [],
					currentPage: 1,
					count: 2
				};
		},
		created(){
			// this.axios.get('http://localhost:8080/api/theme').then(res => {
			// 	console.log(res.data.data);
			// 	this.themes = res.data.data;
			// 	for (var i = 0; i < this.themes.length; i++) {
			// 		this.themes[i].pic = this.getImage(this.themes[i].pic);
			// 	}
			// });
			this.axios.get(this.GLOBAL.baseUrl + '/theme', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					this.themes = res.data.data;
				});
		},
		methods:{
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios.get(this.GLOBAL.baseUrl + '/theme', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.themes.splice(this.currentPage * this.count, 0, temp[i]);
					}
					console.log(this.themes.length);
				});
		},
		getImage(url) {
						return 'https://images.weserv.nl/?url=' + url;
			}
		},
		// go(page) {
		// 	window.location.href = page;
		// },
		computed:{
			
		}
	}
</script>

<style scoped>
	.coll {
		width: 100%;
		border: 1px solid red;
		margin: 0 auto;
		margin-top: 200px;
	}
	.coll-left{
		width: 80%;
	}
	.coll-right {
		width: 20%;
		border: 1px solid royalblue;
		background-color: #6495ED;
	}
	.coll-card {
		margin-top: 15px;
		width: 100%;
		height: 180px;
		display: flex;
	}
	.d-pic {
		width: 31%;
		height: 180px;
	}
	.pic {
		width: 100%;
		height: 180px;
	}
	.small {
		display: flex;
		width: 100%;
		height: 40px;
		margin-top: 20px;
		letter-spacing: 1px;
		padding-left: 15px;
	}
	.d-con{
		width: 69%;
	}
	.d-nickname {
		width: 100%;
		height: 40px;
		padding-top: 10px;
		padding-left: 10px;
		font-size: 20px;
	}
	.d-content {
		padding-top: 20px;
		padding-left: 15px;
		width: 100%;
		height: 80px;
		font-size: 18px;
		letter-spacing: 1px;
	}
	.page {
		text-align: center;
	}
	button {
		width: 130px;
		height: 50px;
		text-align: center;
		background-color: rgb(255,250,232);
		border-radius: 20px;
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
	
</style>