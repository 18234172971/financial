<template>
  <section>
    <div id="header">
      <div id="header-nav" class="header">
        <h1>
                <span>本周
                </span>
          <span >
            <router-link to="/echart/out" style="color:#fff">支出</router-link>
          </span>
          <span >
             <router-link to="/echart/income" class="in-red">收入</router-link>
          </span>
          <span style="display: block">
            <router-link to="/echart/piechart"><img style="display: block;width: 20px;height:20px;margin-left: 10px" src="../../assets/img/income-biao.png" alt=""></router-link>
            </span>
        </h1>
      </div>
    </div>
    <!--主体-->
    <div class="in-main" style="margin-bottom: 1.84rem">
      <div class="in-chart">
        <div class="in-button">
          <div class="divs-active">周</div>
          <div>月</div>
          <div>年</div>
        </div>
        <p class="in-word">总收入：500.00</p>
        <p class="in-word">平均收入：500.00</p>
        <div class="in-tubiao">
          <img src="../../assets/img/in-zhexiantu.png" alt="">
        </div>
        <img style="display: block;width: 100%;margin-bottom: 22px;margin-top: 10px" src="../../assets/img/in-line.png" alt="">
        <div class="in-three">
          <p>支出排行榜</p>
          <div class="in-type">
            <img style="width: 30px;height:30px" src="../../assets/img/in-qunzi.png" alt="">
            <span>
                        <span class="in-word2">工资&nbsp;&nbsp;&nbsp;80% <img style="position: absolute;left:0;top:20px" src="../../assets/img/u152.png" alt=""><span style="position: relative;right: 32px;top:18px;z-index: 3;text-align: right;float: right">400</span></span>
                    </span>

          </div>
          <img style="display: block;margin-bottom: 25px" src="../../assets/img/in-line.png" alt="">
          <div class="in-type">
            <img style="width: 30px;height:30px" src="../../assets/img/-in-fan.png" alt="">
            <span>
                        <span class="in-word2">理财&nbsp;&nbsp;&nbsp;20% <img style="position: absolute;left:0;top:20px" src="../../assets/img/u164.png" alt=""></span>
                    </span>
            <span style="position: relative;right: 32px;top:18px;z-index: 3;text-align: right;float: right">100</span>
          </div>
          <img style="display: block;width: 100%;margin-bottom: 22px" src="../../assets/img/in-line.png" alt="">
        </div>

      </div>
    </div>
    <!--底部-->
    <div id="footer-nav">
      <ul>
        <li>
          <router-link to="/bill/bill"><img src="../../assets/img/bill.png"/><span >账单</span></router-link>
        </li>
        <li>
          <router-link to="/echart/income"><img src="../../assets/img/chart.png"/><span>图表</span></router-link>
        </li>
        <li>
          <router-link to="/account/account"><img src="../../assets/img/menu.png"/></router-link>
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
  export default {
    name:"Income"
  }
</script>
<style>
  .header>h1>span:nth-child(1) {
    font-size: 12px;
  }
  .in-button {
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 12px 30px;
    font-size: 13px;
    line-height: 35px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .in-button>div {
    display: block;
    box-sizing: content-box;
    text-align: center;
    width: 33.4%;
    height: 33px;
    margin: 0;
    cursor: pointer;
  }
  .in-button>div {
    border: 1px solid rgba(121, 121, 121, 1);
    float: left;
    background: #fff;
  }
  .in-button>div:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }
  .in-button .divs-active {
    color: #fff;
    background: #E86364;
    height: 33px;
    border: 1px solid #E86364;
  }
  .in-tubiao {
    width: 100%;
    height: 168px;
    margin-top: -10px;
  }
  .in-tubiao>img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .header>h1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
  }
  .in-word {
    font-size: 14px;
    margin: 0 0 10px 35px;
    text-align: left;
  }
  .in-three{
    padding: 0 20px 0 15px;
    text-align: left;
  }
  .in-three>p {
    font-size: 14px;
    margin-bottom: 10px;
    color: #666666;
  }
  .in-type {
    margin-bottom: 5px;
  }
  .in-word2 {
    position: relative;
    top: -15px;
    margin-bottom: 10px;
  }
</style>
