<template>
  <div>
    <Struc></Struc>
    <router-view />
  </div>
</template>
<script>
import Struc from "../components/structure/struc";
export default {
  components: {
    Struc
  }
};
</script>
<style lang="" scoped>
</style>