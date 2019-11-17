<template>
	<div>
		<div class="nav">				
			<h1 class="brand"><router-link to="/">Blog</router-link></h1>
			<ul class="nav-ul">
				<li class="nav-li"><router-link to="/article">Article</router-link></li>
				<li class="nav-li"><router-link to="/collection">Collection</router-link></li>
				<li class="nav-li"><router-link to="/user">User</router-link></li>
				<li class="nav-li" v-if="!this.user"><router-link to="/sign-in">Sign in</router-link></li>
				<li class="nav-li" v-if="this.user">
					<router-link to="/profile"><img src="this.user.avatar" class="avatar" alt="" /></router-link></li>
				<li class="nav-li" v-if="this.user" @click="logout" id="logout">Sign up</li>
			</ul>
			
		</div>
		
		<router-view class="main" />
		
		
	</div>
</template>

<script>
	import Footer from '../components/Footer.vue'
	export default {
		components: {
			Footer
		},
		data () {
			return{
				user: JSON.parse(localStorage.user)
			}
		},
		created: function(){
			if(this.user) {
				console.log(this.user)
			}
		},
		methods:{
			logout (){
				alert('确定要注销吗')
				this.user = null
				localStorage.clear()
			}
		}
	}
</script>

<style scoped> 
	.nav {
		display: flex;
		width: 100%;
		height: 65px;
		background-color: #DDDDDD;
	}
	.brand {
		flex: 0 0 20%;
		font-size: 35px;
		text-align: center;
	}
	.nav-ul {
		flex: 0 0 80%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.nav-li {
	  flex-wrap: wrap;
	  list-style: none;
	  font-size: 30px;
	}
	.main {
	  width: 90%;
	  margin: 0 auto;
	  border: 1px solid #eee;
	}
	#logout{
	  color: yellow;
	  cursor: pointer;
	}
</style>
