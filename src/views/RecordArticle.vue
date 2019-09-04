<template>
  <div class="record-article">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">匹配详情</div>
    </div>
    <div class="btxt">
      <div class="txt">温馨提示：确认好信息在上传信息</div>
    </div>

    <div id="tabtxt" style="min-height:750px;">
      <div class="mybank">
        <div class="payt">
          <span>区块星座编号：{{artInfo.order_sn}}</span>
        </div>
        <div class="list-a1">
          <div class="titles" style="padding:10px 0 0 0">
            星座：
            <span style="color:#fff">{{artInfo.goods_name}}</span>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            价值：
            <span style="color:#fff">{{artInfo.order_money}}</span>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            智能合约收益：
            <span style="color:#fff">{{artInfo.profit_interval}}</span>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            匹配时间：
            <span style="color:#fff">{{artInfo.add_time}}</span>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            状态：
            <span style="color:#fff" v-if="!artInfo.image">待打款</span>
            <span style="color:#fff" v-if="artInfo.image">待确认</span>
          </div>
        </div>
        <div class="list-a1">
          <div class="payt">
            <span>收款人信息：</span>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            姓名：
            <span style="color:#fff">{{zfInfo.real_name}}</span>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            支付宝：
            <a @click="showModal(1)">
              <span style="color:#dc0ec1">点击查看</span>
            </a>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            微信：
            <a @click="showModal(2)">
              <span style="color:#dc0ec1">点击查看</span>
            </a>
          </div>
          <div class="titles" style="padding:10px 0 0 0">
            银行卡：
            <a @click="showModal(3)">
              <span style="color:#dc0ec1">点击查看</span>
            </a>
          </div>
          <!-- 1.缺上传截图功能 2.提交抢购信息-->
          <div class="titles" style="padding:10px 0 0 0">上传打款截图:</div>
          <div class="ipt" style="text-align:center;padding:20px 0;">
            <img src="@/assets/img/ewm.jpg" />
          </div>
          <div class="bst-submit">
            <input type="submit" value="确认打款" />
          </div>
        </div>
      </div>
    </div>

    <div v-show="bar1" class="bar">
      <div class="ttop">支付宝二维码支付</div>
      <div class="ttop">账号：{{zfInfo.real_name}}</div>
      <img :src="_imgUrl + zfInfo.alipay_code" />
      <p @click="hideModal(1)" style="cursor:pointer;" title="关闭">
        <img src="@/assets/img/x.png" />
      </p>
    </div>

    <div v-show="bar2" class="bar">
      <div class="ttop">微信二维码支付</div>
      <div class="ttop">账号：{{zfInfo.real_name}}</div>
      <img :src="_imgUrl + zfInfo.wx_code" />
      <p  @click="hideModal(2)" style="cursor:pointer;" title="关闭">
        <img src="@/assets/img/x.png" />
      </p>
    </div>

    <div v-show="bar3" class="bar">
      <div class="ttop">银行卡支付</div>
      <div class="ttop">账号：643434343434344</div>
      <div class="ttop">姓名：{{zfInfo.real_name}}</div>
      <div class="ttop">银行名：{{zfInfo.bank_name}}</div>
      <div class="ttop">开户行地址：{{zfInfo.bank_address}}</div>
      <p  @click="hideModal(3)" style="cursor:pointer;" title="关闭">
        <img src="@/assets/img/x.png" />
      </p>
    </div>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "RecordArticle",
  components: {
    PageFooter
  },
  data() {
    return {
      bar1:false,
      bar2:false,
      bar3:false,
      orderid: '',
      userinfo: {},
      artInfo:[],
      zfInfo:[]
    };
  },
  created() {
    this.orderid = localStorage.getItem('arorderid') || '';
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
    this.getInfo()
   
  },
  methods: {
      getInfo(){
        const data = {
          token: this.userinfo.token,
          order_id: this.orderid
        }
        this.$post('/api?m=Api&c=Order&a=jin_detail', data).then( (res) =>{
            if(res.status === 1){
              this.artInfo = res.result
              this.zfInfo = res.result.zhifu_info
              console.log(this.artInfo, this.zfInfo)
            }
        })
      },
        showModal(index){
          switch(index){
            case 1:
              this.bar1 = index
              break;
            case 2:
              this.bar2 = index
              break;
            case 3:
              this.bar3 = index
              break;
            default:
              break;
          }
        },
        hideModal(index){
          switch(index){
            case 1:
              this.bar1 = false
              break;
            case 2:
              this.bar2 = false
              break;
            case 3:
              this.bar3 = false
              break;
            default:
              break;
          }
        }
  }
};
</script>
<style lang="scss" scoped>

.bar{background-color:rgba(0,0,0,1);position:fixed;z-index:99;left:0;top:0px;padding-top:70px;width:100%;height:100%;text-align:center;}
.bar img{max-width:80%;border-radius:12px;}
.bar p{ padding-top:10px;}
.bar p img{width:33px;}
.bar .ttop{color:#fff;text-align:center;font-size:18px;line-height:50px;}


.btxt {
  background-color: #583c84;
  width: 100%;
  height: auto;
  margin: 12px 0;
}
.btxt .txt {
  color: #e69848;
  line-height: 26px;
  padding: 10px;
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
.mybank {
  background-color: #412c70;
  border-radius: 12px;
  margin: 10px;
  padding: 10px 10px 15px 10px;
}
.mybank .payt {
  color: #fff;
  font-size: 16px;
  font-weight: normal;
  height: 35px;
  line-height: 35px;
}
.mybank .payt .rtd {
  float: right;
  color: #fff;
  cursor: pointer;
}
.mybank .payt .rtd img {
  margin-left: 5px;
  height: 6px;
  transition: all 0.5s;
}
.mybank .list-a1 {
  width: 100%;
  border-top: #a599be 1px solid;
  overflow: hidden;
}
.mybank .list-a1 .titles {
  color: #7ecef4;
  padding: 20px 0 10px 0;
}
.mybank .list-a1 .ipt {
  background-color: #3b2669;
  line-height: 42px;
  padding: 0 15px;
  border-radius: 15px;
}
.mybank .list-a1 .ipt input {
  color: #c9caca;
  height: 38px;
  line-height: 28px;
  background: none;
  border: 0;
  outline: none;
  width: 100%;
}
.mybank .list-a1 .ipt img {
  max-height: 120px;
}
.mybank.open .hover-click img {
  color: #103f99;
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transition: all 0.5s;
}
.bank-submit {
  padding: 20px 10px;
}
.bank-submit input {
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
</style>
