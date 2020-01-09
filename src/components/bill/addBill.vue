<template>
  <div>
      <!-- <router-link :class="[this.$route.meta.lower==0?'active':'']" to="/Bill/out">采购</router-link>
      <router-link :class="[this.$route.meta.lower==1?'active':'']" to="/Bill/sales">销售</router-link>
      <router-link :class="[this.$route.meta.lower==2?'active':'']" to="/Bill/life">生活开支</router-link>-->
      <tit :tabList="tabList"></tit>
    <router-view></router-view>
  </div>
</template>
<script>
import tit from "../common/tit";
export default {
  name: "bill",
  data() {
    return {
      tabList: [
        {
          name: "采购",
          url: "/Bill/out",
          index: 0
        },
        {
          name: "销售",
          url: "/Bill/sales",
          index: 1
        },
        {
          name: "生活开支",
          url: "/Bill/life",
          index: 2
        }
      ]
    };
  },
  components: {
    tit
  },
  created() {}
};
</script>

<style lang="">
@import "../../assets/css/public.css";
/* .header {
  height: 3rem;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: space-around;
  align-items: center;
}
.header a {
  display: block;
  line-height: 3rem;
  height: 100%;
  flex: 1;
} */
</style>
