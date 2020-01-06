<template>
  <div>
    <div class="footer">
      <router-link to="/Turnover" :class="[this.$route.meta.index==0?'active':'']">
        <img src="@/assets/img/list.png" alt srcset />账单
      </router-link>
      <router-link to="/Bill" :class="[this.$route.meta.index==1?'active':'']">
        <img src="@/assets/img/edit.png" alt srcset />记账
      </router-link>
      <router-link to="/House" :class="[this.$route.meta.index==2?'active':'']">
        <img src="@/assets/img/library.png" alt srcset />库存
      </router-link>
      <router-link to="/user" :class="[this.$route.meta.index==3?'active':'']">
        <img src="@/assets/img/user.png" alt srcset />我的
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Struc",
  created() {
    console.log();
    //
  }
};
</script>
<style scoped>
@import "../../assets/css/public.css";
.footer {
  /* height: 5rem; */
  border-top: 1px solid #ccc;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  z-index: 9999999;
  background: #fff;
}
.footer a {
  flex: 1;
  height: 100%;
  /* line-height: 5rem; */
}
img {
  width: 30px;
  display: block;
  margin: auto;
}
</style>
