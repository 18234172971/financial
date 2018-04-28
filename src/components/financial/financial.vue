<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <span class="header-red">
          <router-link to="/money" class="header-red">理财推荐</router-link>
        </span>
        <span>
          <router-link to="/financial/myFinancial" style="color:#fff">我的理财</router-link>
        </span>
      </div>
    </div>
    <div id="content" style="margin-bottom: 1.84rem">
      <div class="wheel">
      <router-link to="/financial/banner" style="font-size: 16px;display:block;color:#333;line-height: 101px;text-align: center;background: url(../../assets/img/1.jpg);background-size: cover;height: 101px"><img style="display: block;width: 100%;height: 100%" src="../../assets/img/1.jpg" alt=""></router-link>
      </div>
      <ul>
        <li>
          <div class="mon-line"></div>
          <div class="mon_new">
            <router-link style="color: #000" to="/financial/wealthProducts">
              <div style="display: flex;justify-content: flex-start;margin-bottom: 10px"><span class="news"></span><span style="margin-left: 8px;line-height: 18px">新手专区</span></div>
              <div style="padding-left: 10px;margin-bottom: 10px;font-size: 16px"> 新人月月升</div>
              <div style="font-size:16px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px"><span style="color: #FF0000;">12--8%</span><span>30--360天</span><span>20000人</span></div>
              <div style="font-size:14px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px;color:#666666"><span>期望年化</span><span>服务期限</span><span>申购人数</span></div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="mon-line"></div>
          <div class="mon_new">
            <router-link style="color: #000" to="/financial/wealthProducts">
              <div style="display: flex;justify-content: flex-start;margin-bottom: 10px"><span class="news"></span><span style="margin-left: 8px;line-height: 18px">活期--货币基金</span></div>
              <div style="padding-left: 10px;margin-bottom: 10px;font-size: 16px">华夏现金增利</div>
              <div style="font-size:16px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px"><span style="color: #FF0000;">12--8%</span><span>30--360天</span><span>20000人</span></div>
              <div style="font-size:14px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px;color:#666666"><span>期望年化</span><span>投资期限</span><span>申购人数</span></div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="mon-line"></div>
          <div class="mon_new">
            <router-link style="color: #000" to="/financial/wealthProducts">
              <div style="display: flex;justify-content: flex-start;margin-bottom: 10px"><span class="news"></span><span style="margin-left: 8px;line-height: 18px">基金智投</span></div>
              <div style="padding-left: 10px;margin-bottom: 10px;font-size: 16px"> 华安策略优选</div>
              <div style="font-size:16px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px"><span style="color: #FF0000;">12--8%</span><span>30--360天</span><span>20000人</span></div>
              <div style="font-size:14px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px;color:#666666"><span>期望年化</span><span>服务期限</span><span>申购人数</span></div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="mon-line"></div>
          <div class="mon_new">
            <router-link to="/financial/wealthProducts" style="color: #000">
              <div style="display: flex;justify-content: flex-start;margin-bottom: 10px"><span class="news"></span><span style="margin-left: 8px;line-height: 18px">活期--货币基金</span></div>
              <div style="padding-left: 10px;margin-bottom: 10px;font-size: 16px">华夏现金增利</div>
              <div style="font-size:16px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px"><span style="color: #FF0000;">12--8%</span><span>30--360天</span><span>20000人</span></div>
              <div style="font-size:14px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px;color:#666666"><span>期望年化</span><span>投资期限</span><span>申购人数</span></div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="mon-line"></div>
          <div class="mon_new">
            <router-link to="/financial/wealthProducts" style="color: #000">
              <div style="display: flex;justify-content: flex-start;margin-bottom: 10px"><span class="news"></span><span style="margin-left: 8px;line-height: 18px">基金智投</span></div>
              <div style="padding-left: 10px;margin-bottom: 10px;font-size: 16px"> 华安策略优选</div>
              <div style="font-size:16px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px"><span style="color: #FF0000;">12--8%</span><span>30--360天</span><span>20000人</span></div>
              <div style="font-size:14px;display: flex;justify-content: space-between;padding-left: 10px;margin-bottom: 10px;color:#666666"><span>期望年化</span><span>服务期限</span><span>申购人数</span></div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div id="footer-nav" >
      <ul>
          <li>
            <router-link to="/bill"><img src="../../assets/img/u300.png"/><span >账单</span></router-link>
          </li>
          <li>
          <router-link to="/income"><img src="../../assets/img/chart.png"/><span>图表</span></router-link>
          </li>
          <li>
          <router-link to="/account"><img src="../../assets/img/menu.png"/></router-link>
          </li>
          <li>
            <router-link to="/money"><img src="../../assets/img/u886.png"/><span>理财</span></router-link>
          </li>
          <li>
          <router-link to="/my-profile"><img src="../../assets/img/mine.png"/><span>我</span></router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>
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
  .wheel{
    height: 125px;
    padding: 10px 25px;
    background: #fff;
  }
  .wheel>a{
    border: 1px solid #797979;
    height: 101px;
  }
  .wheel>ul{
    margin: 0 auto;
    width: 50px;
  }
  .wheel>ul>li{
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #7C7C7C;
    border-radius: 50%;
  }
  #content>ul{
    width: 100%;
  }
  #content>ul>li .mon-line{
    width: 100%;
    height:12px;
    background: #F2F2F2;
  }
  .mon_new{
    background: #fff;
    padding: 10px 15px;
    color:#333;
    font-size: 14px;
  }
  .news{
    width: 3px;
    height: 15px;
    background: #E86364;
    display: block;
  }
</style>
