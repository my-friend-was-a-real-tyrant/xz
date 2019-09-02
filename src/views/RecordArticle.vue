<template>
  <div class="record-article">
    <div class="header"><div class="top-left"><a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退"><div class="return"><img src="@/assets/img/return.png"></div></a></div><div class="top-m">匹配详情</div></div>
    <div class="btxt"><div class="txt">温馨提示：确认好信息在上传信息</div></div>
    <div id="tabtxt" style="min-height:750px;">
    <div class="mybank">
    <div class="payt hover-click">
        <span>区块星座编号：TP100000001</span>
    </div>
    <div class="list-a1">
    <div class="titles">星座：<span style="color:#fff">幸运水瓶座</span></div>
    <div class="titles">价值：<span style="color:#fff">201 GTC</span></div>
    <div class="titles">智能合约收益：<span style="color:#fff">15天/15%</span></div>
    <div class="titles">匹配时间：<span style="color:#fff">2019-08-08 12:00:00</span></div>
    <div class="titles">状态：<span style="color:#fff">待打款</span></div>
    <div class="titles">上传打款截图:</div>
    <div class="ipt" style="text-align:center;padding:20px 0;"><img src="@/assets/img/ewm.jpg"></div></div>
    </div>


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
     
    };
  },
  created() {},
  methods: {
 
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
</style>
