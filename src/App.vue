<template>
  <div id="nav">
    <Navbar/>
    <Home/>
    <!-- <Cart/> -->
    
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Home from "@/views/Home.vue"
// import Cart from "@/components/Cart.vue"

export default {
  components: {
    Navbar, Home,
  }
}
</script>