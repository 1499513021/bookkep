<template>
  <div id="invoiceBox">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width></el-table-column>
      <el-table-column prop="num" label="金额" width></el-table-column>
      <el-table-column prop="name" label="执行人" width></el-table-column>
      <el-table-column prop="address" label="是否到账"></el-table-column>
      <el-table-column prop="edit" label="操作"></el-table-column>
    </el-table>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/intoPage/invoiceDeta">查看</router-link>
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/intoPage/invoiceDeta">查看</router-link>
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/intoPage/invoiceDeta">查看</router-link>
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/intoPage/invoiceDeta">查看</router-link>
        }
      ]
    };
  }
};
</script>
<style lang="">
#invoiceBox {
  margin: 5px;
}
</style>