<template>
  <div id="fruit">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="品种" width></el-table-column>
      <el-table-column prop="num" label="剩余库存(斤)" width></el-table-column>
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
          date: "苹果",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/">查看</router-link>
        },
        {
          date: "橘子",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/">查看</router-link>
        },
        {
          date: "香蕉",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/">查看</router-link>
        },
        {
          date: "甘蔗",
          name: "王小虎",
          num: 1000,
          address: "未到账",
          edit: <router-link to="/">查看</router-link>
        }
      ]
    };
  }
};
</script>
<style lang="">
#fruit {
  margin: 5px;
}
</style>