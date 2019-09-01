<template>
  <div class>
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">客服中心</div>
    </div>

    <div id="tabtxt">
      <div class="mybank">
        <div class="list-a1" v-for="(item, index) in onlineService" :key="index">
            <div class="titles"></div>
            <div class="ipt">
              <input type="text" name :value="item.name + '客服-' + item.value" readonly="readonly" />
            </div>
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "OnlineService",
  components: {
    PageFooter
  },
  data() {
    return {
      onlineService: []
    };
  },
  created() {
    this.getService();
  },
  methods: {
    getService() {
      const userinfo = JSON.parse(localStorage.getItem("userinfo"));
      this.$post("/api?m=api&c=user&a=userkefu", {
        token: userinfo.token
      }).then(res => {
        this.onlineService = res.result;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mybank {
  background-color: #412c70;
  border-radius: 12px;
  margin: 10px;
  padding: 10px 10px 15px 10px;
  margin-top: 20px;
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
  // border-top: #a599be 1px solid;
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
