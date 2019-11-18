<template>
	<div class="d-login">
		<!-- <h2><router-link to="/">blog</router-link></h2> -->
		<div class="login-box">
			<div class="tab">
				
				<span class="tab-item"  :class="{ active: isActive}" @click="changeTab">手机登录</span>
				
				<span class="tab-item"  :class="{ active: !isActive}" @click="changeTab">账号注册</span>
			</div>
			<div class="tab-box" v-show="show&&selected===0">
				<div>
					<br>
					<i class="iconfont">&#xe659;</i>
					<input type="text" v-model="userDto.mobile" placeholder="请输入手机号">
					<br>
					<br>
					<i class="iconfont" >&#xe640;</i>				
					<input type="password" v-model="userDto.password" placeholder="请输入密码">
					<br>
					<br>
					<!-- <input type="button" value="登录" @click="signIn(userDto)" /> -->
					<button value="登录" @click="signIn(userDto)">登录</button>
				</div>
			
			</div>
			<div class="tab-box" v-show="show&&selected===1">
				<div>
							<i class="iconfont">&#xe60c;</i>
							<input type="text" placeholder="请输入昵称">
							<br>
							<i class="iconfont">&#xe659;</i>
							<input type="text" placeholder="手机号">
							<br>
							<i class="iconfont">&#xe640;</i>
							<input type="text" placeholder="请输入密码">
							<br>
							<i class="iconfont">&#xe640;</i>							
							<input type="text" placeholder="请确认密码">
							<br>
							<button>立即注册</button>
							
							
							
			</div>
			</div>
			<!-- <div class="d-input">
			<input type="text" v-model="userDto.mobile" />
			<br><br>
			<input type="text" v-model="userDto.password" />
			<input type="button" class="btn main-color" value="登录" @click="signIn(userDto)" />
		</div> -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

           isActive: true,
		   show: true,
		   selected:0,
		   // loginShow: true,
		   // registShow: false,
			userDto: {
				mobile: '',
				password: ''
			}
		};
	},
	methods: {
		signIn(userDto) {
			this.axios.post('http://localhost:8080/api/sign-in', JSON.stringify(this.userDto)).then(response => {
				alert(response.data.msg);
				if (response.data.msg === '登录成功') {
					localStorage.user = JSON.stringify(response.data);
					this.$router.push('/profile/basic');
				} else {
					alert("登录失败");
				}
			});
		},
		
		
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		}
		// ,
		// showLogin() {
		// 			this.loginShow = true;
		// 			this.registShow = false;
		// 		},
		
		// 		showRegist() {
		// 			this.loginShow = false;
		// 			this.registShow = true;
		// 		}

	}
};
</script>

<style scoped>
	.d-login {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 694px;
		background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2R4Zz4wSSXybnhNL9fJD3UZehLf_9h7FYD_0CuX15tW0lvJCG);
		background-size: calc(100%);
		background-attachment:fixed;
		position: relative;
	}
	.login-box {
		width: 30%;
		height: 60%;
		/* background-color: #DDDDDD; */
		border-radius: 10px;
		left: 0;
		top: 0;
		bottom: 0;
		background: rgba(157,188,193,0.8);
		 /* display: flex; */
		 /* justify-content: center; */
		/* align-items: center; */
	}
	input {
		height: 50px;
		width: 280px;
		margin-bottom: 20px;
		border-radius: 10px;
		margin-left: 10px;
	}
	.tab {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 15%;
	}
	.tab-item {
		display: flex;
		justify-content: center;
		width: 150px;
	}
	.tab-box {
		width: 100%;
		height: 85%;
		display: flex;
		justify-content: center;
	}
	
	.tab span {
		font-size: 24px;
		margin-right: 10px;
	}
	button {
		width: 170px;
		height: 40px;
		border-radius: 15px;
		font-size: 20px;
		background-color: #FFFFFF;
		margin-left: 76px;
	}
	@font-face {
	  font-family: 'iconfont';  /* project id 1473594 */
	  src: url('//at.alicdn.com/t/font_1473594_te3ykiowr8.eot');
	  src: url('//at.alicdn.com/t/font_1473594_te3ykiowr8.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1473594_te3ykiowr8.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1473594_te3ykiowr8.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1473594_te3ykiowr8.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1473594_te3ykiowr8.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:23px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
		}
/* .full {
	width: 100%;
	height: 700px;
}
a {
	text-decoration: none;
	color: #fff;
}
.login-box {
	position: absolute;
	top: 150px;
	left: 400px;
	background-color: #ddd;
	width: 450px;
	height: 300px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.login-box > input {
	width: 70%;
	height: 35px;
	margin-bottom: 20px;
	border-radius: 5px;
	color: #333;
}
.btn {
	opacity: 1;
	cursor: pointer;
	color: #fff !important;
	font-size: 14px;
	letter-spacing: 10px;
} */
</style>
