<template>
	<div class="full main-color">
		<h2><router-link to="/">博客</router-link></h2>
		<div class="login-box">
			<input type="text" v-model="userDto.mobile" />
			<input type="text" v-model="userDto.password" />
			<input type="button" class="btn main-color" value="登录" @click="signIn(userDto)" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
		}
	}
};
</script>

<style scoped>
.full {
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
}
</style>
