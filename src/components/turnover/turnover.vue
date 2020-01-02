<template>
  <div>
    <el-table :data="tableData" height="250" border style="width: 100%">
      <el-table-column prop="date" label="支出" width=""></el-table-column>
      <el-table-column prop="name" label="收入" width=""></el-table-column>
      <el-table-column prop="address" label="合计盈亏"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Turnover",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>
<style lang="">
</style>
