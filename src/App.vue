<template>
  <div id="app" class="container">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from 'components/TopHeader'

export default {
  name: 'app',
  components: { TopHeader }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
    font-size:62.5%;
    font-family:Hiragino Sans GB,Helvetice,Arial;
}
body{
    background-color: #f5f5f5;
}
.container{
    max-width:80rem;
    margin-left:auto;
    margin-right:auto;
    padding-top:7em;
}
</style>
