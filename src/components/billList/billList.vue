<template>
  <div>
    <div id="keep">
      <div v-show="isShow">暂无记录</div>
      <div v-for="(item, index) in billObj" :key="index" class="keepBox">
        <div class="keepTime">{{item.createTime | formatDate}}</div>
        <div class="keepBody">
          <dl>
            <dt>{{item.marketInfo==null?item.orderInfo.type=="sale"?'销售':'采购':item.marketInfo.payInfo}}</dt>
          </dl>
        </div>
        <div>
          <dl class="keepEnd">
            <dt>合计盈亏(元):</dt>
            <dd>{{item.billPrice}}</dd>
          </dl>
        </div>
        <div class="keepbtn">
          <el-button @click="billDeta(item)" type="primary">账单明细</el-button>
        </div>
      </div>

      <el-pagination :small="true" @current-change="nextPage" :current-page="pageNum" :page-size="5" background  layout="prev, pager, next" :total="total"></el-pagination>
      <!-- ============== -->
      <!-- <div class="keepBox">
        <div class="keepTime">2020-01-01</div>
        <div class="keepBody">
          <dl>
            <dt>收入(元)</dt>
            <dd>111</dd>
          </dl>
          <dl>
            <dt>支出(元)</dt>
            <dd>1111</dd>
          </dl>
        </div>
        <div>
          <dl class="keepEnd">
            <dt>合计盈亏(元):</dt>
            <dd>10000</dd>
          </dl>
        </div>
        <div class="keepbtn">
          <router-link to="/intoPage/detaile">
            <el-button type="primary">账单明细</el-button>
          </router-link>
        </div>
      </div>-->
      <!-- ============ -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      custom_id: JSON.parse(this.$store.getters.userMsg).id,
      pageNum: 1,//当前页
      pages:2,//总页数,
      total:1,//总条数
      time: "",
      billObj: [],
      isShow: true
    };
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  created() {
    this.nextPage('1')
  },
  methods: {
    nextPage(num){
      this.reqBill(num)
    },
    billDeta(item) {
      let data = JSON.stringify(item);
      console.log(data);
      this.$router.push({
        path: "/intoPage/detaile",
        query: {
          item: data
        }
      });
    },
    reqBill(num){
      this.axios
      .get("/bill/selBillByCustomId", {
        params: {
          custom_id: this.custom_id,
          page: num
        }
      })
      .then(res => {
        console.log(res);
        if (res.data.status == 200) {
          this.billObj = res.data.data.list;
          this.pages = Number(res.data.data.pages)
          this.pageNum = parseInt(res.data.data.pageNum)
          this.total = parseInt(res.data.data.total)
          console.log(this.billObj);
          this.isShow = false;
        }
      })
      .catch(() => {
        console.log("失败");
      });
    }
  }
};
</script>
<style lang=""  scoped>
#keep {
  margin: 5px;
}
.keepTit {
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  color: coral;
  position: fixed;
  top: 0;
  background: #ffffff;
  z-index: 999999;
  width: 100%;
  border-bottom: 1px solid #cccccc;
}
.keepBox {
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 20px;
  /* margin-top: 40px; */
}
.keepTime {
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  color: lightskyblue;
  border-bottom: 1px solid #cccccc;
}
.keepBody {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
}
.keepBody dl {
  flex: 1;
  margin: 10px auto;
}
.keepBody dl:nth-child(1) {
  color: green;
}
.keepBody dl:nth-child(2) {
  color: red;
}
.keepEnd {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.keepEnd dt,
dd {
  flex: 1;
  margin: 10px auto;
  /*  */
}
.keepbtn {
  padding: 10px;
  border-top: 1px solid #cccccc;
}
</style>