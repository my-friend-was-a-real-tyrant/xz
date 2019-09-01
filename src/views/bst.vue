<template>
    <div class="bst">
        <div class="header"><div class="top-left"><a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退"><div class="return"><img src="static/img/return.png"></div></a></div><div class="top-m">BST提现</div></div>

        <div class="btxt"><div class="txt">提现说明：最小提现1枚，最大提现1000枚，手续费1%</div></div>
        <form>
            <div class="bst-txt"><h1>可提现BST：<span id="">0.00</span>枚</h1>
                <div class="titles">提现地址</div>
                <div class="ipt"><input type="text" name="" value="" placeholder="请输入BST钱包地址"></div>
                <div class="titles">提现数量</div>
                <div class="ipt"><input type="text" name="" value="" placeholder="请输入提现数量"></div>
                <div class="titles">交易密码</div>
                <div class="ipt"><input type="text" name="" value="" placeholder="请输入交易密码"></div>
            </div>
            <div class="bst-submit"><input type="submit" value="提交申请"></div>
        </form>






        <div class="foot-h"></div>
        <div class="bottom_bar">
            <ul class="bottom_menu">
                <li><a href="#"><p><img src="static/img/bt1.png"></p>幸运星座</a></li>
                <li><a href="#"><p><img src="static/img/bt2.png"></p>服务中心</a></li>
                <li><a href="#"><p><img src="static/img/bt3.png"></p>我的钱包</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "bst"
  }
</script>

<style scoped>
    @import "../assets/css/login.css";
    @import "../assets/css/index.css";
</style>