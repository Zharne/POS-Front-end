<template>
 <div class='container'>
   <div class='home' style="background-color:red">
    <h1>what is this</h1>
    <!-- <img src=url(https://i.postimg.cc/VkVQCFtv/sneaker-lace.png)> -->
   </div>
 </div>
</template>
<script>
import UserService from '../services/user.service';
export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style scoped>

</style>