<template>
	<div>
			<div class="u-user">
		<div class="u-card" v-for="(user,index) in users" :key="index">
			<div class="d-pic">
				<img :src="user.avatar" class="pic">
			</div>
			<div class="u-con">
				<div class="u-nickname">
			 	        <h3>{{user.nickname}}</h3>
				</div>
				<div class="u-content">
					    <h4>{{user.introduction}}</h4>
				</div>
				<div class="u-small">
				         <p><i class="iconfont">&#xe616;</i>{{user.address}}</p>
				         <p><i class="iconfont">&#xe63f;</i>{{user.create_time}}</p>
				</div>	
			</div>		
		</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				users: []
			}
		},
		created(){
			this.axios.get('http://localhost:8080/api/user').then(res => {
				console.log(res.data.data);
				this.users = res.data.data;
				for (var i = 0; i < this.users.length; i++) {
					this.users[i].avatar = this.getImage(this.users[i].avatar);
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
	.u-user {
		width: 100%;
		margin: 0 auto;
		border: 1px solid cornflowerblue;
		display: flex;
		flex-wrap: wrap;
	}
	.u-card {
		flex: 0 0 30%;
		height: 300px;
		border: 1px solid #B4B4B4;
		margin-top: 80px;
		margin-left: 29px;
		border-radius: 30px;
	}
	.d-pic {
		width: 100%;
		height: 40px;
		text-align: center;
		margin-top: -50px;
	}	
	.pic {
		width: 100px;
		height: 100px;
		border-radius: 50px;
	}
	.u-con {
		width: 100%;
		height: 80%;
		margin-top: 70px;
	}
	.u-nickname {
		height: 50px;
		/* background-color: #6495ED; */
		text-align: center;
		font-size: 23px;
		padding-top: 5px;
	}
	.u-content {
		margin-top: 10px;
		height: 60px;
		text-align: center;
		letter-spacing: 5px;
		font-size: 20px;
	}
	.u-small {
		margin-top: 25px;
		height: 70px;
		padding-left: 9px;
	}
	p {
		padding-top: 5px;
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