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
      <el-form-item label="市场开支">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="场地费、其它" name="type"></el-checkbox>
          <el-checkbox label="人工费" name="type"></el-checkbox>
          <el-checkbox label="生活费" name="type"></el-checkbox>
          <el-checkbox label="其它开支" name="type"></el-checkbox>
        </el-checkbox-group>
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
  name: 'sales',
  data() {
    return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
methods: {
    onSubmit() {
        console.log('submit!')
      }
    }
};
</script>
<style>
</style>