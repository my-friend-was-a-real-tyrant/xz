<template>
  <div class="systemMessage">
    <div class="header">
      <div class="top-left">
        <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
          <div class="return">
            <img src="@/assets/img/return.png" />
          </div>
        </a>
      </div>
      <div class="top-m">系统消息</div>
    </div>

    <div class="system-box">
      <div class="tab" >
          <span v-for="(item, index) in tabNav" :key="index">
               <a :class="navIndex == index  ? 'on' : ''" @click="switchTab(index)">
                   {{item.value}}
               </a>
          </span>
      </div>
      <div class="content">
        <ul v-if="navIndex === 0">

          <div class="stxt" v-for="(item, index) in allMessage" :key="index">
            <h1>
              系统消息：
              <span class="time">{{item.add_time}}</span>
            </h1>
            <p>新增<span>USDT货币</span>{{item.title}}</p>
            <p v-html="item.description"></p>
            
            <p>您好：</p>
            <div class="txt">
                <div  v-html="item.content"></div>
            </div>
            <!-- <a href="#">
              <div class="more">
                点击查看更多
                <img src="@/assets/img/md.png" />
              </div>
            </a> -->
          </div>

        </ul>
        <ul  v-if="navIndex === 1">
            <div class="stxt" v-for="(item, index) in systemMessage" :key="index">
            <h1>
              系统消息：
              <span class="time">{{item.add_time}}</span>
            </h1>
            <p>新增<span>USDT货币</span>{{item.title}}</p>
            <p v-html="item.description"></p>
            
            <p>您好：</p>
            <div class="txt">
                <div  v-html="item.content"></div>
            </div>
            <!-- <a href="#">
              <div class="more">
                点击查看更多
                <img src="@/assets/img/md.png" />
              </div>
            </a> -->
          </div>
        </ul>
        <ul  v-if="navIndex === 2">
            <div class="stxt" v-for="(item, index) in activityMessage" :key="index">
            <h1>
              系统消息：
              <span class="time">{{item.add_time}}</span>
            </h1>
            <p>新增<span>USDT货币</span>{{item.title}}</p>
            <p v-html="item.description"></p>
            
            <p>您好：</p>
            <div class="txt">
                <div  v-html="item.content"></div>
            </div>
            <!-- <a href="#">
              <div class="more">
                点击查看更多
                <img src="@/assets/img/md.png" />
              </div>
            </a> -->
          </div>
        </ul>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "SystemMessage",
  components: {
    PageFooter
  },
  data() {
    return {
        tabNav: [
            {id:0 , value: '全部消息'},
            {id:1 , value: '系统消息'},
            {id:2 , value: '活动通知'}
        ],
        navIndex: 0,
        allMessage:[],
        systemMessage:[],
        activityMessage:[],
         userinfo: JSON.parse(localStorage.getItem('userinfo'))||{}
    };
  },
  created(){
      this.getAllMessage()
      this.getSystemMessage()
      this.getActivityMessage()
  },
  methods: {
    switchTab(index){
        this.navIndex = index
    },
    getAllMessage(){
        this.$post(`/api?m=api&c=user&a=messagelist&token=${this.userinfo.token}`).then( (res) => {
            if(res.status == 1){
                this.allMessage = res.result
            }else{
                this.Toast(res.msg);
            }
        })
    },
    getSystemMessage(){
        this.$post(`/api?m=api&c=user&a=messagelist&token=${this.userinfo.token}`).then( (res) => {
            if(res.status == 1){
                this.systemMessage = res.result
            }else{
                this.Toast(res.msg);
            }
        })
    },
    getActivityMessage(){
        this.$post(`/api?m=api&c=user&a=messagelist&token=${this.userinfo.token}`,{cat_id: 2}).then( (res) => {
            if(res.status == 1){
                this.activityMessage = res.result
            }else{
                this.Toast(res.msg);
            }
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.system-box {
  padding: 0px 0px 15px 0px;
  margin-top:20px;
}
.system-box .tab {
  position: relative;
  background-color: #553981;
  text-align: center;
}
.system-box .tab a {
  width: 33.333%;
  color: #fff;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
  cursor: pointer;
}
.system-box .tab a.on {
  color: #86ccfc;
  line-height: 35px;
  border-bottom: #86ccfc 1px solid;
}
.system-box .content {
  padding: 10px;
  color: #fff;
}
.system-box .stxt {
  background-color: #412c70;
  margin: 20px 0;
  border-radius: 12px;
  padding: 15px;
  color: #fff;
  line-height: 26px;
}
.system-box .stxt h1 {
  padding-bottom: 30px;
  font-weight: normal;
}
.system-box .stxt .time {
  padding-left: 3px;
}
.system-box .stxt .txt {
  padding: 15px 0;
}
.system-box .stxt .txt .t1 {
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
.system-box .stxt .more {
  color: #7ecef4;
  margin: auto;
  width: 100px;
  font-size: 12px;
}
.system-box .stxt .more img {
  padding-left: 3px;
  height: 6px;
}
</style>
