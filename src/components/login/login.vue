<template>
  <div class="box">
    <div class="sonBox">
      <el-form ref="form" :rules="rules"  :model="form" label-width="80px">
        <h3 class="tit">登录记账系统</h3>
        <el-form-item label="登录名" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit('form')">登录</el-button>
          <router-link tag="span" to="/register">
            <el-button>注册</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import bgFunc from "../../assets/js/bg";
export default {
  data() {
    var validate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }
        callback();
    };
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validate, trigger: "blur" }],
        name: [{ validator: validate, trigger: "blur" }]
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    bgFunc.before(to, from, next);
  },
  beforeRouteLeave(to, from, next) {
    bgFunc.Leave(to, from, next);
  },
  methods: {
    submit(form){
      let that = this;
      this.$router.push("/home")
      this.$refs[form].validate(valid => {
        if (valid) {
          that.axios("/custom/login", {
            "user_phone": that.ruleForm.user,
            "user_password": that.ruleForm.pass
          }).then((res) => {

          }).catch(() => {

          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="" scoped>
/* @import "../../assets/css/customUI.css"; */
.box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.sonBox {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.tit {
  margin-bottom: 50px;
}
</style>