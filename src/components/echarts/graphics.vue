<template>
  <div>
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {
      goods: "",
      goods_name: '',
      goods_num: ''
    };
  },
  mounted() {
    let that = this
    this.axios("/goods/selStock").then( res => {
      console.log(res)
      if(res.data.status == 200){
        return that.goods = [...res.data.data]
      }
    }).then( (arr) => {
      that.goods_name = arr.map(function(item){
        return item.goods_name
      })
      that.goods_num = arr.map(function(item){
        return item.goods_number
      })
    }).then(() => {
      that.drawLine();
    }).catch(() => {
      console.log("失败")
    })
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let option = {
        title: {
          text: "水果统计(件)",
          subtext: "数据来自网络"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          // data: ["2011年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          // data: ["苹果", "橘子", "葡萄", "香蕉", "梨子", "菠萝"]
          data: this.goods_name
        },
        series: [
          {
            // name: "2011年",
            type: "bar",
            // data: [1000, 2000, 3000, 4000, 5000, 6000]
            data: this.goods_num
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option);
    }
  }
};
</script>