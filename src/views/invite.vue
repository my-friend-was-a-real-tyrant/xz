<template>
  <div>
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" @click="back">
          <div class="return">
            <img src="@/assets/img/return.png">
          </div>
        </a>
      </div>
      <div class="top-m">邀请好友</div>
    </div>

    <div class="btxt">
      <div class="txt">温馨提示：手机截图推荐给好友</div>
    </div>


    <div id="tabtxt" style="min-height:750px;">
      <div class="mybank">
        <div class="payt hover-click">
          <span>个人推荐二维码</span>
          <div class="rtd">
            <img src="@/assets/img/pd.png">
          </div>
        </div>
        <div class="list-a1">
          <div class="titles"></div>
          <div class="ipt picimg" style="text-align:center;padding:20px 0;">
            <img :src="picUrl" >
          </div>
        </div>
      </div>


    </div>

    <PageFooter></PageFooter>
  </div>
</template>

<script>
  import '@/assets/js/slide-tabtxt.js'
  import PageFooter from '@/components/PageFooter.vue'
export default {
  components: {
    PageFooter
  },
  data () {
    return {
      picUrl: '',
      userinfo: {}
    }
  },
name: "invite",
  methods: {
    back () {
      this.$router.replace('/mw')
    },
    getPic () {
      this.$post(`api?m=api&c=user&a=gofriends&token=${this.userinfo.token}`).then(res => {
        if (res.status == 1) {
          this.picUrl = res.result.code_img
        }
      })
    }
  },
  mounted () {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
    this.getPic()
  }
}
</script>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/index.css";

  .picimg img{
    width: 80%;
    height: auto;
    max-height: 600px!important;
  }
</style>
