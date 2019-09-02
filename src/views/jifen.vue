<template>
  <div class="jifen">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;"  @click="back" title="后退">
          <div class="return"><img src="@/assets/img/return.png"></div>
        </a>
      </div>
      <div class="top-m">积分</div>
    </div>

    <div class="integral">
      <div class="quantity">{{userinfo.pay_points}}</div><p>当前积分</p>
      <div class="list-sbt">
        <ul>
          <li>
            <div class="submit-f">充值</div>
          </li>
          <li>
            <a><div class="submit-f">转赠</div></a>
          </li>
        </ul>
      </div>
      <div class="txtc">
        <h1>积分获取方法</h1>
        1、向推荐人购买（线下付款，推荐人转入）<br>
        2、联系客服购买<br>
        3、在线充值（以太坊）<br>
      </div>
    </div>
    <div class="in-d">
      <div class="left"><h1>抢购失败，预约退回积分</h1>
        <p class="time">2019-07-16  11:13:56</p>
      </div>
      <div class="right">2</div>
    </div>
    <div class="in-d">
      <div class="left">
        <h1>预约星座，积分支出</h1><p class="time">2019-07-16  11:13:56</p>
      </div>
      <div class="right">-2</div>
    </div>

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
      userinfo: {}
    }
  },
  methods: {
    back () {
      this.$router.replace('/mw')
    }
  },
  mounted () {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
  },
name: "jifen"
}
</script>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/index.css";
</style>
