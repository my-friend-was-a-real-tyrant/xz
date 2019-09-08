<template>
  <div class="recommend-earnings">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">收益记录</div>
    </div>

    <div class="reservation">
      <ul v-for="(item,index) in teInfo" :key="index">
        <li>
          <div class="left">
            <h1>{{item.desc}}</h1>
            <p class="time">{{item.change_time}}</p>
          </div>
          <div class="right">
            <p class="nu">{{item.user_money}}</p>
            <p>GTC</p>
          </div>
        </li>
      </ul>
    </div>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
export default {
  name: "TotalEarnings",
  components: {
    PageFooter
  },
  data() {
    return {
      userinfo: {},
      teInfo:[]
    };
  },
  created() {
    this.userinfo = JSON.parse(localStorage.getItem("userinfo")) || {};
  },
  mounted(){
      this.getTe()
  },
  methods: {
      getTe(){
           const data = {
                token: this.userinfo.token
            }
            this.$post('/api?m=api&c=user&a=getmoney', data).then((res) => {
                if (res.status === 1) {
                    this.teInfo = res.result.account_log
                }
            })
      }
  }
};
</script>
<style lang="scss" scoped>
.reservation {
  width: 100%;
}
.reservation li {
  background-color: #412c70;
  border-radius: 12px;
  margin: 10px;
  padding: 10px;
  color: #fff;
  overflow: hidden;
}
.reservation li .left {
  float: left;
}
.reservation li .left h1 {
  font-size: 14px;
}
.reservation li .left .time {
  font-size: 14px;
  padding-top: 5px;
}
.reservation li .right {
  float: right;
}
.reservation li .right .nu {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}
.reservation li .right p {
  font-size: 14px;
  text-align: center;
}
</style>
