<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="支付方式">
        <el-select name="pay_id" v-model="form.pay_id" placeholder="请选择支付方式">
          <el-option label="微信" value="1"></el-option>
          <el-option label="银行卡" value="2"></el-option>
          <el-option label="支付宝" value="3"></el-option>
          <el-option label="现金" value="4"></el-option>
          <el-option label="欠账" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品种类">
        <!-- <el-radio-group v-model="form.type">
          <el-radio label="苹果" name="type"></el-radio>
          <el-radio label="橘子" name="type"></el-radio>
        </el-radio-group> -->
        <el-select v-model="form.goods_id" name="goods_id" placeholder="请选择种类">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.goodsName"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="user_name" label="客户名">
        <el-input class="custom" name="user_name" v-model="form.user_name" placeholder="填写客户名称"></el-input>
      </el-form-item>
      <el-form-item prop="user_phone" label="客户电话">
        <el-input class="custom" name="user_phone" v-model="form.user_phone" placeholder="填写客户电话"></el-input>
      </el-form-item>
      <el-form-item label="采购数量(件)">
        <el-input-number name="purch_number" v-model="form.purch_number" :min="1" label="销售数量(件)"></el-input-number>
      </el-form-item>
      <el-form-item label="采购单价(元/件)">
        <el-input-number name="purch_price" v-model="form.purch_price" :min="1" label="销售单价(元/件)"></el-input-number>
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
        <el-image v-if="show" class="preview" :src="form.imgSrc"></el-image>
        <el-button size="small" type="primary" @click="choiceImg">选择图片</el-button>
      </el-form-item>
      <el-form-item label="合计金额(元)">
        <el-input-number name="actual_price" v-model="form.actual_price" :min="1"  label="合计金额"></el-input-number>
      </el-form-item>
      <el-form-item label="备注">
        <el-input name="purch_remark" :autosize="{ minRows: 4, maxRows: 10}" type="textarea" v-model="form.purch_remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "out",
  data() {
    return {
      options: [], 
      form: {
        pay_id: '1',//支付方式
        goods_id: '',//种类
        customer_id: JSON.parse(this.$store.getters.userMsg).id,
        purch_number: '',//数量
        purch_price: '',//产品单价
        user_name: '',
        user_phone: '',
        purch_remark: '',
        type: 'purchase', //类型采购\销售
        actual_price: '',   //总价
        imgSrc: "",
      },
      rules:{
        user_name: [{required: true, message: '请输入客户名', trigger: 'change'}],
        user_phone:[{required: true, message: '请输入电话号码', trigger: 'change'}],
        imgSrc: [{required: true, message: '请选择支付截图', trigger: 'change'}]
      },
      imgSrc: "",
      show: false
    };
  },
  created() {
    this.axios('/goods/selAll').then( (res) => {
      console.log(res)
      if(res.data.status == 200){
        this.options = res.data.data
        this.form.goods_id = this.options[0].goodsName
        console.log(this.options)
      }
    })
  },
  methods: {
    onSubmit() {
      let file = this.$refs.filElem.files[0]
      let form = this.$refs.form.$el
      let formData = new window.FormData(form)
      formData.append("img",file)
      formData.set('pay_id',this.form.pay_id)
      formData.set('customer_id',this.form.customer_id)
      formData.set('goods_id',this.form.goods_id)
      formData.set('customer_id',this.form.customer_id)
      formData.set('type',this.form.type)
      this.$refs["form"].validate((valid) => {
          if (valid) {
            this.axios.post('/order/addOrder',formData).then( (res) =>{
              console.log(res)
              if(res.data.status == 200){
                this.$router.push("/intoPage/Turnover")
              }
            })
          } else {
            console.log('检验未通过');
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
          that.form.imgSrc = this.result;
          that.show = true;
        };
      } else {
        return;
      }
    },
    resetForm() {
        this.$refs.form.resetFields();
      }
  }
};
</script>
<style>
@import "../../assets/css/customUI.css";
@import "../../assets/css/edit.css";
</style>
