<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="支付方式">
        <el-select v-model="form.region" placeholder="请选择支付方式">
          <el-option label="微信" value="shanghai"></el-option>
          <el-option label="银行卡" value="beijing"></el-option>
          <el-option label="支付宝" value="beijing"></el-option>
          <el-option label="现金" value="beijing"></el-option>
          <el-option label="票据" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="市场开支">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="场地费" name="type"></el-checkbox>
          <el-checkbox label="人工费" name="type"></el-checkbox>
          <el-checkbox label="生活费" name="type"></el-checkbox>
          <el-checkbox label="房租+生活" name="type"></el-checkbox>
          <el-checkbox label="包装费" name="type"></el-checkbox>
          <el-checkbox label="运费（近转运输、长途运输）" name="type"></el-checkbox>
          <el-checkbox label="其它开支" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="支付/收据截图">
        <input
          @change="getFile"
          ref="filElem"
          id="imgFile"
          class="file_hide"
          type="file"
          value="选择图片"
        />
        <el-image v-if="show" class="preview" :src="imgSrc"></el-image>
        <el-button size="small" type="primary" @click="choiceImg">选择图片</el-button>
      </el-form-item>
      <el-form-item label="备注">
        <el-input :autosize="{ minRows: 4, maxRows: 10}" type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "life",
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
        desc: ""
      },
      imgSrc: "",
      show: false
    };
  },
  created() {},
  methods: {
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