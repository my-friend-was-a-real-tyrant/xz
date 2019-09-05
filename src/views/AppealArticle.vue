<template>
  <div class="appeal-article">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">申诉详情</div>
    </div>
    <div class="btxt">
      <div class="txt">温馨提示：对方未确认请在此申诉</div>
    </div>
    <div id="tabtxt" style="min-height:750px;">
      <div class="mybank">
        <div class="payt hover-click">
          <span>区块星座编号：{{ssInfo.order_sn}}</span>
        </div>
        <div class="list-a1">
          <div class="titles">
            星座：
            <span style="color:#fff">{{ssInfo.goods_name}}</span>
          </div>
          <div class="titles">
            价值：
            <span style="color:#fff">{{ssInfo.order_money}}</span>
          </div>
          <div class="titles">
            智能合约收益：
            <span style="color:#fff">{{ssInfo.profit_interval}}</span>
          </div>
          <div class="titles">
            匹配时间：
            <span style="color:#fff">{{ssInfo.pipei_time}}</span>
          </div>
          <div class="titles">
            状态：
            <span style="color:#fff" v-if="ssInfo.status == 3">超时未确认</span>
            <span style="color:#fff" v-if="ssInfo.status == 5">已投诉</span>
          </div>
          <form v-if="ssInfo.status == 3">
            <div class="bst-txt">
              <div class="ipt" style="height:80px;line-height:80px;">
                <input type="text" name v-model="content" placeholder="请输入投诉内容" />
              </div>
            </div>
            <div class="bst-submit">
              <input type="button"   @click="subForm()" value="提交投诉" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "AppealArticle",
  components: {
    PageFooter
  },
  data() {
    return {
      orderid: '',
      userinfo: {},
      content:'',
      ssInfo:[]
    };
  },
  created() {
    this.orderid = localStorage.getItem('aaorderid') || '';
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
  },
  mounted(){
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
              this.ssInfo = res.result
              console.log(this.ssInfo)
            }
        })
    },
    subForm(){
      const data = {
          token: this.userinfo.token,
          order_id: this.orderid,
          content: this.content,
          type: 1
        }
        if(data.content){
            this.$post('/api?m=Api&c=User&a=order_ts', data).then( (res) =>{
              if(res.status === 1){
                this.Toast(res.msg)
                setTimeout(() => {
                  this.$router.replace('/ar');
                }, 1000);
              }
          })
        }else{
          this.Toast('投诉内容不能为空！')
        }
        
    }
  }
};
</script>
<style lang="scss" scoped>
.btxt{background-color:#583c84;width:100%;height:auto;margin:12px 0;}
.btxt .txt{color:#e69848;line-height:26px;padding:10px;}
.mybank{background-color:#412c70;border-radius:12px;margin:10px;padding:10px 10px 15px 10px;}
.mybank .payt{color:#fff;font-size:16px;font-weight:normal; height:35px;line-height:35px;}
.mybank .payt .rtd{float:right;color:#fff;cursor:pointer;}
.mybank .payt .rtd img{margin-left:5px;height:6px;transition:all 0.5s;}
.mybank .list-a1{width:100%;border-top:#a599be 1px solid;overflow:hidden;}
.mybank .list-a1 .titles{color:#7ecef4; padding:20px 0 10px 0;}
.mybank .list-a1 .ipt{background-color:#3b2669;line-height:42px; padding:0 15px;border-radius:15px;}
.mybank .list-a1 .ipt input{color:#c9caca;height:38px;line-height:28px;background:none;border:0;outline:none; width:100%;}
.mybank .list-a1 .ipt img{max-height:120px;}
.mybank.open .hover-click img{color:#103f99;-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);transform:rotate(180deg);-o-transform:rotate(180deg);transition:all 0.5s;}
.bank-submit{padding:20px 10px;}
.bank-submit input{background-color:#3b2669;font-size:16px;text-align:center;width:100%; height:45px; line-height:45px;color:#c9caca;border-radius:15px;border:0;outline:none;}

.bst-txt{background-color:#412c70;border-radius:12px;margin:10px;padding:10px 10px 15px 10px;}
.bst-txt h1{color:#fff; font-size:14px; font-weight:normal; height:35px;line-height:35px;border-bottom:#a599be 1px solid;}
.bst-txt h1 span{color:#e69848;padding:0 3px;}
.bst-txt .titles{color:#7ecef4; padding:20px 0 10px 0;}
.bst-txt .ipt{background-color:#3b2669;height:42px;line-height:42px; padding:0 15px;border-radius:15px;}
.bst-txt .ipt input{color:#c9caca;height:38px;line-height:28px;background:none;border:0;outline:none; width:100%;}
.bst-submit{padding:20px 10px;}
.bst-submit input{background-color:#3b2669;font-size:16px;text-align:center;width:100%; height:45px; line-height:45px;color:#c9caca;border-radius:15px;border:0;outline:none;}

</style>
