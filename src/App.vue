<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <VLink/>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/form">Registration</router-link>
    </div>
    <div class="main">
      <div class="spinner"></div>
      <router-view/>
    </div> 
</template>

<script>
import VLink from "./components/VLink.vue";

export default ({
  components: {
    VLink,
  },
  
});
 
</script>

<style lang="scss">
 @import "./css/main.module.scss";
  
</style>
