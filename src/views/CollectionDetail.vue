<template>
	<div>
		<div class="col">
			<div class="col-card">
				
				<div class="col-pic">
					<img :src="themeVo.theme.pic" class="col-picc">
				</div>
				
				<div class="col-left">
				<h1 class="col-title">{{ themeVo.theme.thName }}</h1>
				<div class="coll-biao">
				<div class="col-b">
					<p>签约</p>
				</div>
				<div class="col-b">
					<p>科技</p>
				</div>
				<div class="col-b">
					<p>情感</p>
				</div>
				<div class="col-b">
					<p>百态</p>
				</div>
				</div>
				<div class="jianjie"><p>{{ themeVo.theme.look }}</p></div>
				<div class="jilu">
					
					<button>{{themeVo.theme.attention}}k关注</button>
					<button>{{themeVo.theme.thNumber}}k文章</button>
				
				</div>
				</div>
				
			</div>
			<div class="xian">
				<button>专题信息</button>
				<button>目录</button>
				</div>
				<div class="colll">
					<p>{{ themeVo.theme.look }}</p>
				</div>
				
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				themeVo: {}
			};
		},
		created(){
			var id = this.$route.params.id;
			this.axios.get(this.GLOBAL.baseUrl + '/theme/' + id).then(res => {
				console.log(res.data.data);
				this.themeVo = res.data.data;
			});
		},
		computed:{},
		methods:{}
	}
</script>

<style scoped>
	.col {
		width: 80%;
		height: 500px;
		margin: 0 auto;
		/* display: flex; */
	}
	.col-card {
		margin-top: 30px;
		width: 100%;
		height: 300px;
		display: flex;
	}
	
	.col-picc {
		width: 320px;
		height: 250px;
	}
	.col-left {
		width: 800px;
		height: 250px;
	}
	.col-title {
		width: 580px;
		height: 50px;
		text-align: left;
		margin-left: 20px;
		margin-top: 20px;
	}
	.coll-biao{
		text-align: center;
		display: flex;
		height: 40px;
	}
	.col-b{
		display: flex;
		border: 1px solid #AAAAAA; 
		border-radius: 20px;
		width: 50px;
		height: 25px;
		margin-left: 20px;
		padding-right: 10px;
	}
	.jianjie {
		width: 80%;
		height: 80px;
		/* border: 1px solid red; */
		font-size: 20px;
		margin-left: 25px;
	}
	.jilu {
		display: flex;
		width: 60%;
		justify-content: space-around;
		margin-top: 20px;
	}
button {
	width: 100px;
	height: 50px;
	font-size: 18px;
	color: #6495ED;
	background-color: #FFEBCD;
	border-radius: 20px;
}
	.xian {
		border-bottom: 1px solid #AAAAAA;
		display: flex;
	}
	.colll {
		width: 100%;
		height: 500px;
		padding-top: 30px;
		font-size: 21px
	}
</style>

 
 
 <!-- <template>
 	<div class="container">
 		<div class="row">
 			<div class="col-8">
 				<div class="row border-bottom">
 					<div class="col-3">
 						<img :src="themeVo.theme.pic" class="avatar-lg" />
 						<p class="title">{{ themeVo.theme.themeName }}</p>
 					</div>
 					<div class="col-6">
 						<p>
 							<span class="sub-title">{{ themeVo.theme.articles }}篇文章,</span>
 							<span class="sub-title">{{ themeVo.theme.follows }}人关注</span>
 						</p>
 					</div>
 					<div class="col-3"><button class="btn btn-lg btn-rd warning-fill">关注</button></div>
 				</div>
 				<h3 class="title">本专题文章</h3>
 				<dir class="row">
 					<div v-for="(item, index) in themeVo.articleList" :key="index" class="col-12 border-bottom">
 						<div class="media-wraaper">
 							<div class="media-left">
 								<img :src="item.author.avatar" class="avatar-lg link" />
 								<p>{{ item.author.nickname }}</p>
 							</div>
 							<div class="media-middle">
 								<router-link :to="{ path: '/article/' + item.article.id }">
 									<p>{{ item.article.title }}</p>
 								</router-link>
 								<p class="sub-title link">{{ item.article.summary }}</p>
 								<p>
 									<span class="meta gutter">{{ item.article.comments }}评论</span>
 									<span class="meta">{{ item.article.likes }}喜欢</span>
 								</p>
 							</div>
 							<div class="media-right"><img :src="item.article.thumbnail" alt="" /></div>
 						</div>
 					</div> 
 				</dir>
 			</div>
 			<div class="col-4">
 				<div class="box border-bottom">
 					<p class="title">专题公告</p>
 					<p class="sub-title">{{ themeVo.theme.production }}</p>
 					<p>
 						<a :href="topicVo.homepage">{{ themeVo.theme.homepage }}</a>
 					</p>
 				</div>
 				<div class="box border-bottom"><p>分享到:微博、微信</p></div>
 				<div class="box border-bottom">
 					<p class="sub-title">管理员</p>
 					<img :src="themeVo.admin.avatar" class="avatar-xs" />
 					<p>{{ themeVo.admin.nickname }}</p>
 				</div>
 				<div class="box border-bottom">
 					<p class="sub-title">关注的人</p>
 				</div>
 			</div>
 		</div>
 	</div>
 </template>
 
 <script>
 export default {
 	data() {
 		return {
 			themeVo: {}
 		};
 	},
 	created() {
 		var id = this.$route.params.id;
 		this.axios.get(this.GLOBAL.baseUrl + '/theme/' + id).then(res => {
 			console.log(res.data.data);
 			this.themeVo = res.data.data;
 		});
 	},
 	computed: {},
 	methods: {}
 };
 </script>
 
 <style scoped>
 
 </style> -->