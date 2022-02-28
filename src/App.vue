<template>
  <!-- <div id="nav"> -->
    <Navbar/>
    <main>
    <Home/>
    <Register/>
    </main>

</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Home from "@/views/Home.vue"


export default {
  name: 'App',
  components: {
    Navbar, Home
  }
}
</script>