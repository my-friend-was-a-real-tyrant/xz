<template>
  <div class="bst">
    <div class="header"><div class="top-left">
      <a href="javascript:;" @click="back" title="后退"><div class="return">
        <img src="@/assets/img/return.png"></div></a></div><div class="top-m">支付密码设置</div></div>

    <div class="btxt"><div class="txt">支付密码设置：需要手机号验证身份</div></div>
    <form>
      <div class="bst-txt">
        <!--<div class="titles">提现地址</div>-->
        <!--<div class="ipt"><input type="text" name="" value="" placeholder="请输入BST钱包地址"></div>-->
        <div class="titles">手机号</div>
        <div class="ipt"><input type="text" v-model="mobile" placeholder="请输入手机号"></div>
        <div class="titles ">验证码</div>
        <div class="ipt mima">
          <input type="text" v-model="code" placeholder="验证码">
          <div class="send-code" @click="sendAuthCode">发送验证码</div>
        </div>
        <div class="titles">支付新密码</div>
        <div class="ipt"><input type="text" v-model="password" placeholder="请输入支付新密码"></div>
      </div>
      <div class="bst-submit"><input type="submit" @click="submit" value="设置"></div>
    </form>

    <PageFooter></PageFooter>
  </div>
</template>

<script>
  import PageFooter from '@/components/PageFooter.vue'
  export default {
    components: {
      PageFooter
    },
    data () {
      return {
        userinfo: {},
        mobile: '',
        randomString: 'eaeadasdfgasdga',
        password: '',
        code: ''
      }
    },
    methods: {
      back () {
        this.$router.replace('/bst')
      },
      sendAuthCode () {
        // 参数：mobile=13402048361&unique_id=111111&scene=6
        this.$fetch('api?m=Home&c=Api&a=send_validate_code', {
          mobile: this.mobile,
          unique_id: this.randomString,
          scene: 6
        }).then(res => {
          this.Toast(res.msg)
        })
      },
      submit () {
        this.$post('api?m=api&c=User&a=paypwd', {
          token: this.userinfo.token,
          unique_id: this.randomString,
          paypwd_code: this.code,
          mobile: this.mobile,
          new_password: this.password
        }).then(res => {
          this.Toast(res.msg)
          if (res.status == 1) {
            this.back()
          }
        })
      }
    },
    mounted() {
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    }
  }
</script>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/index.css";
  .mima{
    display: flex;
    justify-content: space-between;
  }
  .red{
    color: red;
  }
  .send-code{
    color: #fff;
    background-color: #7ecef4;
    margin-top: 8px;
    width: 110px;
    text-align: center;
    height: 32px;
    line-height: 32px;
    border-radius: 18px;
  }
</style>
