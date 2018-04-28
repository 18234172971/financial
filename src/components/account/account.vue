<template>
  <section>
    <div id="header">
      <div id="header-nav" class="header">
        <h1>
            <span>02/02
              <!--<img src="./img/sanjiaoxing.png" alt="">-->
            </span>
          <span >
            <router-link to="/account/spending" style="color:#fff">支出</router-link>
           </span>
          <span >
            <router-link class="in-red" to="/account/account">收入</router-link>
            </span>
          <span></span>
        </h1>
      </div>
    </div>
    <!--主体-->
    <div class="in-main" style="margin-bottom: 241.6px">
      <ul class="acc-icon">
        <li  class="img-active"><div  ><img src="../../assets/img/u199.png" alt=""></div><p>餐饮</p></li>
        <li><div><img src="../../assets/img/u481.png" alt=""></div><p>零食</p></li>
        <li><div><img src="../../assets/img/u485.png" alt=""></div><p>食物</p></li>
        <li><div><img src="../../assets/img/u489.png" alt=""></div><p>水果</p></li>
        <li><div><img src="../../assets/img/u493.png" alt=""></div><p>饮料</p></li>
        <li><div><img src="../../assets/img/u498.png" alt=""></div><p>通讯</p></li>
        <li><div><img src="../../assets/img/u502.png" alt=""></div><p>娱乐</p></li>
        <li><div><img src="../../assets/img/u506.png" alt=""></div><p>运动</p></li>
        <li><div><img src="../../assets/img/u510.png" alt=""></div><p>旅行</p></li>
        <li><div><img src="../../assets/img/u514.png" alt=""></div><p>数码</p></li>
        <li><div><img src="../../assets/img/u519.png" alt=""></div><p>住房</p></li>
        <li><div><img src="../../assets/img/u523.png" alt=""></div><p>长辈</p></li>
        <li><div><img src="../../assets/img/u527.png" alt=""></div><p>孩子</p></li>
        <li><div><img src="../../assets/img/u531.png" alt=""></div><p>美容</p></li>
        <li><div><img src="../../assets/img/u535.png" alt=""></div><p>化妆</p></li>
        <li><div><img src="../../assets/img/u540.png" alt=""></div><p>学习</p></li>
        <li><div><img src="../../assets/img/u544.png" alt=""></div><p>购物</p></li>
        <li><div><img src="../../assets/img/u548.png" alt=""></div><p>礼物</p></li>
        <li><div><img src="../../assets/img/u552.png" alt=""></div><p>日用</p></li>
        <li><div><img src="../../assets/img/u556.png" alt=""></div><p>医疗</p></li>
        <li><div><img src="../../assets/img/u540.png" alt=""></div><p>学习</p></li>
        <li><div><img src="../../assets/img/u544.png" alt=""></div><p>购物</p></li>
        <li><div><img src="../../assets/img/u548.png" alt=""></div><p>礼物</p></li>
        <li><div><img src="../../assets/img/u552.png" alt=""></div><p>日用</p></li>
        <li><div><img src="../../assets/img/u556.png" alt=""></div><p>医疗</p></li>
        <li><div><img src="../../assets/img/u540.png" alt=""></div><p>学习</p></li>
        <li><div><img src="../../assets/img/u544.png" alt=""></div><p>购物</p></li>
        <li><div><img src="../../assets/img/u548.png" alt=""></div><p>礼物</p></li>
        <li><div><img src="../../assets/img/u552.png" alt=""></div><p>日用</p></li>
        <li><div><img src="../../assets/img/u556.png" alt=""></div><p>医疗</p></li>
      </ul>
      <div style="position: fixed;bottom: 70px;width: 100%;z-index: 99999;background: #fff;">
        <div>
          <img style="display: block;width: 100%;margin-bottom: 10px" src="../../assets/img/in-line.png" alt="">
          <div class="acc-beizhu">
            <span>备注:</span>
            <span class="p"> </span>
          </div>
        </div>
        <table style="width:100%;border:1px solid  rgba(171, 171, 171, 1);font-size: 28px">
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td class="c_func_btn">X</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td class="c_func_btn">C</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td class="rowspan" rowspan="2" style="position: relative">
              <router-link to="/bill/bill" style="display: block;width:100%;height:100%;line-height: 96px;color:#fff;position: absolute;text-align: center;">完成</router-link>
            </td>
          </tr>
          <tr>
            <td class="c_func_btn">-</td>
            <td>0</td>
            <td class="c_func_btn">+</td>
          </tr>
        </table>
      </div>
    </div>
    <div id="footer-nav">
      <ul>
        <li>
          <router-link to="/bill"><img src="../../assets/img/bill.png"/><span >账单</span></router-link>
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
</script>
<style scoped>
  .header>h1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
  }
  .acc-icon{
    width: 100%;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    padding-top: 10px;
    overflow: hidden;
  }
  .acc-icon>li{
    width: 20%;
    padding: 8px 0;
    height:initial;
    margin: 0 auto;
    text-align: center;
  }
  .img-active{
    background: #E86364;
    width: 30px;
    height:30px;
    padding: 5px;
    border-radius: 50%;
    margin: 0 auto;
    cursor: pointer;
    color: #fff;
  }

  .acc-icon>li>div>img{
    display: block;
    width: 30px;
    height:30px;
    margin: 0 auto;
  }
  li>p{

    color: #333;
    font-size: 14px;
    margin-top: 5px;
  }
  .acc-icon>li:nth-child(1)>p{
    /*color: #E86364;*/
  }
  .acc-beizhu{
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-size: 14px;
    margin-bottom: 18px;
  }
  table,tr,td{
    font-size: 28px;
    text-align: center;
    width: 25%;
    line-height: 48px;
    font-weight: 400;
    border: 1px solid rgba(171, 171, 171, 1);;
  }
  .rowspan{
    background-color: rgba(56, 61, 83, 1);
    color:#fff;
  }
</style>
