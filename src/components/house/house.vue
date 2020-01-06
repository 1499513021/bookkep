<template>
  <div>
    <div class="keepTit">
      <div class="keepMenu">
        <router-link :class="[this.$route.meta.house==1?'active':'']" to="/House/graphics">统计</router-link>
        <router-link :class="[this.$route.meta.house==2?'active':'']" to="/House/fruit">库存</router-link>
      </div>     
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Turnover",
  data() {
    return {
      
    };
  }
};
</script>
<style lang="">
@import "../../assets/css/public.css";
.keepMenu{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.keepMenu a{
  flex: 1;
  color: coral !important;
}
.keepMenu a:nth-child(1){
  border-right: 1px solid #cccccc;
}
.keepTit{
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  color: coral !important;
  position: fixed;
  top: 0;
  background: #ffffff;
  z-index: 999999;
  width: 100%;
  border-bottom: 1px solid #cccccc;
}
</style>
