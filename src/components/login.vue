<template>
  <form>
    <div>
      <label for="" style="">账号</label>
      <input autofocus placeholder="请输入账号" type="text">
    </div>
    <div>
      <label for="">密码</label>
      <input autofocus placeholder="请输入密码" type="password"></div>
    <router-link class="login-zhuce" to="/register">注册</router-link>
    <router-link class="login-denglu" to="/bill/bill">登&nbsp;&nbsp;录</router-link>
  </form>
</template>
<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    padding: 75px 50px 10px
  }
  form > div {
    border-bottom: 1px solid #161616;
    padding-bottom: 9px;
    margin-top: 15px
  }
  form > div > label {
    margin-right: 10px;
    color: #333;
    font-size: 16px
  }
  form > div > input {
    border: 0;
    outline: none;
    color: rgb(153, 153, 153);
    font-size: 13px
  }
  .login-zhuce{
    display: block; font-size: 16px;color: #E86364;margin-top: 12px;text-align: right
  }
  .login-denglu{
    display:block;
    width:100%;
    height:37px;
    margin-top: 20px;
    background: #383D53;
    border-radius: 8px;
    color:#fff;
    font-size: 18px;
    line-height: 37px;
    text-align: center;
  }
</style>
