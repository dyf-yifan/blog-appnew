<template>
	<div class="box">
		<ul>
			<li><router-link to="/profile/basic">基本资料</router-link></li>
			<li><router-link to="/profile/pass">修改密码</router-link></li>
			<li><router-link to="/profile/setting">系统设置</router-link></li>
			
		</ul>
		<router-view class="personal" />
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		created(){
		},
		methods:{
			
		},
		computed:{
			
		}
	}
</script>

<style scoped>
.box {
  background-color: #ddd;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
ul {
  list-style: none;
}
ul li {
  flex: 0 0 20%;
  height: 50px;
  background-color: darkcyan;
  color: #fff;
  margin-bottom: 10px;
  margin-right: 10px;
}
.personal {
  flex: 0 0 75%;
  height: 300px;
  background-color: #fff;
}
</style>