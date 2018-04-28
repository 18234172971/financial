<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1 style="display: flex;justify-content: space-between;align-items: center">
          <router-link class="return" to="/financial/financial"><img style="margin-top: 10px" src="../../assets/img/return.png" alt=""></router-link>
          华安策略优选基金
          <a style="margin-right: 10px;margin-top: 10px" href=""></a>
        </h1>
      </div>
    </div>
    <div class="w-content" style="margin-bottom: 1.84rem">
      <div class="w-one">
        <p>华安策略优选出品</p>
        <div>天天收益存取灵活</div>
        <div>日日分红 复利投资 流动性强</div>
      </div>
      <div class="w-two">
        <p>在周末、节假日正常计算收益，单不显示（收益显示 </p>
        <p>为0），该部分收益将统一在下一个交易日更新展现</p>
      </div>
      <div class="w-three">
        <p style="font-size: 16px;margin-bottom: 10px">华安策略优选出品</p>
        <p style="font-size: 14px;color:#666;">天天有收益，复利赚更多</p>
        <div style="color: #E86364;font-size: 13px;margin-top: 15px"><span>低风险</span><span>0费率</span></div>
        <h3 style="margin-top: 15px;font-size: 28px;color:#ff0000">+ 4.3800%</h3>
        <p style="font-size: 14px;color:#666;margin-top: 5px">七日年化收益率</p>
        <router-link to="/financial/buy">立即购买</router-link>
        <div class="w-huise"></div>
      </div>
      <div class="w-four">
        <p style="color: #333333;font-size: 16px;text-align: center">收益每日计算 更新一目了然</p>
        <div class="w-two" style="border-bottom: 0">
          <p>在周末、节假日正常计算收益，单不显示（收益显示 </p>
          <p>为0），该部分收益将统一在下一个交易日更新展现</p>
        </div>
        <table style="border: 1px solid #797979;text-align: center">
          <tbody>
          <tr style="font-size: 14px;line-height:30px;color:#333;margin: 10px auto;border-bottom: 1px solid #797979;padding-bottom: 10px">
            <td style="margin: 10px auto">申购日期</td>
            <td>计算收益时间</td>
            <td>收益到账时间</td>
          </tr>
          <tr style="font-size: 11px;line-height:30px;color:#666;margin: 20px auto;border-bottom: 1px solid #797979;padding-bottom: 10px">
            <td>周一15:00-周二15:00</td>
            <td>周三</td>
            <td>周四</td>
          </tr>
          <tr style="font-size: 11px;line-height:30px;color:#666;margin: 20px auto;border-bottom: 1px solid #797979;padding-bottom: 10px">
            <td>周一15:00-周二15:00</td>
            <td>周三</td>
            <td>周四</td>
          </tr>
          </tbody>

        </table>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
  .w-content{
    width: 100%;
  }
  .w-one{
    width: 100%;
    color: #333333;
    border:1px solid  rgba(121, 121, 121, 1);
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
    margin-bottom: 30px;
  }
  .w-two{
    color: #666666;
    font-size: 14px;
    border-bottom: 1px solid #999999;
    padding:0 10px;
    padding-bottom: 5px;
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
