<template>
  <div id="nav">
    <Navbar/>
    <Home/>
    
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Home from "@/views/Home.vue"

export default {
  components: {
    Navbar, Home
  }
}
</script>