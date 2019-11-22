<template>
	<div class="main">
		<div class="c-left">
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
			<div class="d-col-6"></div>
		</div> 
		<div class="d-carousel">
			<div class="top">
				
			</div>
			<div class="c-bottom">
				<div class="box"></div>
				<div class="box"></div>
				<div class="box"></div>
			</div>
			
		</div>
		
		<div class="c-right">
			
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	created() {},
	methods: {},
	computed: {}
};
</script>

<style scoped>
.main {
	/* background-color: #42b983; */
	/* text-align: center; */
	margin: 0 auto;
	
	/* display: flex; */
}
.c-left {
	display: flex;
	width: 20%;
	height: 420px;
	background-color: #b4b4b4;
	flex-wrap: wrap;
}

.d-col-6 {
	height: 60px;
	border: 1px solid #008b8b;
}



.d-carousel{
	width: 62%;
	background-color: #008B8B;
}
.top{
	height: 65%;
	border: 1px solid red;
}
.c-bottom{
	display: flex;	
	height: 35%;
	
	
}
.box{
	border: 1px solid #FFFF00;
	flex: 1 1 33.3%;
	height: 100%;
}
.c-right {
	width: 18%;
	height: 273px;
	/* border: 2px solid #BF30AC; */
	background-color: #42B983;
}
@font-face {
	font-family: 'iconfont'; /* project id 1473594 */
	src: url('//at.alicdn.com/t/font_1473594_59ibmvfklun.eot');
	src: url('//at.alicdn.com/t/font_1473594_59ibmvfklun.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1473594_59ibmvfklun.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1473594_59ibmvfklun.woff') format('woff'), url('//at.alicdn.com/t/font_1473594_59ibmvfklun.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1473594_59ibmvfklun.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 24px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}
</style>
