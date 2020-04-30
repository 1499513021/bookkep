<template>
  <div id="user">
    <tit :tabList="tabList"></tit>
    <div>
      <div class="user_card">
        <div class="clearfix">
          <dir class="left_tit">用户</dir>
          <dir class="right_con">李先生</dir>
        </div>
        <div class="clearfix">
          <dir class="left_tit">账号</dir>
          <dir class="right_con">151002121223</dir>
        </div>
      </div>

      <div class="income_card">
        <div class="clearfix">
          <dir class="left_tit">今日收入</dir>
          <dir class="right_con">{{incomeData.income}}元</dir>
        </div>
        <div class="clearfix">
          <dir class="left_tit">今日支出</dir>
          <dir style="color:red" class="right_con">{{incomeData.pay}}元</dir>
        </div>
        <div class="clearfix">
          <dir class="left_tit">今日盈亏</dir>
          <dir class="right_con">{{incomeData.total}}元</dir>
        </div>
      </div>
      <ul>
        <!-- <li>
          <img src="../../assets/img/out.png" />
          <span>支出明细</span>
        </li>
        <li>
          <img src="../../assets/img/into.png" />
          <span>收入明细</span>
        </li> -->
        <li>
          <div>
            <img src="../../assets/img/statistics.png" />
            <span>周统计</span>
          </div>
          <div id="week" :style="{width: '100%', height: '300px'}"></div>
        </li>
        <li>
          <div>
            <img src="../../assets/img/statistics.png" />
            <span>月统计</span>
          </div>
          <div id="month" :style="{width: '100%', height: '300px'}"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import tit from "../common/tit";
export default {
  data() {
    return {
      tabList: [
        {
          name: "个人中心",
          url: "/intoPage/user",
          index: 11
        }
      ],
      incomeData:''
    };
  },
  mounted() {
    this.drawLine();
  },
  created(){
    this.axios.get("/bill/selProfitAndLossByCustomId",{
      params:{
        "custom_id": JSON.parse(this.$store.getters.userMsg).id
      }
      }).then( (res) => {
        console.log(res)
        if(res.data.status == 200){
          this.incomeData = res.data.data
        }
      }).catch( () => {
        console.log("失败")
      })
  },
  components: {
    tit
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let week = this.$echarts.init(document.getElementById("week"));
      let month = this.$echarts.init(document.getElementById("month"));
      let option = {
        // backgroundColor: '#2c343c',

        title: {
          text: "扇形统计",
          left: "center",
          top: 20,
          textStyle: {
            color: "#606266"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "详细数据",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "生活开支" },
              { value: 310, name: "采购" },
              { value: 274, name: "销售" },
              { value: 235, name: "合计盈亏" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "#606266"
            },
            labelLine: {
              lineStyle: {
                color: "rgba(0, 0, 0, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
      // 绘制图表
      week.setOption(option);
      month.setOption(option);
    }
  }
};
</script>
<style lang="" scoped>
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.user_card {
  width: 85%;
  margin: auto;
  height: 100px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 0 10px;
}
.income_card {
  width: 85%;
  margin: auto;
  margin-top: 20px;
  height: 150px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 0 10px;
}
.income_card div{
  border-bottom: 1px solid #cccccc;
}
.income_card div:last-child {
  border-bottom: none;
}
.user_card div:first-child {
  border-bottom: 1px solid #cccccc;
}
.left_tit {
  float: left;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
}
.right_con {
  color: #409EFF;
  float: right;
  height: 50px;
  line-height: 50px;
  width: 70%;
  text-align: center;
  overflow: hidden;
}
#user {
  color: #606266;
}
.userTit {
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: coral !important;
  font-weight: 700;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
  z-index: 9999999999999;
}
ul {
  margin-bottom: 40px;
}
ul li {
  min-height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #cccccc;
  text-align: left;
  padding-left: 20px;
}
ul li img {
  vertical-align: middle;
  margin: 0 10px;
}
</style>