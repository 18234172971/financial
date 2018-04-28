<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <span>
          <router-link to="/financial/financial" style="color:#fff">理财推荐</router-link>
          </span>
        <span class="header-red">
          <router-link to="/financial/myFinancial"  class="header-red">我的理财</router-link>
         </span>
      </div>
    </div>
    <div id="content" style="margin-bottom: 1.84rem;text-align: left">
      <div class="mf-one">
        <div>
          <p style="margin-bottom: 10px;">总资产</p>
          <p style="font-size: 18px;text-align: left">0.00</p>
        </div>
        <div style="display: flex;justify-content: space-around;margin: 20px auto;padding-right: 20px">
          <div style="border-right:1px solid #fff;width: 50%">
            <p style="margin-bottom: 10px">昨日收益（元）</p>
            <p style="margin-left: 15px">0.00</p>
          </div>
          <div style="text-align: center;width: 50%">
            <p style="margin-bottom: 10px">累计收益（元）</p>
            <p>0.00</p>
          </div>
        </div>

      </div>
      <div class="mf-two">
        <div style="padding:15px 25px 10px;display: flex;justify-content: space-between;color:#333">
          <router-link to="/financial/myFinancial">我的基金</router-link>
          <span>|</span>
          <router-link class="mf-border" to="/financial/recordDetails" style="color: #E86364;">交易记录</router-link>
          <span>|</span>
          <router-link to="/financial/returnsDetailed">收益明细</router-link>
          </div>
        <div class="mon-line"></div>
      </div>
      <div class="mf-three">
        <router-link class="yangshi" to="/financial/recordDetails">
            <span style="font-size: 16px;
color: #E86364;">买入</span>
          <span>华安策略优选基金</span>
          <span>1000.00元</span>
        </router-link>
        <router-link class="yangshi" to="/financial/recordDetails">
          <span></span>
          <span style="color: #999">2018-02-02 19:40:00</span>
          <span style="color: #FF9933;">待支付</span>
        </router-link>
        <div class="mon-line"></div>
        <router-link class="yangshi" to="/financial/recordDetails">
            <span style="font-size: 16px;
color: #E86364;">买入</span>
          <span>华安策略优选基金</span>
          <span>1000.00元</span>
        </router-link>
        <router-link class="yangshi" to="/financial/recordDetails">
          <span></span>
          <span style="color: #999">2018-02-02 19:40:00</span>
          <span style="color: #999;">已撤单</span>
        </router-link>
        <div class="mon-line"></div>
        <a style="display: flex;justify-content: space-between;padding: 15px 25px;font-size: 16px;color: #333">
            <span style="font-size: 16px;
color: #E86364;">买入</span>
          <span>华安策略优选基金</span>
          <span>1000.00元</span>
        </a>
        <a style="display: flex;justify-content: space-between;padding: 5px 25px;font-size: 14px;color: #000">
          <span></span>
          <span style="color: #999">2018-02-02 19:40:00</span>
          <span style="color: #4AA5F8;;">交易进行中</span>
        </a>
        <div class="mon-line"></div>
      </div>
    </div>
    <div id="footer-nav">
      <ul>
        <li>
          <router-link to="/bill/bill"><img src="../../assets/img/bill.png"/><span >账单</span></router-link>
        </li>
        <li>
          <router-link to="/echart/income"><img src="../../assets/img/chart.png"/><span>图表</span></router-link>
        </li>
        <li>
          <router-link to=""><img src="../../assets/img/menu.png"/></router-link>
        </li>
        <li>
          <router-link to="/financial/financial"><img src="../../assets/img/money.png"/><span>理财</span></router-link>
        </li>
        <li>
          <router-link to="mine"><img src="../../assets/img/mine.png"/><span>我</span></router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  var userMess={
    phone:13924567892,
    code:"22xx"
  }
</script>
<style>
.yangshi{
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  font-size: 16px;
  color: #333;
}
#header span{
  font-size:16px;
  padding:0 .6rem;

}
#header span:hover{
  color:#e86364;
}
.header-red{
  color: #E86364;
}
.mf-one{
  width: 100%;
  background: #383D53;
  padding: 20px 15px;
  font-size: 14px;
  color:#fff;
  box-sizing: border-box;
}
.mf-two{
  font-size: 14px;
  box-sizing: border-box;
}
.mf-two>div>span{
  position: relative;
  top:-2px;
}
.mf-two a{
  color:#333;
}
.mon-line{
  width: 100%;
  height:12px;
  background: #F2F2F2;
}

</style>
