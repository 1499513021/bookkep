<template>
  <div>
    <tit :tabList="tabList"></tit>
    <el-form ref="form" :model="form" label-width="80px">
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
import tit from "../common/tit";
export default {
  name: "out",
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
      },
      imgSrc: "",
      show: false,
      tabList: [
        {
          name: "欠账还款",
          url: "/intoPage/invoiceEdit",
          index: 11
        }
      ]
    };
  },
  created() {},
  components: {
    tit
  },
  methods: {
    onSubmit() {
      let that = this;
      let formData = new FormData();
      formData.append("data", that.form.data1);
      console.log(formData);
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
<style>
@import "../../assets/css/customUI.css";
@import "../../assets/css/edit.css";
</style>
