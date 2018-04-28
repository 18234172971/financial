<template>
  <section>
    <div id="header">
      <div id="header-nav">
        <h1 style="display: flex;justify-content: space-between">
          <span class="icon">
            <router-link to="/mine/mine"><img src="../../assets/img/left.png"/></router-link>
			    </span>
          <span style="line-height: 44px">反馈吐槽</span>
          <span></span>
        </h1>
      </div>
    </div>
    <div id="content" style="box-sizing:border-box;margin-bottom: 1.84rem;padding-left: 25px;padding-right: 25px;">
		<textarea style='width:100%;resize:none;border:0;height:164px;margin-top:.6rem;background-color:#eee' rows="10" cols="30"  placeholder="请填写内容，最多500字" maxlength="10000">

		</textarea>
      <router-link to="/mine/mine" class="color-back" style="display:block;margin-top:30px;background: #E86364;border-radius:8px;font-weight: 700;font-style: normal;font-size: 18px;color: #FFFFFF;text-align: center;line-height:37px"> 保存</router-link>
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
  .btn>input{
    display: block;
    background-color:#e86364;
    width:8rem;
    height:37px;
    border:0;
    color:#fff;
    font-size:0.373333rem;
    margin-left:1rem;
    margin-top:.8rem;
  }
</style>
