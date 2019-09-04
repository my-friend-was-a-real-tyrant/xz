<template>
    <div class="bst">
        <div class="header"><div class="top-left">
            <a href="javascript:;" @click="back" title="后退"><div class="return">
                <img src="@/assets/img/return.png"></div></a></div><div class="top-m">BST提现</div></div>

        <div class="btxt"><div class="txt">提现说明：最小提现1枚，最大提现1000枚，手续费1%</div></div>
        <form>
            <div class="bst-txt"><h1>可提现BST：<span id="">{{userinfo.user_money}}</span>枚</h1>
                <!--<div class="titles">提现地址</div>-->
                <!--<div class="ipt"><input type="text" name="" value="" placeholder="请输入BST钱包地址"></div>-->
                <div class="titles">提现数量</div>
                <div class="ipt"><input type="text" v-model="money" placeholder="请输入提现数量"></div>
                <div class="titles mima">
                    <span>交易密码</span>
                    <span class="red" @click="setPassword">去设置支付密码</span>
                </div>
                <div class="ipt"><input type="text" v-model="paypwd" placeholder="请输入交易密码"></div>
            </div>
            <div class="bst-submit"><input type="submit" @click="submit" value="提交申请"></div>
        </form>






        <PageFooter></PageFooter>
    </div>
</template>

<script>
    import PageFooter from '@/components/PageFooter.vue'
  export default {
    name: "bst",
      components: {
          PageFooter
      },
      data () {
        return {
            userinfo: {},
            paypwd: '',
            money: ''
        }
      },
      methods: {
          back () {
              this.$router.replace('/mw')
          },
          setPassword () {
              this.$router.replace('/setPay?from=bst')
          },
          submit () {
              // https://api.dzccn.com/index.php?m=api&c=User&a=withdrawals
              //   请求方式：post
              this.$post('api?m=api&c=User&a=withdrawals', {
                  paypwd: this.paypwd,
                  money: this.money,
                  token: this.userinfo.token
                  // token: '7d2406eea6c98cd262730c52e9ccd66c'
              }).then(res => {
                  this.Toast(res.msg)
                  if (res.status == 1) {
                      this.$router.replace('/mw')
                  }
              })
          }
      },
      mounted() {
        this.userinfo = JSON.parse(localStorage.getItem('userinfo'))||{}
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
</style>
