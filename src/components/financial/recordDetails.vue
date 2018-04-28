<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1 style="display: flex;justify-content: space-between;align-items: center">
          <router-link class="return" to="/financial/transactionRecords"><img src="../../assets/img/return.png" alt=""></router-link>
          记录详情
          <a style="margin-right: 10px;margin-top: 10px" href=""></a>
        </h1>
      </div>
    </div>
    <!--主体-->
    <div class="de-main">
      <div style="" class="de-cal">
        <div>
          <div style="text-align: center">
            <h5 style="font-size: 16px;
color: #868686;padding-top: 15px">华安策略优选基金</h5>
            <h4 style="font-size: 20px;
color: #E86364;padding-top: 22px">300.00元</h4>
            <p style="color: #6B6B6B;font-size: 14px;padding-top: 12px">待支付</p>
            <div style="color: #A1A1A1;font-size: 14px;padding: 10px 26px;line-height: 18px">
              请于02-05 15点钱完成支付，15点以后交易将自动关闭
            </div>
            <div class="re-line"></div>
          </div>
          <div style="">
            <h5 style="text-align: left;font-size: 16px;
color: #000;padding: 10px 25px">买入信息</h5>
            <p style="padding: 10px 26px;color: #A1A1A1;;font-size: 14px;padding-top: 12px;display: flex;justify-content: space-between">
              <span>买入产品</span>
              <span style="color:#868686">华安策略优选基金</span>
            </p>
            <p style="padding: 10px 26px;color: #A1A1A1;;font-size: 14px;padding-top: 12px;display: flex;justify-content: space-between">
              <span>买入金额</span>
              <span>100.00元</span>
            </p>
            <p style="padding: 10px 26px;color: #A1A1A1;;font-size: 14px;padding-top: 12px;display: flex;justify-content: space-between">
              <span>付款方式</span>
              <span >账户余额</span>
            </p>
            <p style="padding: 10px 26px;color: #A1A1A1;;font-size: 14px;padding-top: 12px;display: flex;justify-content: space-between">
              <span>买入时间</span>
              <span >2018-02-02</span>
            </p>
            <div class="re-line"></div>
          </div>
          <div style="">
            <p style="padding: 10px 26px;color: #A1A1A1;;font-size: 14px;padding-top: 12px;display: flex;justify-content: space-between">
              <span>订单号</span>
              <span>2018020430303082302382389</span>
            </p>
            <div class="re-line"></div>
          </div>
        </div>
        <div>
          <router-link class="bill_edit" to="/financial/buy">立即支付</router-link>
        </div>
      </div>

    </div>
  </section>
</template>
<script></script>
<style scoped>
  .return>img{
    width:32px;
    height: 32px;
    display: block;
    position: absolute;
    left:10px;
    top:12px;
  }
  .entry{
    padding: 0  30px 0 25px;
    font-weight: 400;
    font-style: normal;
    color: #333333;
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: left;
  }
  .entry>span:nth-child(2){
    font-size: 16px;

  }
  .de-red{
    color: #E86364;
    font-size: 16px;
  }
  .de-huise{
    display: block;
    width: 100%;
    height:13px;
  }
  .de-date{
    color: #A1A1A1;
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
  }
  .de-cal{
    padding:10px 20px 10px  20px;

  }
  .de-cal>div{
    background: url(../../assets/img/bill_de_dotted.png);
    width: 100%;
    height:auto;
    background-size: cover;
  }
  .type{
    font-size: 16px;
  }
  .de-red-right{
    text-align: right;
  }
  .de-two{
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    margin: 10px;
  }
  .de-two>img{
    display: block;
  }
  .de-two>span{

  }
  .de-two>span>span:nth-child(2){
    position: absolute;
    right:0;
    top:12px;
  }
  .de-date>div span{
    margin-bottom: 12px;
    font-size: 14px;
  }
  .bill_edit{
    width: 100%;
    display: block;
    background: url(../../assets/img/bill_edit.png);
    margin: 40px auto;
    background-size: cover;
    height: 40px;
    color: #ffffff ;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
  }
  .content{
    padding: 25px;
  }
  .content>div{
    width: 100%;
    border-radius: 5px;
    background: #fff;
    padding-top: 25px;
  }
  .content>div>h6{
    border: 1px solid transparent ;
    margin-left: 25px;
    font-size: 20px;
    margin-bottom: 8px;
  }
  .word{
    font-size: 16px;
    color: #383D53;
    padding:25px;
    padding-bottom: 0;
  }
  .word>div{
    display: flex;justify-content: space-between
  }
  .word>div>span{
    display: block
  }
  .word>div>span>img{
    position:relative;top:-10px;display: block;width: 130px;height:40px
  }
  .tiaozhuan{
    text-align: center;
    padding: 10px;

    justify-content: space-between;
    align-items: center;
  }
  .tiaozhuan a{
    font-size: 16px;
    color: #4AA5F8;
  }
  .bill_edit {
    width: 100%;
    display: block;
    background: url(../../assets/img/bill_edit.png);
    margin: 0 auto;
    margin-top: 20px;
    background-size: cover;
    height: 40px;
    color: #ffffff;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
  }

</style>
