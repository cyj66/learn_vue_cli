<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/* 在css中引入css文件必须用@import，不能像在html中用link，在js中用import和require*/
  @import "./assets/css/base.css";  

</style>
