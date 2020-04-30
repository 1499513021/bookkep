<template>
  <div class="box">
    <tit :tabList="tabList"></tit>
    <div class="box_con">
      <ul>
        <li>
          <div class="left_tit">交易日期</div>
          <div class="right_con">{{billData.createTime | formatDate}}</div>
        </li>
        <li>
          <div class="left_tit">交易金额</div>
          <div v-if="!isShow" class="right_con">{{billData.orderInfo.actualPrice}}</div>
          <div v-if="isShow" class="right_con">{{billData.marketInfo.amount}}</div>
        </li>
        <li>
          <div class="left_tit">交易方式</div>
          <div class="right_con">{{type}}</div>
        </li>
        <li>
          <div class="left_tit">交易类型</div>
          <div v-if="!isShow" class="right_con">{{billData.orderInfo.type=="purchase"?"采购":"销售"}}</div>
          <div v-if="isShow" class="right_con">生活开支</div>
        </li>
        <li>
          <div class="left_tit">操作人</div>
          <div class="right_con">{{JSON.parse(this.$store.getters.userMsg).userName}}</div>
        </li>
        <li v-if="!isShow">
          <div class="left_tit">联系电话</div>
          <div class="right_con">{{billData.orderInfo.manufacturerInfo.userPhone}}</div>
        </li>
        <li v-if="!isShow">
          <div class="left_tit">商家</div>
          <div class="right_con">{{billData.orderInfo.manufacturerInfo.userName}}</div>
        </li>
        <li>
          <div class="left_tit">商品</div>
          <div v-if="!isShow" class="right_con">{{billData.orderInfo.goodsInfo.goodsName}}</div>
          <div v-if="isShow" class="right_con">{{billData.marketInfo.payInfo}}</div>
        </li>
        <li class="clearfix">
          <div class="left_tit">付款凭证</div>
          <div class="right_con">
            <img v-if="!isShow" class="img" :src="billData.orderInfo.purchImg" alt="加载失败" srcset />
            <img v-if="isShow" class="img" :src="billData.marketInfo.marketImg" alt="加载失败" srcset />
          </div>
          <!-- <div style="clear:both"></div> -->
        </li>
        <li>
          <div class="left_tit">备注</div>
          <div v-if="!isShow" class="right_con">{{billData.orderInfo.goodsInfo.goodsRemark}}</div>
          <div v-if="isShow" class="right_con">{{billData.marketInfo.remark}}</div>
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
      billData:{},
      isShow:false,
      time: "2020-01-01",
      size: 1000,
      type: 1,
      user: "张三",
      custom: "李老板",
      phone: 15122222222,
      goods: "苹果",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      remake: "fdasfdsgfdghdfshfsdgsdhfgjgfjytjtdhgfdjgfjghfjytf",
      tabList: [
        {
          name: "账单详情",
          url: "/intoPage/detaile",
          index: 11
        }
      ]
    };
  },
  components: {
    tit
  },
  filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    },
  created(){
    let data = JSON.parse(this.$route.query.item)
    this.billData = data
    if(this.billData.marketInfo){
      this.isShow = true
    }else{
      this.isShow = false
    }
    console.log(this.$route.query.item)
    console.log(JSON.parse(this.$route.query.item).id)
  }
};
</script>
<style lang="" scoped>
.box {
  margin-bottom: 100px;
}
.box_con {
  font-size: 14px;
  width: 95%;
  margin: auto;
}
div {
  word-break: break-all;
}
ul {
  list-style: none;
}
ul li {
  margin: 10px 0;
  width: 100%;
  min-height: 30px;
}
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.left_tit {
  float: left;
  width: 30%;
  text-align: left;
  color: #606266;
}
.right_con {
  float: right;
  width: 60%;
}
.img {
  width: 100%;
}
</style>