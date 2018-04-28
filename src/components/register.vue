<template>
  <section>
    <form>
      <div>
        <label for="">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</label>
        <input autofocus placeholder="请输入用户名" type="text">
      </div>
      <div>
        <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
        <input autofocus placeholder="请输入密码" type="text">
      </div>
      <div>
        <label for="">确认密码</label>
        <input autofocus placeholder="请再次输入面" type="text">
      </div>
      <router-link class="re-button" to="/bill">
        注册
      </router-link>
    </form>
  </section>

</template>
<script>
</script>
<style scoped>
  form{
    padding: 75px 50px 10px;
  }
form>div{
  border-bottom:1px  solid #161616;
  padding-bottom: 9px;
  margin-top: 15px
  }
  form>div>label{
    margin-right: 10px;color:#333;font-size: 16px
  }
  form>div>input{
    border: 0;
    outline: none;
    color: rgb(153, 153, 153);
    font-size:13px;
  }
  .re-button{
    display:block;
    width:100%;
    height:27px;
    margin-top: 20px;
    background: #383D53;
    border-radius: 8px;
    color:#fff;
    font-size: 18px;
    line-height: 27px;
    text-align: center
  }
</style>
