<template>
  <div class="workorder">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">在线工单</div>
    </div>
    <div class="btxt">
      <div class="txt">工单说明：客服在线时间9：00-22：00</div>
    </div>
    <form>
      <div class="bst-txt">
        <h1></h1>
        <div class="titles">工单内容</div>
        <div class="ipt" style="height:150px;line-height:150px;">
          <input type="text" v-model="orderContent"  placeholder="请输入工单内容" />
        </div>
      </div>
      <div class="bst-submit">
        <div class="submit-btn"  @click="orderSubmit">提交工单</div>
      </div>
    </form>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "WorkOrder",
  components: {
    PageFooter
  },
  data () {
    return {
      orderContent:''
    }
  },
  methods: {
    orderSubmit(){
      if(!this.orderContent){
        this.Toast('提交工单内容不能为空')
      }else{
         const userinfo = JSON.parse(localStorage.getItem("userinfo"));
         this.$post('/api/?m=api&c=user&a=add_comment', {
           token: userinfo.token,
           content: this.orderContent
         }).then( (res) => {
           if(res.status === 1){
             this.Toast(res.msg);
             setTimeout(() => {
               this.$router.replace('/')
             }, 1500);
           }else{
             this.Toast(res.msg)
           }
         })
      }
      
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
.bst-submit .submit-btn{
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
