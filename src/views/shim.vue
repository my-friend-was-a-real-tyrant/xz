<template>
  <div>
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" @click="back">
          <div class="return">
          <img src="@/assets/img/return.png">
          </div>
        </a>
      </div><div class="top-m">实名认证</div></div>

    <div class="btxt"><div class="txt">实名基本条件温馨提示：身份证号和真实姓名必须符合，否则不给予通过！</div></div>


    <!--<script src="/template/mobile/default/static/js/slide-tabtxt.js"></script>-->
    <div id="tabtxt" style="min-height:750px;">
      <div class="mybank">
        <div class="payt hover-click"><span>个人信息</span></div>
        <div class="list-a1">
          <div class="titles">真实姓名</div>
          <div class="ipt"><input type="text" v-model="name"></div>
          <div class="titles">身份证号码</div>
          <div class="ipt"><input type="text" v-model="idcard"></div>
        </div>
      </div>
      <div class="bst-submit">
        <input type="submit" v-show="!userinfo.realname" value="提交认证" @click="submit">
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
      name: '',
      idcard: '',
      userinfo: {}
    }
  },
  methods: {
    back () {
      this.$router.replace('/mw')
    },
    submit () {
      this.$post('api?m=api&c=user&a=goverified', {
        token: this.userinfo.token,
        realname: this.name,
        idcard: this.idcard
      }).then(res => {
        this.Toast(res.msg)
        if (res.status == 1) {
          // this.userinfo.realname = this.name
          // this.userinfo.idcard = this.idcard
          localStorage.setItem('userinfo', JSON.stringify(res.result))
          this.$router.replace('/mw')
        }
      })
    }
  },
  mounted () {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
    this.name = this.userinfo.realname || ''
    this.idcard = this.userinfo.idcard || ''
  },
  name: "shim"

}
</script>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/index.css";
</style>
