<template>
  <div>
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" @click="back">
          <div class="return"><img src="@/assets/img/return.png"></div>
        </a>
      </div>
      <div class="top-m">我的团队</div>
    </div>

    <div class="adoption-box">
      <div class="tab">
        <span>
          <a class="on">直推</a>
          <a>二级</a>
          <a>三级</a>
        </span>
      </div>
      <div class="content">
        <ul style="display:block;">
          无内容1
        </ul>
        <ul style="display:none;">
          无内容2
        </ul>
        <ul style="display:none;">
          无内容3
        </ul>
      </div>

    </div>


    <PageFooter></PageFooter>
  </div>
</template>

<script>
  import PageFooter from '@/components/PageFooter.vue'
export default {
name: "my-team",
  components: {
    PageFooter
  },
  methods: {
    back() {
      this.$router.replace('/mw')
    },
    init () {
      $(".adoption-box .tab a").mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('.adoption-box .content ul').hide();
        $('.adoption-box .content ul:eq('+index+')').show();
      });

      var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
      if(auto ==1){
        var number = 0;
        var maxNumber = $('.adoption-box .tab a').length;
        function autotab(){
          number++;
          number == maxNumber? number = 0 : number;
          $('.adoption-box .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
          $('.adoption-box .content ul:eq('+number+')').show().siblings().hide();
        }
        var tabChange = setInterval(autotab,60000);
        //鼠标悬停暂停切换
        $('.adoption-box').mouseover(function(){
          clearInterval(tabChange);
        });
        $('.adoption-box').mouseout(function(){
          tabChange = setInterval(autotab,60000);
        });
      }

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  }
}
</script>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/index.css";
</style>
