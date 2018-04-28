<template>
  <section>
    <div id="header">
      <div id="header-nav" style="height:60px">
        <h1 style="height:60px">
                <span class="bill-word">
                    2018年 <br>
                    <span>
                        04月
                        <i class="M-date"></i>
                    </span>
                </span>
          <i></i>
          <span>
                    账单
                </span>
          <span class="bill-fangdajing">
                </span>
        </h1>
      </div>
    </div>
    <div class="background">
      <router-link  to="/echart/income">
        <h6>收入</h6>
        <div style="font-size: 16px">30000.000</div>
      </router-link>
      <router-link to="/echart/out">
        <h6>支出</h6>
        <div style="font-size: 16px">30000.000</div>
      </router-link>
    </div>
    <div class="detail">
      <div class="date"><span>02月02日  星期五</span><span>收入:100元&nbsp;&nbsp;&nbsp;&nbsp;支出:130</span></div>
      <ul>
        <li>
          <router-link to="/bill/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
        </li>
        <li>
          <router-link to="/bill/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
        </li>
        <li style="border-bottom: 0">
          <router-link to="/bill/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
        </li>
      </ul>
      <div class="date"><span>02月02日  星期五</span><span>收入:100元&nbsp;&nbsp;&nbsp;&nbsp;支出:130</span></div>
      <ul>
        <li>
          <router-link to="/bill/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
        </li>
        <li>
        <router-link to="/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
      </li>
        <li>
          <router-link to="/bill/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
        </li>
        <li style="border-bottom: 0">
          <router-link to="/bill/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
        </li><li>
        <router-link to="/bill/detail_bill">兼职 <span>100.00</span><p>15::30:33</p></router-link>
      </li>
      </ul>
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
          <router-link to="/account/account"><img src="../../assets/img/menu.png"/></router-link>
        </li>
        <li>
          <router-link to="/financial/financial"><img src="../../assets/img/money.png"/><span>理财</span></router-link>
        </li>
        <li>
          <router-link to="/mine/mine"><img src="../../assets/img/mine.png"/><span>我</span></router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>
  .bill-word>span {
    position: absolute;
    left: 0;
    top: 24px;
    font-size: 14px;
  }
  .background{
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100px;
    background: #383D53;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    top: 60px;
  }
  .background>a{
    color:#fff;
  }
  h6{
    margin-bottom: 20px;
  }
  .detail{
    margin-bottom: 70px;
    margin-top: 100px;
  }
  .date {
    padding: 3px 25px;
    font-size: 12px;
    color: #666666;
    display: flex;
    justify-content: space-between;
  }
  .detail>ul {
    padding: 3px 25px;
    border-bottom: 1px solid #666666;
    border-top: 1px solid #666666;
    margin-bottom: 25px;
  }
  .detail>ul>li {
    font-size: 14px;
    color: #000;
    margin-top: 15px;
    border-bottom: 1px solid #666666;
    position: relative;
    z-index: 9;
    text-align: left;
  }
  .detail>ul span {
    font-size: 16px;
    color: #E86364;
    text-align: right;
    position: absolute;
    right: 0;
    top: 10px;
  }
  .detail>ul p {
    font-size: 14px;
    color: #666;
    padding: 10px 0 12px 0;
  }
</style>
