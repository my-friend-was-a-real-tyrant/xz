<template>
    <div class="register">
        <div class="top-logo"><img src="static/img/d1.png"></div>

        <div class="login-form">
            <ul>
            <li>
                <div class="ipt"><span class="ico"><img src="static/img/d2.png"></span>
                <input type="text" value="" placeholder="请输入手机号"></div></li>
            <li>
                <div class="ipt"><span class="ico"><img src="static/img/d3.png"></span><input type="text" value="" placeholder="请输入密码">
                </div></li>
            <li><div class="ipt"><span class="ico"><img src="static/img/d4.png"></span>
                <input type="text" value="" placeholder="请输入验证码" style="width:120px;"><div class="send-code" @click="sendAuthCode">发送验证码</div>
            </div></li>
            <li><div class="ipt"><span class="ico"><img src="static/img/d4.png"></span>
                <input type="text" value="" placeholder="请确认密码" style="width:120px;"><div class="imgcode"><img src="static/img/cod.jpg">
                </div></div></li>

            <li style="position:relative;">
                <input id="checkbox-blue" type="checkbox" class="checkbox"><label for="checkbox-blue"></label ><a style="padding-left:12px;">同意并愿意遵守星座世界<span>使用条款</span></a></li>
            <li><div class="submit"><input type="submit" value="注册"></div></li>
            <li><div class="left"><a href="#">已有账号！<span>立即登录</span></a></div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>

  export default {
    name: "register",
    data () {
      return {
        randomString: 'fdjsfjsdlfjoewj'
      }
    },
    methods: {
      sendAuthCode () {
        return
        this.$fetch('/api?m=Home&c=Api&a=send_validate_code', {
          mobile: '18257346778',
          unique_id: this.randomString,
          scene: 1
        })
      }
    }
  }
</script>

<style scoped>
    @import "../assets/css/login.css";
    .register{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background:url(../assets/img/dd2.jpg) center repeat-y;
    }
</style>