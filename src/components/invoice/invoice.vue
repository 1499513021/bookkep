<template>
  <div id="invoiceBox">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width></el-table-column>
      <el-table-column prop="num" label="金额" width></el-table-column>
      <el-table-column prop="address" label="是否到账"></el-table-column>
      <el-table-column  label="操作">
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="edit(scope.row)" type="text" size="small">更改</el-button>
      </template>
      </el-table-column>
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
          id: '1'
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 1000,
          address: "未到账",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 1000,
          address: "未到账",   
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
  },
  methods: {
      handleClick(row) {
        console.log(row);
        this.$router.push("/intoPage/invoiceDeta")
      },
      edit() {
        this.$router.push("/intoPage/invoiceEdit")
      }
    },
};
</script>
<style lang="">
#invoiceBox {
  margin: 5px;
}

</style>