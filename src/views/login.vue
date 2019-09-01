<template>
    <div class="login" :style="height">
        <div class="top-logo"><img src="../assets/img/d1.png"></div>

        <div class="login-form"><ul>
            <li><div class="ipt"><span class="ico"><img src="../assets/img/d2.png"></span><input type="text" value="" placeholder="请输入手机号"></div></li>
            <li><div class="ipt"><span class="ico"><img src="../assets/img/d3.png"></span><input type="text" value="" placeholder="请输入密码"></div></li>
            <li><div class="ipt"><span class="ico"><img src="../assets/img/d4.png"></span><input type="text" value="" placeholder="请输入验证码" style="width:120px;"><div class="imgcode"><img src="static/img/cod.jpg"></div></div></li>
            <li><div class="submit"><input type="submit" value="确定"></div></li>
            <li><div class="left"><a href="#">忘记密码？</a></div><div class="right">
                <a href="#">没有账号？<span @click="register">立即创建一个</span></a></div></li>
        </ul></div>


        <div id="bar" v-show="modalShow">
            <img src="../assets/img/tc.jpg"/>
            <p @click="hideModal" style="cursor:pointer;" title="关闭"><img src="../assets/img/x.png"/></p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        modalShow: true,
        height: ''
      }
    },
    methods: {
      hideModal () {
        this.modalShow = false
      },
      register () {
        this.$router.push('/register')
      },
      heightInit () {
        let height
        if (document.body.offsetHeight > window.screen.height) {
          height = document.body.offsetHeight
        } else {
          height = window.screen.height
        }
        this.height = `height:${height}px`
      }
    },
    mounted () {
      this.heightInit()
    }
  }
</script>

<style scoped>
    @import "../assets/css/login.css";
    #bar{background-color:rgba(0,0,0,0.8);position:fixed;z-index:99;left:0;top:0px;padding-top:70px;width:100%;height:100%;text-align:center;}
    #bar img{max-width:80%;border-radius:12px;}
    #bar p{ padding-top:10px;}
    #bar p img{width:33px;}
    .login{
        background:url(../assets/img/dd1.jpg) center repeat-y;
    }
</style>