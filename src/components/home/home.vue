<template>
  <!-- <div class="home">
    <router-link tag="div" to="/Bill" class="home_item">
      <img src="../../assets/img/new.png" />
      <div>记账</div>
    </router-link>
    <router-link tag="div" to="/Turnover" class="home_item">
      <img src="../../assets/img/order.png" />
      <div>账单</div>
    </router-link>
    <router-link tag="div" to="/House" class="home_item">
      <img src="../../assets/img/library1.png" />
      <div>库存</div>
    </router-link>
    <router-link tag="div" to="/user" class="home_item">
      <img src="../../assets/img/table.png" />
      <div>数据表</div>
    </router-link>
  </div>-->
  <div class="box">
    <div class="homebox">
      <div class="home">
        <router-link tag="div" to="/intoPage/Bill" class="home_item">
          <img src="../../assets/img/new.png" />
          <div>记账</div>
        </router-link>
        <router-link tag="div" to="/intoPage/Turnover" class="home_item">
          <img src="../../assets/img/order.png" />
          <div>账单</div>
        </router-link>
        <router-link tag="div" to="/intoPage/House" class="home_item">
          <img src="../../assets/img/library1.png" />
          <div>库存</div>
        </router-link>
        <router-link tag="div" to="/intoPage/user" class="home_item">
          <img src="../../assets/img/table.png" />
          <div>数据统计</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  beforeRouteEnter(to, from, next) {
    let bodyDom = window.document.body;
    let note = {
      backgroundImage: "url(" + require("../../assets/img/bg.jpg") + ")"
    };
    // ...
    bodyDom.style.background = note.backgroundImage;
    bodyDom.style.display = "flex";
    bodyDom.style.justifyContent = "center";
    bodyDom.style.alignContent = "center";
    bodyDom.style.alignItems = "center";
    next();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    window.document.body.style.background = "";
    next();
  }
};
</script>

<style lang="" scoped>
@import "../../assets/css/public.css";

.home {
  height: 100%;
  color: #fff;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  margin: auto;
  /* margin-top: 50%; */
  align-content: center;
}
.home_item {
  width: 49%;
  height: 150px;
  margin: 1px;
  /* border: 1px solid #dcdfe6; */
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  background: #409eff;
}
.home_item img {
  margin-top: 20px;
}
.bodySty {
  height: 100%;
  display: flex;
}

.box {
  height: 100%;
  width: 100%;
  position: absolute;
  top:0;
}
.homebox {
  color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>