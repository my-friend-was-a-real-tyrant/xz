<template>
  <div>
      <div class="foot-h"></div>
    <div class="bottom_bar">
    <ul class="bottom_menu">
    <li><router-link to="/"><p><img src="@/assets/img/bt1.png"></p>幸运星座</router-link></li>
    <li><router-link to="/sc"><p><img src="@/assets/img/bt2.png"></p>服务中心</router-link></li>
    <li><router-link to="/mw"><p><img src="@/assets/img/bt3.png"></p>我的钱包</router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
};
</script>


<style scoped lang="scss">
/*底部浮动*/
.foot-h {
  height: 70px;
  width: 100%;
  overflow: hidden;
}
.bottom_bar {
  margin: auto;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(~@/assets/img/bottom_bar_bg.jpg) repeat-x;
  height: 70px;
}
.bottom_bar .bottom_menu {
  display: block;
  width: 100%;
  padding-top: 3px;
}
.bottom_bar .bottom_menu li {
  float: left;
  width: 33.3333%;
  text-align: center;
  position: relative;
}
.bottom_bar .bottom_menu li p {
  max-height: 38px;
}
.bottom_bar .bottom_menu li p img {
  max-height: 38px;
}
.bottom_bar .bottom_menu li a {
  display: block;
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding-top: 5px;
}
/*位置*/

.footh {
  width: 100%;
  height: 70px;
  overflow: hidden;
}
footer {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 999;
  padding: 10px 5% 5px 5%;
  border-top: 1px solid #ddd;
}
footer ul {
  width: 100%;
}
footer li {
  float: left;
  text-align: center;
  width: 33%;
}
footer li:nth-of-type(1) {
  width: 25%;
}
footer li:nth-of-type(2) {
  width: 50%;
}
footer li:nth-of-type(3) {
  width: 25%;
}
footer li.on a {
  color: #ff4f53;
}
footer li a {
  color: #999;
}
</style>
