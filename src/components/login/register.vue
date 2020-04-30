<template>
  <div class="box">
    <div class="sonBox">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px">
        <h3 class="tit">注册账号</h3>
        <el-form-item label="账号" prop="user">
          <el-input placeholder="填写注册账号" name="user_phone" v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="userName">
          <el-input name="user_name" placeholder="填写姓名" v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input placeholder="输入密码" type="password" name="user_password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input placeholder="再次确认密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <el-form-item>
            <router-link to="/login"><div>已有账号,去登录>></div></router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import bgFunc from "../../assets/js/bg";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }
        callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        user: "",
        userName:''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        user: [{ validator: validateUser, trigger: "blur" }],
        userName: [{ validator: validateUser, trigger: "blur" }]
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
    submitForm(formName) {
      let form = this.$refs.ruleForm.$el;
      let formData = new FormData(form);
      console.log(formData)
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(that.ruleForm.user);
          that.axios.post("/custom/register", 
          formData
          ).then((res) => {
            console.log(res)
            if(res.data.status==200){
              that.$router.push("/login")
            }
          }).catch(() => {
            console.log("失败")
          });
        } else {
          console.log("校验不通过");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="" scoped>
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