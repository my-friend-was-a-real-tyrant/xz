<template>
  <div class="mywallet">
   
        
    <div class="header"><div class="top-left"><a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退"><div class="return"><img src="@/assets/img/p1.png"></div></a></div><div class="top-m">我的钱包</div><div class="top-set"><a href="#"><img src="@/assets/img/p2.png"></a></div></div>

    <div class="wallet-h">
    <div class="avatar"><img src="@/assets/img/p3.png"></div>
    <div class="id">ID/手机：15812345678</div>
    <div class="group">级别：注册会员</div>
    </div>  
    <div class="wallet-list"><ul>
    <li><div class="brt">GTC：0</div></li>
    <li><div class="brt">积分：5</div></li>
    <li><div class="brt">LUCKY：0</div></li>
    <li><div class="brt">推荐受益：0</div></li>
    <li><div class="brt">累计收益：0</div></li>
    <li><div class="brt">总资产：0</div></li>
    </ul></div>

    <div class="wallet-a"><ul>
    <li><a href="#"><img src="@/assets/img/p4.png"><p>领养记录</p></a></li>
    <li><a href="#"><img src="@/assets/img/p5.png"><p>转让记录</p></a></li>
    <li><a href="#"><img src="@/assets/img/p6.png"><p>预约记录</p></a></li>
    </ul></div>

    <div class="wallet-b"><ul>
    <li><a href="#"><img src="@/assets/img/p7.png"><p>安全中心</p></a></li>
    <li><a href="#"><img src="@/assets/img/p8.png"><p>实名认证</p></a></li>
    <li><a href="#"><img src="@/assets/img/p9.png"><p>我的银行卡</p></a></li>
    <li><a href="#"><img src="@/assets/img/p10.png"><p>我的团队</p></a></li>
    <li><a href="#"><img src="@/assets/img/p11.png"><p>邀请好友</p></a></li>
    <li><a href="#"><img src="@/assets/img/p12.png"><p>系统消息</p></a></li>
    </ul></div>



    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'myWallet',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
<style lang="scss" scoped>

/*我的钱包*/
.wallet-h{background-color:#61418c;border-radius:15px;font-size:13px;margin:10px;padding:10px 10px 15px 10px;line-height:40px;overflow:hidden;}
.wallet-h .avatar{float:left;margin-right:5px;background-color:#e7eef9;width:40px;height:40px;line-height:40px;text-align:center;border-radius:50%;overflow:hidden;}
.wallet-h .avatar img{max-width:40px;max-height:40px;}
.wallet-h .id{float:left;color:#FFF;}
.wallet-h .group{float:right;color:#FFF;}

.wallet-list{padding:10px 5px; overflow:hidden;}
.wallet-list li{float:left;width:50%;padding:10px 5px;}
.wallet-list li .brt{width:100%;background-color:#61418c;border-radius:15px;font-size:12px;padding:0px 10px 0px 10px;line-height:40px; color:#FFF; font-size:16px;overflow:hidden;}
.wallet-a{background-color:#61418c;border-radius:15px;font-size:13px;margin:10px;margin-top:20px;padding:10px;line-height:28px;overflow:hidden;}
.wallet-a li{float:left;width:33.333%;text-align:center;color:#FFF;}
.wallet-a li a{color:#FFF;}
.wallet-a li img{max-height:40px;}

.wallet-b{background-color:#fff;border-radius:15px;font-size:13px;margin:10px;margin-top:20px;padding:10px;line-height:28px;overflow:hidden;}
.wallet-b li{float:left;width:33.333%;margin:10px 0;border-right:#eee 1px solid;text-align:center;color:#61418c;}
.wallet-b li:nth-child(3){border-right:none;}
.wallet-b li:last-child{border-right:none;}
.wallet-b li a{color:#61418c;}
.wallet-b li img{max-height:40px;}

</style>
