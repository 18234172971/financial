<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1 style="display: flex;justify-content: space-between;align-items: center">
          <router-link class="return" to="/mine/five"><img src="../../assets/img/return.png" alt=""></router-link>
          理财偏好测试
          <a style="margin-right: 10px;margin-top: 10px" ></a>
        </h1>
      </div>
    </div>
    <div style="height:calc(100% - 1.6rem);background: #F8F8F8;">
      <div class="content">
        <div>
          <h6 style="font-size: 28px;color: #4AA5F8;">
            稳健型
          </h6>
          <div class="word">
            <div ><span style="display: block" >收益需求</span> <span style=""><img style="" src="../../assets/img/u1946.png" alt=""></span></div>
            <div><span style="display: block" >实际风险承受</span> <span style=""><img style="" src="../../assets/img/u1946.png" alt=""></span></div>
            <div><span style="display: block" >心里风险承受</span> <span style=""><img style="" src="../../assets/img/u1946.png" alt=""></span></div>
            <div><span style="display: block" >流动需求</span> <span style=""><img style="" src="../../assets/img/u1946.png" alt=""></span></div>
            <div><span style="display: block" >建议理财金额</span> <span style=""><img style="" src="../../assets/img/u1946.png" alt=""></span></div>
            <router-link class="bill_edit" to="/mine/mine">确认偏好结果</router-link>
          </div>
          <div class="tiaozhuan">
            <router-link to="/mine/fpreference">新测评重</router-link>
          </div>
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
    top:5px;
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
