<template>
  <div id="nav">
    <Navbar/>
    <Home/>
    <Products/>
    
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Home from "@/views/Home.vue"
import Products from "@/views/Products.vue"

export default {
  components: {
    Navbar, Home, Products
  }
}
</script>