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
          <div class="reservation" v-for="item in list1" v-if="list1.length">
            <li>
              <div class="left"><h1>{{item.nickname}}</h1><p class="time">{{item.mobile}}</p></div>
              <div class="right"><p>{{item.reg_time | formatTime}}</p></div>
            </li>
          </div>
          <div v-if="!list1.length">无内容</div>


        </ul>
        <ul style="display:none;">
          <div class="reservation" v-for="item in list2" v-if="list2.length">
            <li>
              <div class="left"><h1>{{item.nickname}}</h1><p class="time">{{item.mobile}}</p></div>
              <div class="right"><p>{{item.reg_time | formatTime}}</p></div>
            </li>
          </div>
          <div v-if="!list2.length">无内容</div>
        </ul>
        <ul style="display:none;">
          <div class="reservation" v-for="item in list3" v-if="list3.length">
            <li>
              <div class="left"><h1>{{item.nickname}}</h1><p class="time">{{item.mobile}}</p></div>
              <div class="right"><p>{{item.reg_time | formatTime}}</p></div>
            </li>
          </div>
          <div v-if="!list3.length">无内容</div>
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
  filters: {
    formatTime (time) {
      let date = new Date(time)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      let hour = date.getHours() < 10  ? '0' + date.getHours() : date.getHours()
      let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour}:${min}:${second}`
    }
  },
  data () {
    return {
      userinfo: {},
      list1: [],
      list2: [],
      list3: [],
    }
  },
  methods: {
    back() {
      this.$router.replace('/mw')
    },
    getData (leader) {
      this.$post(`api?m=api&c=user&a=getteams&token=${this.userinfo.token}`, {
        leader
      }).then(res => {
        if (res.status == 1) {
          switch (leader) {
            case 1: this.list1 = res.result; break
            case 2: this.list2 = res.result; break
            case 3: this.list3 = res.result; break
          }
        }
      })
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
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
    this.getData(1)
    this.getData(2)
    this.getData(3)
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
