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
      <div class="top-m">推荐收益</div>
    </div>

    <div class="btxt">
      <div class="txt">温馨提示：转让要选择星座区间，否则提交不成功！</div>
    </div>

    <div id="tabtxt" style="min-height:750px;">
      <div class="mybank">
        <div class="payt">
          <span>推荐收益：</span>
          <span style="color:#e69848">1000</span>
        </div>
        <div class="list-a1">
          <div class="titles">转让金额</div>
          <div class="ipt">
            <input type="text" name value="" v-model="reMoney" placeholder="转让金额" />
          </div>
          <div class="titles">转让区间</div>
          <div class="ipt select-a">
            <select name="select-re" v-model="regoodsId">
              <option v-for="(item, index) in reInfo" :key="index" :value="item.goods_id">幸运{{item.goods_cat_name}}（{{item.goods_cat}}）</option>
            </select>
          </div>
        </div>
      </div>
      <div class="bst-submit">
        <input type="button" @click="subRe" value="提交转让" />
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
export default {
  name: "RecommendEarnings",
  components: {
    PageFooter
  },
  data() {
    return {
      userinfo: {},
      reInfo:[],
      regoodsId:'',
      reMoney:''
    };
  },
  created() {
    this.userinfo = JSON.parse(localStorage.getItem("userinfo")) || {};
  },
  mounted(){
      this.getQj()
  },
  methods: {
      subRe(){
          const data = {
                token: this.userinfo.token,
                goods_id: this.regoodsId,
                money: this.reMoney
            }
            this.$post('/api?m=api&c=Order&a=add_order_zr', data).then((res) => {
                if (res.status === 1) {
                    this.Toast(res.msg);
                    this.$router.replace('/mw');
                }else{
                    this.Toast(res.msg);
                    return false;
                }
            })
      },
      getQj(){
           const data = {
                token: this.userinfo.token
            }
            this.$post('/api?m=api&c=User&a=getincome', data).then((res) => {
                if (res.status === 1) {
                    this.reInfo = res.result.goods_cat;
                }
            })
      }
  }
};
</script>
<style lang="scss" scoped>
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

.select-a {
  width: 100%;
}
.select-a select {
  width: 100%;
  border: none;
  background: none;
  color: #fff;
  height: 35px;
  line-height: 35px;
  outline: none;
  padding-left: 10px;
}
.select-a select option {
  color: #000;
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
</style>
