<template>
  <div class="adopt-record">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">抢购记录</div>
    </div>
    <div class="transfer-box">
      <div class="tab">
          <span v-for="(item, index) in tabNav" :key="index">
               <a :class="navIndex == index  ? 'on' : ''" @click="switchTab(index)">
                   {{item.value}}
               </a>
          </span>
      </div>
      <div class="content">
        <ul v-if="navIndex == 0">
          <div class="bst-txt" v-for="(item, index) in snapList" :key="index">
            <h1>区块星座编号：<span id="">{{ item.order_sn }}</span></h1>
          <div class="titles">星座名称：<span style="color:#fff">{{ item.goods_name }}</span></div>
          <div class="titles">星座价值：<span style="color:#fff">{{ item.price_interval }}</span></div>
          <div class="ipt"><input type="submit" value="抢购中..." disabled></div>
        </div>
        </ul>
        <ul  v-if="navIndex == 1">
          <div class="reservation">
            <li v-for="(item, index) in beenList" :key="index">
              <div class="left"><h1>{{ item.goods_name }}</h1><p class="time">{{ item.pipei_time }}</p></div>
              <div class="center"><p class="nu">{{ item.points }}</p><p>花费积分</p></div>
              <div class="right"><a @click="goRa(item.id)"><div class="bbuu">查看</div></a></div>
            </li>
          </div>
        </ul>
        <ul  v-if="navIndex == 2">
          <div class="reservation">
            <li v-for="(item, index) in completeList" :key="index">
              <div class="left"><h1>{{ item.goods_name }}（已完成）</h1><p class="time">{{ item.pipei_time }}</p></div>
              <div class="right"><p class="nu">{{ item.order_money }}</p><p>合约价值</p></div>
            </li>
          </div>
        </ul>
        <ul  v-if="navIndex == 3">
          <div class="reservation">
            <li  v-for="(item, index) in brokenList" :key="index">
              <div class="left"><h1>{{ item.goods_name }}（未确认）</h1><p class="time">{{ item.pipei_time }}</p></div>
              <div class="right"><a @click="goAa(item.id)"><div class="bbuu">申诉</div></a></div>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "AdoptRecord",
  components: {
    PageFooter
  },
  data() {
    return {
      navIndex: 0,
      tabNav: [
        { id: 0, value: "抢购中" },
        { id: 1, value: "已抢购" },
        { id: 2, value: "已完成" },
        { id: 3, value: "投诉" }
      ],
      userinfo:{},
      status: 0,
      snapList:[],
      beenList:[],
      completeList:[],
      brokenList:[]
    };
  },
  created() {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
    this.getAdopt()
  },
  methods: {
    goRa(orderid){
      localStorage.setItem('arorderid', orderid)
      // 跳转详情
      this.$router.replace('/ra')
    },
    goAa(orderid){
      localStorage.setItem('aaorderid', orderid)
      this.$router.replace('/aa')
    },
    switchTab(index) {
      this.navIndex = index;
      this.status = index;
      if(this.snapList.length < 1 || this.beenList.length< 1 || this.completeList.legnth <1 || this.brokenList < 1){
        this.getAdopt()
      }
    },
    getAdopt(){
      console.log(this.status)
      const data = {
        token: this.userinfo.token,
        status: this.status
      }
      this.$post('/api?m=Api&c=Order&a=order_jin_list', data).then( (res)=>{
          if(res.status === 1){
            console.log(res)
              switch(this.status){
                case 0:
                  this.snapList = res.result
                  break;
                case 1:
                  this.beenList = res.result
                  break;
                case 2:
                  this.completeList = res.result
                  break;
                case 3:
                  this.brokenList = res.result
                  break;
                default:
                  console.log('没有可查询的列表数据！')
                  break;
              }
          }
      })
    }

  }
};
</script>
<style lang="scss" scoped>
.transfer-box{margin:10px 0;padding:10px 0px 15px 0px;}
.transfer-box .tab{position:relative;background-color:#553981;text-align:center;}
.transfer-box .tab a{width:25%;color:#fff;text-align:center;display:inline-block;font-size:14px;font-weight:500;line-height:38px;cursor:pointer;}
.transfer-box .tab a.on{color:#86ccfc;line-height:35px;border-bottom:#86ccfc 1px solid;}
.transfer-box .content{padding:10px;color:#fff;}
.bst-txt {
  background-color: #412c70;
  border-radius: 12px;
  margin: 10px;
  padding: 10px 10px 15px 10px;
}
.bst-txt h1 {
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  height: 35px;
  line-height: 35px;
  border-bottom: #a599be 1px solid;
}
.bst-txt h1 span {
  color: #e69848;
  padding: 0 3px;
}
.bst-txt .titles {
  color: #7ecef4;
  padding: 20px 0 10px 0;
}
.bst-txt .ipt {
  background-color: #3b2669;
  height: 42px;
  line-height: 42px;
  padding: 0 15px;
  border-radius: 15px;
}
.bst-txt .ipt input {
  color: #c9caca;
  height: 38px;
  line-height: 28px;
  background: none;
  border: 0;
  outline: none;
  width: 100%;
}
.bst-submit {
  padding: 20px 10px;
}
.bst-submit input {
  background-color: #3b2669;
  font-size: 16px;
  text-align: center;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #c9caca;
  border-radius: 15px;
  border: 0;
  outline: none;
}

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
.reservation li .center {
  float: left;
}
.reservation li .center .nu {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}
.reservation li .center p {
  font-size: 14px;
  text-align: center;
  padding-left: 10px;
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
.reservation li .bbuu {
  margin: auto;
  width: 70px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background-color: #e69848;
  border-radius: 10px;
  font-size: 15px;
}
</style>
