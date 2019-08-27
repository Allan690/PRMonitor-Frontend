<template>
  <router-view id="app">
    <boards-component></boards-component>
  </router-view>
</template>

<script>
  import 'reset-css'
  import BoardsComponent from "@/components/presentational/BoardsComponent";

  export default {
    name: 'app',
    components: {
      BoardsComponent
    },
    props: ['activeComponent']
  }
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
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
