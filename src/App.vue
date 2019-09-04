<template>
  <router-view id="app">
    <LoginScreen></LoginScreen>
  </router-view>
</template>

<script>
  import 'reset-css'
  import LoginScreen from "@/components/container/LoginScreen";

  export default {
    name: 'app',
    components: {
      LoginScreen
    },
    data() {
      return { currentComponent: 'LoginScreen' }
    }
  }
</script>

<style>
  #app {
    font-family: "Raleway", sans-serif;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  html {
    min-height: 100%;
  }

  body {
    min-height: 100vh;
  }
</style>
