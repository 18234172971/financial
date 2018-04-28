<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1 style="display: flex;justify-content: space-between;align-items: center">
          <router-link to="/financial/wealthProducts"><img style="margin-top: 10px" src="../../assets/img/return.png" alt=""> </router-link>
          <a style="color: #fff" href="">买入</a>
          <a style="margin-right: 10px;margin-top: 10px" href=""></a>
        </h1>
      </div>
    </div>
    <div class="w-content">
      <div class="w-one">
        <p>华安策略优选基金</p>
        <p style="color: #666;font-size: 14px;padding-top: 5px">由华安策略优选有限公司提供</p>
        <div class="w-huise"></div>
      </div>
      <div class="w-two">
        <p style="font-size: 16px;margin-bottom: 18px">买入金额 </p>
        <p><span style="font-size: 32px;color:#000;margin-right: 8px">¥</span>&nbsp;&nbsp;<input autofocus  style="outline:0;position: relative;top:-5px;border: 0"  type="text" placeholder="最低买入100.00元"></p>
      </div>
      <div class="w-two">
        <p style="font-size: 13px;margin-top: 14px">0费率，预计02月06日(星期二）确认 </p>
        <p style="display: flex;justify-content: space-between">
          <span style="font-size: 13px;margin-right: 8px">份额，开始计算收益</span>
          <span style="text-align: right;color: #4AA5F8;">交易规则</span>
        </p>

      </div>
      <div class="w-three">
        <router-link to="/financial/myFinancial">立即购买</router-link>
      </div>
    </div>
  </section>
</template>
<script>

</script>
<style scoped>
  .w-content{
    width: 100%;

    box-sizing: border-box;
  }
  .w-one{
    width: 100%;
    color: #333333;
    box-sizing: border-box;
    margin-bottom: 12px;
  }
  .w-one p{
    padding-top: 15px;
    font-size: 14px;
    margin-left: 20px;
    margin-bottom: 5px;
  }
  .w-one>div{
    text-align: center;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .w-one>div:nth-child(3){
    margin-bottom: 10px;
  }
  .w-two{
    padding:0 20px;
    color: #666666;
    font-size: 14px;
    border-bottom: 1px solid #999999;
    padding-bottom: 10px;
    line-height: 18px;
  }
  .w-three{
    padding-top: 12px;
    text-align: center;
    width: 100%;
  }
  .w-huise{
    width: 100%;
    height:12px;
    background: #F2F2F2;
  }
  .w-three>div>span{
    padding: 4px 6px;
    border: 1px solid #E86364;;
  }
  .w-three>div>span:nth-child(1){
    margin-right: 10px;
  }
  .w-three>a{
    display: block;
    background: url(../../assets/img/bill_edit.png);
    margin: 10px auto;
    background-size: cover;
    height: 40px;
    color: #ffffff;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    margin-left: 25px;
    margin-right: 25px;
  }
  .w-four{
    padding: 15px 10px;
  }
  table{
    width: 100%;
  }
</style>
