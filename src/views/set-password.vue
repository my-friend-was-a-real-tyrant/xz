<template>
    <div class="password" :style="height">
        <div class="header"><div class="top-left"><a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退"><div class="return"><img src="static/img/return.png"></div></a></div><div class="top-m">忘记密码</div></div>

        <div class="login-form"><ul>
            <li><div class="ipt"><span class="ico"><img src="static/img/d2.png"></span>
                <input type="text" v-model="mobile" placeholder="请输入手机号"></div></li>
            <li><div class="ipt"><span class="ico"><img src="static/img/d4.png"></span>
                <input type="text" v-model="code" placeholder="请输入验证码" style="width:120px;"><div class="send-code" @click="sendcode">发送验证码</div></div></li>
            <li><div class="ipt"><span class="ico"><img src="static/img/d3.png"></span>
                <input type="text" v-model="password" placeholder="请输入新密码"></div></li>
            <li><div class="submit"><input type="submit" value="确认" @click="submit"></div></li>
        </ul></div>
    </div>
</template>

<script>
  export default {
    name: "set-password",
    data () {
      return {
        height: '',
        mobile: '',
        code: '',
        password: '',
        randomString: 'fdafjioewkjaj'
      }
    },
    methods: {
      heightInit () {
        let height
        if (document.body.offsetHeight > window.screen.height) {
          height = document.body.offsetHeight
        } else {
          height = window.screen.height
        }
        this.height = `height:${height}px`
      },
      sendcode () {
        this.$post('/api?m=Home&c=Api&a=send_validate_code', {
          mobile: this.mobile,
          unique_id: this.randomString,
          scene: 2
        }).then(res => {
          this.Toast(res.msg)
        })
      },
      submit () {
        this.$post('/api?m=api&c=user&a=forgetPasswordInfo', {
          mobile: this.mobile,
          code: this.code,
          scene: 2,
          unique_id: this.randomString,
          password: this.password
        }).then(res => {
          this.Toast(res.msg)
          if (res.status == 1) {
            this.$router.replace('/login')
          }
        })
      }
    },
    mounted () {
      this.heightInit()
    }
  }
</script>

<style scoped>

    @import "../assets/css/login.css";

    .password{
        background:url(../assets/img/dd1.jpg) center repeat-y;
    }
</style>