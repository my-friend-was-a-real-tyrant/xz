<template>
  <div class="reservation-record">
      <div class="header"><div class="top-left"><a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退"><div class="return"><img src="@/assets/img/return.png"></div></a></div><div class="top-m">预约</div></div>

      <div class="reservation"><ul>
      <li v-for="(item,index) in yyList" :key="index"><div class="left">
        <h1 v-if="item.status == 0">{{item.goods_name}}（预约失败）</h1>
        <h1 v-if="item.status == 1">{{item.goods_name}}（预约成功）</h1>
        <p class="time">{{item.add_time}}</p></div><div class="right"><p class="nu">{{item.points}}</p><p>花费积分</p></div></li>
      </ul></div>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "ReservationRecord",
  components: {
    PageFooter
  },
  data() {
    return {
      userinfo: {},
      yyList:[]
    };
  },
  created() {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
  },
  mounted(){
    this.getRr()
  },
  methods: {
    getRr(){
      const data = {
          token: this.userinfo.token,
          type: 1
        }
        this.$post('/api?m=Api&c=Order&a=order_jin_list', data).then( (res) =>{
            if(res.status === 1){
              this.yyList = res.result
            }
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.reservation{width:100%;}
.reservation li{background-color:#412c70;border-radius:12px;margin:10px;padding:10px;color:#FFF; overflow:hidden;}
.reservation li .left{float:left;}
.reservation li .left h1{font-size:14px;}
.reservation li .left .time{font-size:14px;padding-top:5px;}
.reservation li .right{float:right;}
.reservation li .right .nu{font-weight:bold;font-size:16px;line-height:24px; text-align:center;}
.reservation li .right p{font-size:14px;text-align:center;}

</style>
