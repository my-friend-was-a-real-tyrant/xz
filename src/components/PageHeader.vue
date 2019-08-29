<template>
  <div>
      <div class="header"><div class="top-left"><img src="@/assets/img/t1.png"></div><div class="top-right"><img src="@/assets/img/t2.png"></div></div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>


<style lang="scss">
.header{width:100%;padding-top:18px;color:#fff;position:relative;overflow:hidden;}
.header .top-left{float:left;padding-left:10px;position:absolute;}
.header .top-right{float:right;padding-right:10px;}
.header .top-m{width:100%;text-align:center;font-size:16px;}
.header img{max-height:32px;}
.header .return{cursor:pointer;height:22px;overflow:hidden;width:60px;}
.header .return img{max-height:20px;z-index:99;}
.header .top-set{position:absolute;top:18px;right:10px;}
.header .top-set img{max-height:20px;}
</style>
