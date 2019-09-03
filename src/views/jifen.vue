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
            <a><div class="submit-f" @click="givePoints">转赠</div></a>
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
    <div class="in-d" v-for="item in listData">
      <div class="left"><h1>{{item.desc}}</h1>
        <p class="time">{{item.change_time | formatTime}}</p>
      </div>
      <div class="right">{{item.pay_points}}</div>
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
      userinfo: {},
      listData: []
    }
  },
  filters: {
    formatTime (date) {
      let d = new Date(date)
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      let day = d.getDate()
      let hour = d.getHours()
      let min = d.getMinutes()
      let second = d.getSeconds()
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day
      hour = hour < 10 ? '0' + hour : hour
      min = min < 10 ? '0' + min : min
      second = second < 10 ? '0' + second : second
      return `${year}-${month}-${day} ${hour}:${min}:${second}`

    }
  },
  methods: {
    back () {
      this.$router.replace('/mw')
    },
    getList () {
      this.$fetch(`api?m=api&c=user&a=points&token=${this.userinfo.token}`).then(res => {
        if (res.status == 1) {
          this.listData = res.result
        }else {
          this.Toast(res.msg)
        }
      })
    },
    givePoints () {
      this.$router.replace('/givePoints')
    }
  },
  mounted () {

    this.userinfo = JSON.parse(localStorage.getItem('userinfo'))||{}
    this.getList()
  },
name: "jifen"
}
</script>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/index.css";
</style>
