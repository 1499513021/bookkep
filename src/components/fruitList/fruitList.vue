<template>
  <div id="fruit">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="goods_name" label="品种" width></el-table-column>
      <el-table-column prop="goods_number" label="剩余库存(件)" width></el-table-column>
    </el-table>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   goods_name: "苹果",
        //   goods_num: 1000,
        //   edit: <router-link to="/">查看</router-link>
        // }
      ]
    };
  },
  mounted(){
    this.goods_list()
  },
  methods:{
    goods_list(){
      this.axios("/goods/selStock").then((res) => {
        if(res.data.status == 200){
          this.tableData = res.data.data
        }
        console.log(res)
      }).catch(() => {
        console.log("失败")
      })
    }
  }
};
</script>
<style lang="">
#fruit {
  margin: 5px;
}
</style>