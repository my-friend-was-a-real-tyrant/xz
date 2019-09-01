<template>
    <div class="register">
        <div class="top-logo"><img src="../assets/img/d1.png"></div>

        <div class="login-form">
            <ul>
            <li>
                <div class="ipt"><span class="ico"><img src="../assets/img/d2.png"></span>
                <input type="text" placeholder="请输入手机号" v-model="mobile"></div></li>
            <li>
                <div class="ipt"><span class="ico"><img src="../assets/img/d3.png"></span>
                    <input type="password" v-model="password1" placeholder="请输入密码">
                </div></li>
            <li><div class="ipt"><span class="ico"><img src="../assets/img/d4.png"></span>
                <input type="text" placeholder="请输入验证码" v-model="code" style="width:120px;">
                <div class="send-code" @click="sendAuthCode">发送验证码</div>
            </div></li>
            <li><div class="ipt"><span class="ico"><img src="../assets/img/d4.png"></span>
                <input type="password" v-model="password2" placeholder="请确认密码" style="width:120px;">
                <div class="imgcode">
                    <!--<img src="../assets/img/cod.jpg">-->
                </div></div></li>

            <li style="position:relative;">
                <input id="checkbox-blue" v-model="isAgree" type="checkbox" class="checkbox">
                <label for="checkbox-blue"></label >
                <a style="padding-left:12px;">同意并愿意遵守星座世界<span>使用条款</span></a></li>
            <li><div class="submit"><input type="submit" value="注册" @click="submit"></div></li>
            <li><div class="left"><a href="#">已有账号！<span @click="login">立即登录</span></a></div>
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
        randomString: 'fdjsfjsdlfjoewj',
        mobile: '',
        password1: '',
        isAgree: '',
        code: '',
        password2: '',
      }
    },
    methods: {
      login () {
        this.$router.replace('/login')
      },
      submit () {
        if (!this.isAgree){
          this.Toast('未同意使用条款')
          return
        }
        this.$post('/api?m=Api&c=User&a=reg', {
          username: this.mobile,
          password: this.password1,
          password2: this.password2,
          code: this.code,
          unique_id: this.randomString,
          push_id: 1
        }).then(res => {

          this.Toast(res.msg)
          if (res.status == 1) {
            this.login()
          }
        })
      },
      sendAuthCode () {
        if (!this.mobile) {
          this.Toast('手机号未填')
          return
        }
        this.$fetch('/api?m=Home&c=Api&a=send_validate_code', {
          mobile: this.mobile,
          unique_id: this.randomString,
          scene: 1
        }).then(res => {
          this.Toast(res.msg)
        })
      }
    }
  }
</script>

<style scoped>
    @import "../assets/css/login.css";
    .register{
        /*position: absolute;*/
        /*top: 0;*/
        /*bottom: 0;*/
        /*width: 100%;*/
        background:url(../assets/img/dd2.jpg) center repeat-y;
    }
</style>