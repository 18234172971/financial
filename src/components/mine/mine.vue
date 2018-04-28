<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1>我的</h1>
      </div>
    </div>
    <div id="content" style="margin-bottom: 1.84rem">
      <ul id="list" style="padding-left: 10px;padding-right: 20px">
        <li style="display: flex;justify-content: space-between;align-items: center">
          <router-link to="/mine/pers">
            <span>个人信息</span>
            <img class="pic" src="../../assets/img/right.png"/>
          </router-link>
         </li>
        <li>
          <router-link to="/mine/fpreference">
            <span>理财偏好</span>
            <img class="pic" src="../../assets/img/right.png"/>
          </router-link>
        </li>
        <li>
          <router-link to="/mine/password">
            <span>修改密码</span>
            <img class="pic" src="../../assets/img/right.png"/>
          </router-link>
        </li>
        <li>

          <router-link to="/mine/feedback"> <span>反馈吐槽</span><img class="pic" src="../../assets/img/right.png"/></router-link>
         </li>
      </ul>
      <div style="100%;padding:30px 25px;">
        <router-link to="/" class="btn"  style="display: block">退出</router-link>
      </div>

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
<script></script>
<style scoped>
  #content{
    background-color: #fff;
    font-size: 18px;
  }
  #content #list{
    font-size:0.533333rem;
  }
  #content #list>li{
    padding:10px 0;
    border-bottom:1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #list>li>a{
    display: block;
    width: 100%;
    font-size: 18px;
    text-align: left;
  }
  #content .pic{
   display: block;
    float: right;
    width:22px;
    height:22px;
  }
  #content .btn{
    display: block;
    box-sizing: border-box;
    background-color:#e86364;
    height:40px;
    width:100%;
    color:#fff;
    text-align: center;
    line-height: 40px;
    border-radius: 8px;
  }
</style>
