<template>
  <div class="box">
    <el-form ref="form" :model="form" label-width="80px">
        <h3 class="tit">登录记账系统</h3>
      <el-form-item label="登录名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.name"></el-input>
      </el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button>注册</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        num: 1
      }
    };
  }
};
</script>
<style lang="">
/* @import "../../assets/css/customUI.css"; */
.box{
    width: 90%;
    margin: auto;
    margin-top: 50%
}
.tit{
    margin-bottom: 50px;
}
</style>