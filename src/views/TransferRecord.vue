<template>
  <div class="transfer-record">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">转让记录</div>
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
        <ul  v-if="navIndex === 0">无内容1</ul>
        <ul  v-if="navIndex === 1">无内容2</ul>
        <ul  v-if="navIndex === 2">无内容3</ul>
        <ul  v-if="navIndex === 3">无内容4</ul>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
export default {
  name: "TransferRecord",
  components: {
    PageFooter
  },
  data() {
    return {
      navIndex: 0,
      tabNav: [
        { id: 0, value: "待转让" },
        { id: 1, value: "转让中" },
        { id: 2, value: "已完成" },
        { id: 3, value: "取消/申诉" }
      ]
    };
  },
  created() {},
  methods: {
    switchTab(index) {
      this.navIndex = index;
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
</style>
