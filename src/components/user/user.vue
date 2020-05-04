<template>
  <div id="user">
    <tit :tabList="tabList"></tit>
    <div>
      <div class="user_card">
        <div class="clearfix">
          <dir class="left_tit">用户</dir>
          <dir class="right_con">{{JSON.parse(this.$store.getters.userMsg).userName}}</dir>
        </div>
        <div class="clearfix">
          <dir class="left_tit">账号</dir>
          <dir class="right_con">{{JSON.parse(this.$store.getters.userMsg).userPhone}}</dir>
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
        </li>-->
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
      <div><button @click="loginOut" class="loginOut">退出登录</button></div>
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
      obj: {
        purchase: "",
        sale: "",
        market: "",
        heji: "",
        arrears: ""
      },
      incomeData: "",
      custom_id: JSON.parse(this.$store.getters.userMsg).id
    };
  },
  mounted() {},
  created() {
    this.axios
      .get("/bill/selProfitAndLossByCustomId", {
        params: {
          custom_id: this.custom_id
        }
      })
      .then(res => {
        console.log(res);
        if (res.data.status == 200) {
          this.incomeData = res.data.data;
        }
      })
      .catch(() => {
        console.log("失败");
      }),
      this.weekBook();
      this.monthBook();
  },
  components: {
    tit
  },
  methods: {
    loginOut(){
      localStorage.removeItem("userMsg")
      this.$router.push('/login')
    },
    weekBook() {
      this.axios
        .get("/bill/fanChartByCustomId", {
          params: {
            custom_id: this.custom_id
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.drawLine(this.obj,'week');
          }
        });
    },
    monthBook() {
      this.axios
        .get("bill/fanChartByCustomIdMonth", {
          params: {
            custom_id: this.custom_id
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.drawLine(this.obj,'month');
          }
        });
    },
    drawLine(obj, el) {
      // 基于准备好的dom，初始化echarts实例
      let arr = obj.map(item => {
        return item.billType;
      });
      console.log(arr);
      let arrCon = obj.map(item => {
        return item.total;
      });
      console.log(arrCon);
      let dom = this.$echarts.init(document.getElementById(el));
      let option = {
        legend: {},
        tooltip: {},
        xAxis: {
          type: "category",
          data: arr
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: arrCon,
            type: "bar"
          }
        ]
      };
      // 绘制图表
      dom.setOption(option);
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
.income_card div {
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
  color: #409eff;
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
.loginOut{
  height: 40px;
  width: 40%;
  border-radius: 200px;
  background: #409EFF;
  font-size: 14px;
  color: #fff;
}
</style>