<template>
  <div>
        <!-- <router-link :class="[this.$route.meta.house==1?'active':'']" to="/House/graphics">统计</router-link>
        <router-link :class="[this.$route.meta.house==2?'active':'']" to="/House/fruit">库存</router-link>-->
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
          name: "统计",
          url: "/intoPage/House/graphics",
          index: 1
        },
        {
          name: "库存",
          url: "/intoPage/House/fruit",
          index: 2
        }
      ]
    };
  },
  components: {
    tit
  },
  methods:{

  }
};
</script>
<style lang="">

</style>
