<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1 style="display: flex;justify-content: space-between;align-items: center">
          <span class="icon">
            <router-link to="/mine/mine">
              <img src="../../assets/img/left.png" style="display:block;">
            </router-link>
			    </span>
          <span>个人信息</span>
          <span></span>
        </h1>
      </div>
    </div>
    <div id="content" style="margin-bottom: 1.84rem">
      <form action="" class="register-form" style="background: #FFF;">
        <div class="group">
          <label for="niname">昵称：</label>
          <input type="text" id="niname" required placeholder="请输入4-20个字符"/>
        </div>
        <div class="group">
          <label for="name">姓名：</label>
          <input type="text" id="name" required placeholder="请输入4-20个字符"/>
        </div>
        <div class="group">
          <label for="name">性别：</label>
          <select name="">
            <option value="请选择">请选择</option>
            <option value="男">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;男</option>
            <option value="女">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;女</option>
          </select>
        </div>
        <div class="group">
          <label for="name">生日：</label>
          <input placeholder="请选择" type="date" id="name" style="list-style: none;text-align: right;color: rgb(153, 153, 153);"/>
        </div>
        <div class="group">
          <label for="name">婚姻状况：</label>
          <select name="" style="list-style: none">
            <option value="请选择">请选择</option>
            <option value="未婚">未&nbsp;&nbsp;婚</option>
            <option value="已婚">已&nbsp;&nbsp;婚</option>
          </select>
        </div>
        <div class="group">
          <label for="name">学历：</label>
          <select name="">
            <option value="请选择">请选择</option>
            <option value="硕士">&nbsp;&nbsp;硕士</option>
            <option value="本科">&nbsp;&nbsp;本科</option>
            <option value="大专">&nbsp;&nbsp;大专</option>
            <option value="高中">&nbsp;&nbsp;高中</option>
          </select>
        </div>
        <div class="group">
          <label for="name">收入水平：</label>
          <select name="">
            <option value="  请选择"> 请选择</option>
            <option>请选择</option>
            <option>&nbsp;10k&nbsp;></option>
            <option>&nbsp;<&nbsp;10k</option>
            <option>&nbsp;<&nbsp;8k</option>
            <option>&nbsp;<&nbsp;6k</option>
          </select>
        </div>
        <div style="padding: 0 25px;margin-top: 30px">
          <router-link to="/mine/mine" class="color-back" style="display:block;height:37px;line-height:37px;background: #E86364;border-radius:8px;font-weight : 700;font-style: normal;font-size: 18px;color: #FFFFFF;text-align: center;">保存</router-link>
        </div>
      </form>
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
  .register-form .group{
    padding: 0 25px 10px 25px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:15px 0px 10px 0px;
    line-height: 50px;
    border-bottom: 1px solid #BCBCBC;
  }
  .register-form>.group>label{
    text-align:left;
    line-height: 1rem;
    padding-right:10px;
  }
  .register-form>.group>input{
    border:0;
    outline: none;
    text-align: right;
  }
  .register-form>.group>select{
    float: right;
    height:0.98rem;
    border:0;
    outline: none;
    text-align: right;
  }
  .register-form .btn{
    overflow: hidden;
  }
  .register-form .btn>a{
    background-color:#e86364;
    display: block;
    height:1rem;
    border:0;
    color:#fff;
    font-size:0.373333rem;
    border-radius: 8px;
  }
  select{
    -moz-appearance:none;
    -webkit-appearance:none;
    color: rgb(153, 153, 153);
  }
</style>
