<template>
  <div id="app">
    <Struc></Struc>
    <router-view/>
  </div>
</template>

<script>
import Struc from '../src/components/structure/struc'
export default {
  name: 'App',
  components: {
    Struc
  }
}
</script>
<style>
@import '../src/assets/css/page.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
