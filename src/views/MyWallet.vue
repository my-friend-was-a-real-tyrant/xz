<template>
  <div class="mywallet">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/p1.png" />
          </div>
        </a>
      </div>
      <div class="top-m">我的钱包</div>
      <div class="top-set">
        <a href="#" @click="logout">
          <img src="@/assets/img/logout.png" />
        </a>
      </div>
    </div>

    <div class="wallet-h">
      <div class="avatar">
        <img :src="_imgUrl+userInfo.head_pic" />
      </div>
      <div class="id">昵称：{{userInfo.nickname}} <br/>团队级别：{{userInfo.level_name}}</div>
      <!-- <div class="group"></div> -->
    </div>
    <div class="wallet-list">
      <ul>
        <li>
          <div class="brt" @click="goGtc">BNB：{{userInfo.user_money}}</div>
        </li>
        <li>
          <div class="brt" @click="goJifen">积分：{{userInfo.pay_points}}</div>
        </li>
        <li>
          <div class="brt">GBC：{{userInfo.lucky_money}}</div>
        </li>
        <li>
          <div class="brt" @click="goRe">推荐受益：{{userInfo.distribut_money}}</div>
        </li>
        <li>
          <div class="brt" @click="goTe">累计收益：{{userInfo.leji_money}}</div>
        </li>
        <li>
          <div class="brt">总资产：{{userInfo.total_money || '0.00'}}</div>
        </li>
      </ul>
    </div>

    <div class="wallet-a">
      <ul>
        <li>
          <router-link to="/ar">
            <img src="@/assets/img/p4.png" />
            <p>抢购记录</p>
          </router-link>
        </li>
        <li>
          <router-link to="/tr">
            <img src="@/assets/img/p5.png" />
            <p>转让记录</p>
          </router-link>
        </li>
        <li>
          <router-link to="/rr">
            <img src="@/assets/img/p6.png" />
            <p>预约记录</p>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="wallet-b">
      <ul>
        <li>
          <a href="#" @click="goSetPay">
            <img src="@/assets/img/p7.png" />
            <p>安全中心</p>
          </a>
        </li>
        <li>
          <a href="#" @click="goShim">
            <img src="@/assets/img/p8.png" />
            <p>实名认证</p>
          </a>
        </li>
        <li>
          <router-link to="/myCard">
            <img src="@/assets/img/p9.png" />
            <p>我的银行卡</p>
          </router-link>
        </li>
        <li>
          <a href="#" @click="goMyteam">
            <img src="@/assets/img/p10.png" />
            <p>我的团队</p>
          </a>
        </li>
        <li>
          <a href="#" @click="goInvite">
            <img src="@/assets/img/p11.png" />
            <p>邀请好友</p>
          </a>
        </li>
        <li>
          <router-link to="/sm">
            <img src="@/assets/img/p12.png" />
            <p>系统消息</p>
          </router-link>
        </li>
      </ul>
    </div>

    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
// let userinfo = {}
// userinfo = JSON.parse(localStorage.getItem('userinfo'))
export default {
  name: "myWallet",
  components: {
    PageHeader,
    PageFooter
  },
  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    goMyteam () {
      this.$router.replace('/mt')
    },
    goRe(){
      this.$router.replace('/re')
    },
    goTe(){
      this.$router.replace('/te')
    },
    goGtc () {
      // this.$router.replace('/bst')
      this.Toast('未开放...')
    },
    goJifen () {
      this.$router.replace('/jifen')
    },
    goShim () {
      this.$router.replace('/shim')
    },
    goInvite () {
      this.$router.replace('/invite')
    },
    goSetPay () {
      this.$router.replace('/setPay?from=mw')
    },
    logout () {
      this.$fetch(`api?m=api&c=user&a=logout&token=${this.userInfo.token}`).then(res => {
        this.Toast(res.msg)
        if (res.status == 1) {
          this.$router.replace('/login')
        }
      })
    },
    getUserInfo() {

      this.userInfo = JSON.parse(localStorage.getItem('userinfo'))||{}
      console.log(this.userInfo)
      // this.$fetch("api?m=api&c=user&a=userInfo&token=" + userinfo.token).then(
      //     ( {result} ) => {
      //       this.userInfo = result;
      //     }
      //   );
    }
  }
};
</script>
<style lang="scss" scoped>
/*我的钱包*/
.wallet-h {
  background-color: #61418c;
  border-radius: 15px;
  font-size: 13px;
  margin: 10px;
  padding: 10px 10px 15px 10px;
  line-height: 26px;
  overflow: hidden;
}
.wallet-h .avatar {
  float: left;
  margin-right: 15px;
  background-color: #e7eef9;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 6px;
}
.wallet-h .avatar img {
  max-width: 40px;
  max-height: 40px;
}
.wallet-h .id {
  float: left;
  color: #fff;
}
.wallet-h .group {
  float: right;
  color: #fff;
}

.wallet-list {
  padding: 10px 5px;
  overflow: hidden;
}
.wallet-list li {
  float: left;
  width: 50%;
  padding: 10px 5px;
}
.wallet-list li .brt {
  width: 100%;
  background-color: #61418c;
  border-radius: 15px;
  font-size: 12px;
  padding: 0px 10px 0px 10px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  overflow: hidden;
}
.wallet-a {
  background-color: #61418c;
  border-radius: 15px;
  font-size: 13px;
  margin: 10px;
  margin-top: 20px;
  padding: 10px;
  line-height: 28px;
  overflow: hidden;
}
.wallet-a li {
  float: left;
  width: 33.333%;
  text-align: center;
  color: #fff;
}
.wallet-a li a {
  color: #fff;
}
.wallet-a li img {
  max-height: 40px;
}

.wallet-b {
  background-color: #fff;
  border-radius: 15px;
  font-size: 13px;
  margin: 10px;
  margin-top: 20px;
  padding: 10px;
  line-height: 28px;
  overflow: hidden;
}
.wallet-b li {
  float: left;
  width: 33.333%;
  margin: 10px 0;
  border-right: #eee 1px solid;
  text-align: center;
  color: #61418c;
}
.wallet-b li:nth-child(3) {
  border-right: none;
}
.wallet-b li:last-child {
  border-right: none;
}
.wallet-b li a {
  color: #61418c;
}
.wallet-b li img {
  max-height: 40px;
}
</style>
