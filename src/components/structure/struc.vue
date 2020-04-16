<template>
  <div>
    <div class="footer">
      <router-link to="/home" :class="[this.$route.meta.index==4?'active':'']">
        <!-- <img src="@/assets/img/home.png" alt srcset /> -->
        <i class="el-icon-menu"></i>
        主页
      </router-link>
      <router-link to="/intoPage/Turnover" :class="[this.$route.meta.index==0?'active':'']">
        <!-- <img src="@/assets/img/list.png" alt srcset /> -->
        <i class="el-icon-date"></i>
        账单
      </router-link>
      <router-link to="/intoPage/Bill" :class="[this.$route.meta.index==1?'active':'']">
        <!-- <img src="@/assets/img/edit.png" alt srcset /> -->
        <i class="el-icon-edit-outline"></i>
        记账
      </router-link>
      <router-link to="/intoPage/House" :class="[this.$route.meta.index==2?'active':'']">
        <!-- <img src="@/assets/img/library.png" alt srcset /> -->
        <i class="el-icon-house"></i>
        库存
      </router-link>
      <router-link to="/intoPage/user" :class="[this.$route.meta.index==3?'active':'']">
        <!-- <img src="@/assets/img/user.png" alt srcset /> -->
        <i class="el-icon-user"></i>
        我的
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
  font-size: 14px;
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
i{
  font-size: 30px;
  display: block;
  margin: auto;
}
</style>
