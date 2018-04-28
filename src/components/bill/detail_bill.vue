<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1>
          <router-link to="/bill/bill" style="margin-top: 15px;margin-left: 5px"><img src="../../assets/img/return.png" alt=""></router-link>
          <a style="color:#fff">详情</a>
          <router-link style="margin-right: 10px;margin-top: 15px" to="/bill/bill"><img style="margin-top: 10px" src="../../assets/img/bill_delete.png" alt=""></router-link>
        </h1>
      </div>
    </div>
    <div class="de-main">
      <div style="" class="de-cal">
        <div>
          <p class="de-two">
            <div style="display: flex;justify-content: space-between">
              <div>
                <img src="../../assets/img/eat.png" style="width: 32px;height: 32px;margin-left: 10px" alt="">
                <span class="type" style="position:relative;top: -5px">餐饮</span>
              </div>
              <div style="margin-right: 10px">
                <span  class="de-red de-red-right">300.00</span>
              </div>
            </div>
            <img style="display: block;margin-top: 10px;width: 100%" src="../../assets/img/de-xuxian.png" alt="">
          </p>
          <div style="margin: 15px 10px;text-align: center" class="de-date">
            <div style="display: flex;justify-content: space-between">
              <span>记录人</span> <span>张三</span>
            </div>
            <div style="display: flex;justify-content: space-between">
              <span>时间</span> <span>2018-02-02</span>
            </div>
            <div style="display: flex;justify-content: space-between">
              <span>备注</span>
            </div>
          </div>
        </div>
        <router-link class="bill_edit" to="/account/account">编辑</router-link>
      </div>
    </div>
  </section>

</template>
<script>
</script>
<style scoped>
  h1{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1>a{
    display: block;
  }
  .de-cal {
    padding: 30px 20px 10px 20px;
  }
  .de-cal>div {
    background: url(../../assets/img/bill_de_dotted.png);
    width: 100%;
    height: auto;
    background-size: cover;
  }
  .de-date {
    color: #A1A1A1;
    font-size: 14px;
    margin: 15px 10px;
    text-align: center;
  }
  .de-date>div {
    display: flex;
    justify-content: space-between;
  }
  .de-date>div span {
    margin-bottom: 12px;
    font-size: 14px;
  }
  .de-red-right {
    text-align: right;
  }
  .de-red {
    color: #E86364;
    font-size: 16px;
  }
  .bill_edit {
    width: 100%;
    display: block;
    background: url(../../assets/img/bill_edit.png);
    margin: 40px auto;
    background-size: cover;
    height: 40px;
    color: #ffffff;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
  }
  .return>img {
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
    left: 10px;
    top: 12px;
  }
</style>
