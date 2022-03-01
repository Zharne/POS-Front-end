<template>
   <div class='back'>
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
.back{
  height: 90vh;
  margin-top: 4%;
  background-image: url(https://i.postimg.cc/7YYTNxTW/sneakerlogo.jpg);
  background-repeat: no-repeat;
  margin-left:30%;
  
}
</style>