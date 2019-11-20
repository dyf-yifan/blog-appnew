<template>
	<div>
		<div class="d-top-nav">
			<div class="d-top-box">
				<ul class="nav-ul">
					<li class="nav-li"><router-link to="/">起点中文网</router-link></li>
					<li class="nav-li"><router-link to="/">起点女生网</router-link></li>
					<li class="nav-li"><router-link to="/">创世中文网</router-link></li>
					<li class="nav-li"><router-link to="/">云起书院</router-link></li>
					<li class="nav-li"><router-link to="/">繁体版</router-link></li>
				</ul>
				<div class="right">
					<div class="top-right">
						<li class="nav-li" v-if="!this.user"><router-link to="/sign-in">登录</router-link></li>
						<li class="nav-li" v-if="this.user">
							<router-link to="/profile"><img src="this.user.avatar" class="avatar" alt="" /></router-link>
						</li>
						<li class="nav-li" v-if="this.user" @click="logout" id="logout">退出</li>
					</div>
					<li>|</li>
					<div class="top-right">
						<li class="nav-li" v-if="!this.user"><router-link to="/">注册</router-link></li>
					</div>
				</div>
			</div>
		</div>
		<div class="d-search">
			<div class="symbol"><h1>起点中文网</h1></div>
			<div class="search">
				<input type="text" placeholder="明日之劫" />
				<button><i class="iconfont i-find">&#xe601;</i></button>
			</div>
			<div class="book-mobel">
				<i class="iconfont i-find">&#xe60d;</i>
				<p>我的书架</p>
			</div>
		</div>
		<div class="d-bottom-nav">
			<h1 class="brand"><router-link to="/">作品分类</router-link></h1>
			<div class="d-bottom-box">
				<ul class="nav-ul">
					<li class="navli"><router-link to="/">全部作品</router-link></li>
					<li class="navli"><router-link to="/collection">排行</router-link></li>
					<li class="navli"><router-link to="/user">完本</router-link></li>
					<li class="navli"><router-link to="/user">免费</router-link></li>
					<li class="navli"><router-link to="/user">作家专区</router-link></li>
					<li class="navli"><router-link to="/user">
					<i class="iconfont i-ipone">&#xe659;</i>客户端</router-link></li>
				</ul>
	
				
			</div>
			<div class="d-right-box">
				<ul class="nav-ul">
					<li class="nav-li">
						<router-link to="/user">				
					<i class="iconfont i-you">&#xe6a7;</i>页游
					</router-link></li>
					<li class="nav-li">
						<router-link to="/user">				
					<i class="iconfont i-you">&#xe64d;</i>手游
					</router-link></li>
				</ul>
			</div>
		</div>
		<router-view class="main" />
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
	components: {
		Footer
	},
	data() {
		return {
			user: JSON.parse(localStorage.user)
		};
	},
	created: function() {
		if (this.user) {
			console.log(this.user);
		}
	},
	methods: {
		logout() {
			alert('确定要注销吗');
			this.user = null;
			localStorage.clear();
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

ul {
	list-style: none;
}

li {
	margin-right: 15px;
	margin-left: 53px;
	font-size: 18px;
}
.d-top-nav {
	width: 100%;
	height: 37px;
	background-color: rgb(247, 247, 247);
	border-bottom: 1px solid #eeeeee;
}
.d-top-box {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 37px;
}
.right a {
	color: rgb(117, 117, 117);
}
.d-top-box ul li a {
	color: rgb(117, 117, 117);
}
.d-bottom-nav a {
	color: rgb(250, 250, 250);
}
.d-bottom-box li {
	font-size: 20px;
}
.d-right-box li {
	font-size: 20px;
}
.nav-ul {
	display: flex;
}
.d-search {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 85px;
	background-color: rgb(255, 255, 255);
	text-align: center;
}

.d-bottom-nav {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 49px;
	background-color: rgb(69, 90, 100);
	font-size: 20px;
}
.right {
	display: flex;
	list-style: none;
	margin-left: 450px;
}
.symbol {
	margin-right: 150px;
}
h1 {
	font-weight: 400;
	font-size: 30px;
}
.search {
	width: 400px;
	height: 45px;
	margin-right: 160px;
	border: 1px solid #dddddd;
	display: flex;
}
input {
	width: 95%;
	font-size: 18px;
}
button {
	width: 15%;
	background-color: rgba(191, 44, 36, 0.9);
}
.book-mobel {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 21px;
	width: 150px;
	height: 42px;
	border: 1px solid #DDDDDD;
}
@font-face {
	font-family: 'iconfont'; /* project id 1473594 */
	src: url('//at.alicdn.com/t/font_1473594_qn5lhp2w9lk.eot');
	src: url('//at.alicdn.com/t/font_1473594_qn5lhp2w9lk.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1473594_qn5lhp2w9lk.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1473594_qn5lhp2w9lk.woff') format('woff'), url('//at.alicdn.com/t/font_1473594_qn5lhp2w9lk.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1473594_qn5lhp2w9lk.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}
.i-find{
	font-size: 30px;
}
.i-you {
	font-size: 24px;
}

.main {
	width: 90%;
	margin: 0 auto;
	border: 1px solid #eee;
}
#logout {
	color: yellow;
	cursor: pointer;
}
</style>
