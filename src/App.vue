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

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #nav {
    width: 100%;
    position: relative;
  }

  #nav a {
    margin: 10px;
    padding: 5px 10px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
  }

  #nav a:hover {
    font-weight: bold;
  }

  #nav a:before {
    content: '';
    width: 0;
    height: 2px;
    background-color: #A3E4D7;
    position: absolute;
    top: 32px;
    transition: .5s;
  }

  #nav a:nth-child(odd):hover:before {
    width: 50px;
  }

   #nav a:nth-child(even):hover:before {
    width: 100px;
  }

  .main {
    width: 100%;
    margin: 20px auto;
    position: relative;
  }

  .spinner {
    width: 18px;
    height: 18px;
    border: 10px solid #00BFA5;
    border-radius: 50%;
    position: absolute;
    animation-name: spinner-name;
    animation-duration: .5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-timing-function: linear;
    left: calc(50% - 25px);
    top: 68px;
  }

  @keyframes spinner-name {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  .spinner:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
    top: 18px;
    z-index: 1;
    background-color: white;
    transform: rotate(35deg);
  }

</style>
