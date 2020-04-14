<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="支付方式">
        <el-select v-model="form.region" placeholder="请选择支付方式">
          <el-option label="微信" value="shanghai"></el-option>
          <el-option label="银行卡" value="beijing"></el-option>
          <el-option label="支付宝" value="beijing"></el-option>
          <el-option label="现金" value="beijing"></el-option>
          <el-option label="欠账" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品种类">
        <!-- <el-radio-group v-model="form.type">
          <el-radio label="苹果" name="type"></el-radio>
          <el-radio label="橘子" name="type"></el-radio>
        </el-radio-group>-->
        <el-select v-model="form.type" placeholder="请选择种类">
          <el-option label="苹果" value="shanghai"></el-option>
          <el-option label="橘子" value="beijing"></el-option>
          <el-option label="香蕉" value="beijing"></el-option>
          <el-option label="梨子" value="beijing"></el-option>
          <el-option label="草莓" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户名">
        <el-input class="custom" v-model="form.data1" placeholder="填写客户名称"></el-input>
      </el-form-item>
      <el-form-item label="客户电话">
        <el-input class="custom" v-model="form.data1" placeholder="填写客户电话"></el-input>
      </el-form-item>
      <el-form-item label="销售数量(件)">
        <el-input-number v-model="form.num" :min="1" :max="10" label="销售数量(斤)"></el-input-number>
      </el-form-item>
      <el-form-item label="销售单价(元/件)">
        <el-input-number v-model="form.num" :min="1" :max="10" label="销售单价(元/件)"></el-input-number>
      </el-form-item>
      <el-form-item label="销售金额(元)">
        <el-input-number v-model="form.num" :min="1" :max="10" label="销售单价(元/件)"></el-input-number>
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
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "sales",
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
        num: 1,
        imgUrl: ""
      },
      imgSrc: "",
      show: false
    };
  },
  created() {

  },
  methods: {
    onSubmit() {
      console.log("submit!");
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
          that.show = true;
        };
      } else {
        return;
      }
    }
  }
};
</script>
<style scope="">
@import "../../assets/css/customUI.css";
@import "../../assets/css/edit.css";

</style>