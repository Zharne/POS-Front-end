<template>
  <body>
	<section>
		<div class="container1">
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213732.png">
					</div>
					<div class="contentBx">
						<h3>Lion<br><span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213736.png">
					</div>
					<div class="contentBx">
						<h3>Frog<br><span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213641.png">
					</div>
					<div class="contentBx">
						<h3>Giraffe<br><span>Happy Birthday</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">happy</a>
					</li>
					<li>
						<a href="">birth</a>
					</li>
					<li>
						<a href="">day</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</body>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>
  body {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background: #161616;
	min-height: 100vh;
}
.container1 {
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 40px 0;
}

.container1 .card {
	position: relative;
	width: 300px;
	height: 400px;
	background: rgba(255, 255, 255, 0.05);
	margin: 20px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(10px);
}

.container1 .card .content {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: 0.5s;
}

.container1 .card:hover .content {
	transform: translateY(-20px);
}

.container1 .card .content .imgBx {
	position: relative;
	width: 150px;
	height: 150px;
	overflow: hidden;
}

.container1 .card .content .imgBx img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.container1 .card .content .contentBx h3 {
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 500;
	font-size: 18px;
	text-align: center;
	margin: 20px 0 10px;
	line-height: 1.1em;
}

.container1 .card .content .contentBx h3 span {
	font-size: 12px;
	font-weight: 300;
	text-transform: initial;
}

.container1 .card .sci {
	position: absolute;
	bottom: 50px;
	display: flex;
}

.container1 .card .sci li {
	list-style: none;
	margin: 0 10px;
	transform: translateY(40px);
	transition: 0.5s;
	opacity: 0;
}

.container1 .card:hover .sci li {
	transform: translateY(0px);
	opacity: 1;
}

.container1 .card .sci li a {
	color: #fff;
	font-size: 20px;
}
</style>
