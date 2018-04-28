<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1>
          <span class="icon">
            <router-link to="/mine/mine"><img src="../../assets/img/left.png"/></router-link>
			    </span>
          <span>修改密码</span>
          <span></span>
        </h1>
      </div>
    </div>
    <div id="content" style="margin-bottom: 1.84rem">
      <form action="" class="register-form">
        <div class="group">
          <label for="password">原密码：</label>
          <label for="pwd">新密码：</label>
          <label for="pwd">确认新密码：</label>
        </div>
        <div class="group">
          <input style="border: 0" type="password" id="password" required placeholder="请输入原密码" />
          <input style="border: 0" type="password" id="pwd1" required placeholder="6-20位数字及字母" />
          <input style="border: 0" type="password" id="pwd" required placeholder="请再次输入新密码" />
        </div>
      </form>
      <router-link to="/mine/mine" class="color-back"  style="margin:40px 25px;display:block;background: #E86364;border-radius:8px;font-weight: 700;font-style: normal;font-size: 18px;color: #FFFFFF;text-align: center;line-height:37px">
        保存
      </router-link>
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
<script></script>
<style scoped>
  .register-form{
    padding: 10px 30px 10px 0;
    background: #F2F2F2;
    display: flex;
    justify-content: space-between;
  }
  .register-form .group{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: right;
    overflow: hidden;
  }
  .register-form .group>label{
    text-align: right;
    line-height: 30px;
    font-size:18px;
    display: block;
    margin:10px 0;
  }
  .register-form>.group>input{
    display: block;
    background-color:#fff;
    width:100%;
    height:30px;
    line-height: 30px;
    border:0;
    outline: 0;
    color:#fff;
    font-size:13px;
    box-sizing: border-box;
    margin:10px 0;
  }

</style>
