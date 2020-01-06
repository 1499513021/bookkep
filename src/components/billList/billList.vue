<template>
  <div>
    <div id="keep">
      <div class="keepBox">
        <div class="keepTime">今日</div>
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
          <el-button type="primary">账单明细</el-button>
        </div>
      </div>
      <!-- ============== -->
      <div class="keepBox">
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
          <el-button type="primary">账单明细</el-button>
        </div>
      </div>
      <!-- ============ -->
    </div>
  </div>
</template>

<style lang="">
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
.keepEnd dt,dd {
  flex: 1;
  margin: 10px auto;
  /*  */
}
.keepbtn{
  padding: 10px;
  border-top: 1px solid #cccccc;
}
</style>