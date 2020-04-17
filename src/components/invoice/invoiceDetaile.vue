<template>
  <div class="box">
    <tit :tabList="tabList"></tit>
    <div class="box_con">
      <ul>
        <li>
          <div class="left_tit">交易日期</div>
          <div class="right_con">{{time}}</div>
        </li>
        <li>
          <div class="left_tit">交易金额</div>
          <div class="right_con">{{size}}</div>
        </li>
        <li>
          <div class="left_tit">是否到账</div>
          <div class="right_con">未到账</div>
        </li>
        <li>
          <div class="left_tit">操作人</div>
          <div class="right_con">{{user}}</div>
        </li>
        <li>
          <div class="left_tit">联系电话</div>
          <div class="right_con">{{phone}}</div>
        </li>
        <li>
          <div class="left_tit">商家</div>
          <div class="right_con">{{custom}}</div>
        </li>
        <li>
          <div class="left_tit">商品</div>
          <div class="right_con">{{goods}}</div>
        </li>
        <li class="clearfix">
          <div class="left_tit">欠款凭证</div>
          <div class="right_con">
            <img class="img" :src="src" alt="加载失败" srcset />
          </div>
          <!-- <div style="clear:both"></div> -->
        </li>
        <li class="clearfix">
          <div class="left_tit">收款截图</div>
          <div class="right_con">
            <img class="img" :src="src" alt="加载失败" srcset />
          </div>
          <!-- <div style="clear:both"></div> -->
        </li>
        <li>
          <div class="left_tit">备注</div>
          <div class="right_con">{{remake}}</div>
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