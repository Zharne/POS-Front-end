<template>
	<section class="the">
		<div class="container1">
      	<div v-for ="product in products" :key="product._id" class="product">
			<div class="card">
				<div class="content">
					<!-- <div class="imgBx">
						<img src="https://i.postimg.cc/wBBwzK4b/wengang-zhai-f-OL6ebf-ECQ-unsplash.jpg">
					</div> -->
					<!-- <div class="contentBx"> -->
						<!-- <h3>Lion<br><span>Happy Birthday</span></h3> -->
					<!-- </div> -->
				<ul class="sci">
					<div class="card-content">
						<img :src="product.img">
							<h3>{{product.description}}</h3>
							<p>{{product.name}}</p>
							<p>{{product.price}}</p>
						<div class="d-flex mb-3">
							<input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
							<button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
						</div>
						<div class="d-flex justify-content-end card-footer">
							<button type="button" class="btn btn-warning w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
							Edit
							</button>
							<button type="button" class="btn btn-danger w-70 ms-3" onclick="deleteProduct(${position})" >
							Delete
							</button>
						</div>	
					</div>
				</ul>
				</div>
				
			</div>
		</div>
		</div>
	</section>
</template>

<script>
export default { 
  data() {
    return {
      products: []
    }
  },
  //fetch data from database
  mounted() {
    fetch("https://pointos-backend.herokuapp.com/products")
      .then(res => res.json())
      .then(data => this.products = data)
      .catch((err) => console.log(err.message));
  }
}
</script>

<style scoped>
img{
	height: 100px;
	width: 100px;
}
  .the {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background: white;
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
	box-shadow: 0 15px 35px rgba(95, 91, 91, 0.5);
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
	margin-top: 500px;
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
