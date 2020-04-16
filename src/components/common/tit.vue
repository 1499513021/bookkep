<template>
  <div>
    <div class="keepTit">
      <div class="keepMenu">
        <router-link
          v-for="(item, index) in tabList"
          :key="index"
          :class="[route.meta.lower==item.index?'active':'']"
          :to="item.url"
        >{{item.name}}</router-link>
        <!-- <div
          v-for="(item, index) in tabList"
          :key="index"
          :class="[route.meta.lower==item.index?'active':'']"
          @click="change(item.url)"
        >{{item.name}}</div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      route: ""
    };
  },
  props: {
    tabList: Array
  },
  watch: {
    $route(to, from) {
      this.route = this.$route;
      console.log(to.path);
    }
  },
  created() {
    this.route = this.$route;
  },
  methods: {}
};
</script>
<style lang="" scoped>
@import "../../assets/css/public.css";
.keepMenu {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.keepMenu a {
  flex: 1;
  color: coral;
}
.keepMenu a:nth-child(n) {
  border-right: 1px solid #cccccc;
}
.keepMenu a:last-child{
   border: none;
}
.keepTit {
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