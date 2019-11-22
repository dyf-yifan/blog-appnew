<template>
	<div>
		<div class="mainn">
			<div class="d-left"></div>
			<div class="d-right">
				<div class="a-title"></div>
				<div class="a-card" v-for="(article, index) in articles" :key="index">
					<div class="a-cover">
						<img :src="article.cover" alt="图书封面" class="cover" />
						</div>
				<div class="a-right">
				<div class="a-top">
						<h3>{{article.title}}</h3>
						</div>
						<div class="a-zhong">
							<p><i class="iconfont i-find">&#xe85d;</i>{{article.nickname}}</p>
							<p><i class="iconfont i-find">&#xe607;</i>{{article.likes}}</p>
							<p><i class="iconfont i-find">&#xe63e;</i>{{article.unlikes}}</p>
						</div>
						<div class="a-tro">
							<p>{{article.content.substring(0,36)}}</p>
						</div>
						<div class="a-bott">
							<p><i class="iconfont i-find">&#xe63f;</i>{{article.publish_time}}</p>
							
						</div>
				</div>
				</div>
			</div>		
		</div>
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {
			articles: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
			for (var i = 0; i < this.articles.length; i++) {
				this.articles[i].cover = this.getImage(this.articles[i].cover);
			}
		});
	},
	methods: {
		getImage(url) {
			return 'https://images.weserv.nl/?url=' + url;
		}
	},
	computed: {}
};
</script>
<style scoped>
.mainn {
	display: flex;
	width: 100%;
	margin-top: 15px;
}
.d-left {
	width: 22%;
	border: 1px solid brown;
}
.d-right {
	width: 78%;
	display: flex;
	flex-wrap: wrap;
}
.a-title {
	width: 100%;
	height: 40px;
	border: 1px solid grey;
}
.a-card {
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex: 0 0 50%;
	height: 180px;
}
.a-cover {
	width: 30%;
	height: 100%;
}
.cover {
	width: 90%;
	height: 100%;	
}
.a-right {
	
	width:70%;
	height: 180px;
	border: 1px gold;
}
.a-top {
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.a-zhong {
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 25px;
}
.a-tro {
	width: 100%;
	height: 80px;
}
.a-bott {
	width: 100%;
	height: 25px;
}
@font-face {
  font-family: 'iconfont';  /* project id 1473594 */
  src: url('//at.alicdn.com/t/font_1473594_gri4tyzjf5w.eot');
  src: url('//at.alicdn.com/t/font_1473594_gri4tyzjf5w.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1473594_gri4tyzjf5w.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1473594_gri4tyzjf5w.woff') format('woff'),
  url('//at.alicdn.com/t/font_1473594_gri4tyzjf5w.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1473594_gri4tyzjf5w.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>