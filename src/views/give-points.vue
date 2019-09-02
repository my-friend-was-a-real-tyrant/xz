<template>
    <div class="give-points">
        <div class="header"><div class="top-left">
            <a href="javascript:;" @click="back">
                <div class="return"><img src="@/assets/img/return.png"></div></a>
        </div><div class="top-m">积分转赠</div></div>

        <div class="btxt"><div class="txt">转赠说明：最小转换1枚，最大提现1000枚</div></div>
        <form>
            <div class="bst-txt"><h1>可转赠积分：<span id="">{{userinfo.pay_points}}</span>枚</h1>
                <div class="titles">转赠数量</div>
                <div class="ipt"><input type="text" v-model="num" placeholder="请输入转赠数量"></div>
                <div class="titles">转赠人手机号</div>
                <div class="ipt"><input type="text" v-model="phone" placeholder="请输入手机号"></div>
            </div>
            <div class="bst-submit"><input type="submit" @click="submit" value="转赠"></div>
        </form>

        <PageFooter></PageFooter>
    </div>
</template>

<script>
  import PageFooter from '@/components/PageFooter.vue'
  export default {
    name: "give-points",
    components: {
      PageFooter
    },
    data () {
      return {
        userinfo: {},
        phone: '',
        num: ''
      }
    },
    methods: {
      back () {
        this.$router.replace('/jifen')
      },
      submit () {
        this.$post('api?m=api&c=User&a=change_points', {
          token: this.userinfo.token,
          pay_points: this.num,
          other: this.phone
        }).then(res => {
          this.Toast(res.msg)
          if (res.status == 1) {
            this.userinfo.pay_points = this.userinfo.pay_points - this.num
            localStorage.setItem('userinfo', JSON.stringify(this.userinfo))
            this.back()
          }
        })
      }
    },
    mounted () {
      this.userinfo = JSON.parse(localStorage.getItem("userinfo"))
    }
  }
</script>

<style scoped>
    @import "../assets/css/login.css";
    @import "../assets/css/index.css";
</style>