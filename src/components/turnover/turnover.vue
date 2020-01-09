<template>
  <div>
    <!-- <div class="keepTit">
      <div class="keepMenu">
        <router-link :class="[this.$route.meta.listTit==1?'active':'']" to="/Turnover/list">账目记录</router-link>
        <router-link :class="[this.$route.meta.listTit==2?'active':'']" to="/Turnover/invoice">欠账记录</router-link>
      </div>     
    </div>-->
    <tit :tabList="tabList"></tit>
    <router-view></router-view>
  </div>
</template>
<script>
import tit from "../common/tit";
export default {
  name: "Turnover",
  data() {
    return {
      tabList: [
        {
          name: "账目记录",
          url: "/Turnover/list",
          index: 1
        },
        {
          name: "欠账记录",
          url: "/Turnover/invoice",
          index: 2
        }
      ]
    };
  },
  components: {
    tit
  }
};
</script>
<style lang="">
</style>
