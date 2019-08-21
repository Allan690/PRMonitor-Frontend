<template>
  <div id="app">
    <el-container>
<!--      Side navigation-->
      <el-aside :span="8">
        <div class="logo-container">
          <img src="./assets/logo.png" width="135px"/>
        </div>

        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
          <el-submenu index="1">

            <template slot="title">
              <img src="./assets/github-logo.png"
                   width="18"
                   alt="github_logo"
              />
<!--              Github pane-->
              <span class="navigator-one">Github</span>
            </template>

            <el-menu-item-group title="Github Tasks">
              <el-menu-item index="1-1">
                <i class="el-icon-finished"></i>
                <span>Finished Tasks</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-help"></i>
                <span>Merged Tasks</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
<!--         End of Github pane start of Jira pane-->
          <el-submenu index="2">
            <template slot="title">
              <img src="./assets/jira.png"
                   style="margin-left: -5px"
                   width="30" alt="jira_logo"/>
              <span class="navigator-two">Jira</span>
            </template>
            <el-menu-item-group title="Jira Stories">
              <el-menu-item index="2-1">
                <i class="el-icon-full-screen"></i>
                <span>All Stories</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-data-line"></i>
               <span>In Progress</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-scissors"></i>
                <span>QA</span>
              </el-menu-item>
              <el-menu-item index="2-4">
                <i class="el-icon-data-analysis"></i>
               <span>Validation</span>
              </el-menu-item>
              <el-menu-item index="2-5">
                <i class="el-icon-circle-check"></i>
                <span>Done</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
<!--        End of Jira Pane-->
      </el-aside>

      <!--Search box component-->
      <el-container :span="16">
        <el-header>
          <div class="inner-form">
            <div class="input-field first-wrap">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>
              <input id="search"
                     type="text"
                     placeholder="Search for jira story..."
              />
<!--              Search button-->
              <div class="input-field second-wrap">
                <button class="btn-search"
                        type="button"
                >SEARCH</button>
              </div>
<!--              End of button-->
            </div>
          </div>
        </el-header>

           <!--        Main body-->
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-container">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
          <get-sprint-stories></get-sprint-stories>
        </el-main>
<!--        End of body-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import getSprintStories from "@/components/getSprintStories";
  import 'reset-css'
  export default {
    name: 'app',
    components: {
      // HelloWorld
      getSprintStories
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .container {
    max-width: 1200px;
    margin: auto;
  }
  .el-aside {
    background: #545c64;
    color: white;
    min-height: 100vh;
  }
  .logo-container {
    padding: 22px;
    background: #434A50;
  }
  .el-menu {
    border-right: 0 !important;
  }
  .el-main {
    background: #EEF1F4;
  }
  .breadcrumb-container {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .button-container {
    margin-top: 20px;
  }
  .navigator-one {
    margin-left: 8px;
    font-weight: bold;
    font-kerning: normal;
    font-size: medium;
  }
  .navigator-two {
    margin-left: 3px;
    font-weight: bold;
    font-kerning: normal;
    font-size: medium;
  }
  .inner-form {
    align-items: center;
    border-radius: 34px;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    color: rgb(0,0,0);
    box-sizing: border-box;
    width: 50%;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .input-field.first-wrap {
    flex-grow: 1;
    display: flex;
    align-items: center;
    background-attachment: scroll;
    background-clip: border-box;
    background-image: none;
    background-color: rgb(217, 241, 227);
    background-origin: padding-box;
    background-size: auto;
    color: rgb(0,0,0);
    box-sizing: border-box;
  }
  .input-field.first-wrap input
  {
    flex-grow: 1;
    height: 100%;
    background: transparent;
    border: 0;
    display: block;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #000;
    outline: none;
  }
  .input-field.second-wrap {
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    display: block;
    font-family: Poppins, sans-serif;
    height: 50px;
    line-height: 18.4px;
    min-width: 216px;
    outline: none;
    -webkit-text-size-adjust: 100%;
  }
  .input-field.first-wrap .svg-wrapper {
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-field.second-wrap .btn-search {
    align-items: flex-start;
    height: 100%;
    width: 100%;
    white-space: nowrap;
    font-size: 16px;
    color: #fff;
    border: 0;
    cursor: pointer;
    position: relative;
    z-index: 0;
    background: #545c64;
    transition: all .2s ease-out, color .2s ease-out;
    font-weight: 300;
    outline: none;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
  }
</style>
