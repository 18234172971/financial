<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1 style="display: flex;justify-content: space-between;align-items: center">
          <router-link class="return" to="/mine/three"><img src="../../assets/img/return.png" alt=""></router-link>
          理财偏好测试
          <a style="margin-right: 10px;margin-top: 10px" href=""></a>
        </h1>
      </div>
    </div>
    <div style="height:calc(100% - 1.6rem);background: #F8F8F8;">
      <div class="content">
        <div>
          <h6>
            4.投资喜好
          </h6>
          <div class="word">
            <div>
              <span>基金</span>
              <span>金属</span>
              <span>外债</span>
              <span>储蓄</span>
            </div>
            <div>
              <span class="texiao"></span>
              <span class="texiao"></span>
              <span class="texiao"></span>
              <span class="texiao"></span>
            </div>
          </div>
          <div class="tiaozhuan">
            <router-link to="/mine/three">上一题</router-link>
            <router-link to="/mine/five">下一题</router-link>
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
    border-bottom: 1px solid #666;
    padding:25px;
    border-top: 1px solid #666;
    position: relative;
    display: flex;
  }
  .word>div{
    /*margin-bottom: 25px;*/
  }
  .word>div:nth-last-child(1){
    position: absolute;
    right: 20px;
    display: flex;
    flex-direction: column
  }
  .word>div:nth-last-child(2){
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .word>div:nth-last-child(1)>span{
    display: block;
    margin:10px 0 11px;
  }
  .tiaozhuan{
    display: flex;
    padding: 25px;

    justify-content: space-between;
    align-items: center;
  }
  .tiaozhuan a{
    font-size: 16px;
    color: #4AA5F8;
  }
  .word>div>span{
    line-height: 38px;
  }
  .texiao {
    list-style: none;
    border-radius: 50%;
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid #999;
    cursor: pointer;
    background: #fff;
    outline: none;
  }
</style>

