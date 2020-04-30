<template>
  <div>
    <el-form ref="form" :rules="rule" :model="lifeForm" label-width="80px">
      <el-form-item label="支付方式">
        <el-select name="pay_id" v-model="lifeForm.pay_id" placeholder="请选择支付方式">
          <el-option label="微信" value="1"></el-option>
          <el-option label="银行卡" value="2"></el-option>
          <el-option label="支付宝" value="3"></el-option>
          <el-option label="现金" value="4"></el-option>
          <el-option label="票据" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="pay_info" label="市场开支">
        <el-checkbox-group v-model="lifeForm.pay_info">
          <el-checkbox label="场地费" value="场地费"></el-checkbox>
          <el-checkbox label="人工费" value="人工费"></el-checkbox>
          <el-checkbox label="生活费" value="生活费"></el-checkbox>
          <el-checkbox label="房租+生活" value="房租+生活"></el-checkbox>
          <el-checkbox label="包装费" value="包装费"></el-checkbox>
          <el-checkbox label="运费（近转运输、长途运输）" value="运费（近转运输、长途运输）"></el-checkbox>
          <el-checkbox label="其它开支" value="其它开支"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="支付/收据截图" prop="imgSrc">
        <input
          @change="getFile"
          ref="filElem"
          id="imgFile"
          class="file_hide"
          type="file"
          value="选择图片"
        />
        <el-image v-if="show" class="preview" :src="lifeForm.imgSrc"></el-image>
        <el-button size="small" type="primary" @click="choiceImg">选择图片</el-button>
      </el-form-item>
      <el-form-item label="合计金额(元)">
        <el-input-number name="amount" v-model="lifeForm.amount" :min="1" label="合计金额"></el-input-number>
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          name="remark"
          :autosize="{ minRows: 4, maxRows: 10}"
          type="textarea"
          v-model="lifeForm.remark"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="addLife" type="primary">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "life",
  data() {
    return {
      lifeForm: {
        pay_id: "1",
        pay_info: [],
        custom_id: JSON.parse(this.$store.getters.userMsg).id,
        market_img: "",
        amount: "",
        remark: "",
        imgSrc: "",
      },
      rule: {
        pay_info: [{ required: true, message: "请选择市场开支", trigger: "change" }],
        imgSrc:[{ required: true, message: "请添加支付截图", trigger: "change" }],
      },
      imgSrc: "",
      show: false
    };
  },
  created() {},
  methods: {
    addLife() {
      let form = this.$refs.form.$el;
      let formData = new window.FormData(form);
      let fileImg = this.$refs.filElem.files[0];
      formData.append("market_img", fileImg);
      formData.append("pay_info", this.lifeForm.pay_info.toString());
      formData.append("custom_id", this.lifeForm.custom_id);
      formData.set("pay_id", this.lifeForm.pay_id);
      this.$refs.form.validate(valid => {
        if (valid) {
          this.axios.post("/market/addMarket", formData).then(res => {
            console.log(res);
            if (res.data.status == 200) {
              this.$router.push("/intoPage/Turnover");
            }
          });
        } else {
          console.log("校验失败");
          return false;
        }
      });
    },
    choiceImg() {
      this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
    },
    getFile() {
      var that = this;
      const inputFile = this.$refs.filElem.files[0];
      console.log(inputFile);
      if (inputFile) {
        if (
          inputFile.type !== "image/jpeg" &&
          inputFile.type !== "image/png" &&
          inputFile.type !== "image/gif"
        ) {
          alert("不是有效的图片文件！");
          return;
        }
        this.imgInfo = Object.assign({}, this.imgInfo, {
          name: inputFile.name,
          size: inputFile.size,
          lastModifiedDate: inputFile.lastModifiedDate.toLocaleString()
        });
        const reader = new FileReader();
        reader.readAsDataURL(inputFile);
        reader.onload = function(e) {
          that.imgSrc = this.result;
          that.lifeForm.imgSrc = this.result;
          that.show = true;
        };
      } else {
        return;
      }
    }
  }
};
</script>
<style lang="">
@import "../../assets/css/customUI.css";
@import "../../assets/css/edit.css";
</style>