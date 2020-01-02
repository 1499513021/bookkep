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
        <el-radio-group v-model="form.type">
          <el-radio label="苹果" name="type"></el-radio>
          <el-radio label="橘子" name="type"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="采购数量(斤)">
        <el-input-number v-model="form.num" :min="1" :max="10" label="销售数量(斤)"></el-input-number>
      </el-form-item>
      <el-form-item label="采购单价(元/斤)">
        <el-input-number v-model="form.num" :min="1" :max="10" label="销售单价(元/斤)"></el-input-number>
      </el-form-item>
      <el-form-item label="采购金额">
        <el-input-number v-model="form.num" :min="1" :max="10" label="销售单价(元/斤)"></el-input-number>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
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
      }
    };
  },
  created() {
    
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style>
</style>
