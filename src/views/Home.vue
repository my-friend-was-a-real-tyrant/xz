<template>
    <div class="home">
        <PageHeader/>
        <div class="banner"><img src="@/assets/img/b1.png"></div>
        <div class="index-p">
            <ul>

                <li v-for="(item,key) in GoodsList" :key="key">
                    <div class="box">
                        <div class="top-list">
                            <p><span class="c1">价值：</span><span
                                    class="c2">{{item.shop_price}}-{{item.market_price}}</span></p>
                            <p><span class="c1">领养时间：</span><span
                                    class="c2">{{item.start_time}}-{{item.end_time}}</span></p>
                            <p><span class="c1">预约/即抢领养积分：</span><span class="c2">{{item.spu}}/{{item.sku}}</span></p>
                            <p><span class="c1">智能合约收益：</span><span
                                    class="c2">{{item.order_day}}天/{{item.order_rate}}%</span></p>
                            <p><span class="c1">可挖LUCKY：</span><span class="c2">{{item.can_lucky}}枚</span></p>
                            <p><span class="c1">可挖GTC：</span><span class="c2">{{item.can_gtc}}%</span></p>
                        </div>
                        <div class="bottoms">
                            <div class="txt1"><img :src="_imgUrl+item.goods_images"></div>
                            <div class="txt2"><img src="@/assets/img/x1s.png">
                                <p>{{item.goods_name}}</p>
                                <div class="bt" v-if="realTime.H==11&&realTime.Min>0&&realTime.Min<29">预约</div>
                                <div class="bt " v-else-if="realTime.H==11&&realTime.Min>=29&&realTime.Min<30">倒计时{{count}}</div>
                                <div class="bt on2" @click="rushOrder(item)" v-else-if="realTime.H==11&&realTime.Min>=30&&realTime.Min<32">开抢</div>
                                <div class="bt on1" v-else>蜕变中</div>
                                --
                            </div>
                        </div>
                    </div>
                </li>

                <!--      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x2.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x2s.png">
                                      <p>幸运金牛座</p>
                                      <div class="bt on1">繁殖中</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x3.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x3s.png">
                                      <p>幸运双子座</p>
                                      <div class="bt on2">繁殖中</div>
                                  </div>
                              </div>
                          </div>
                      </li>

                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x4.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x4s.png">
                                      <p>幸运巨蟹座</p>
                                      <div class="bt on2">繁殖中</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x5.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x5s.png">
                                      <p>幸运狮子座</p>
                                      <div class="bt">繁殖中</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x6.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x6s.png">
                                      <p>幸运处女座</p>
                                      <div class="bt">繁殖中</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x7.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x7s.png">
                                      <p>幸运天秤座</p>
                                      <div class="bt on1">开抢</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x8.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x8s.png">
                                      <p>幸运天蝎座</p>
                                      <div class="bt">开抢</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x9.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x9s.png">
                                      <p>幸运射手座</p>
                                      <div class="bt on2">0分28秒</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x10.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x10s.png">
                                      <p>幸运摩羯座</p>
                                      <div class="bt on2">预约</div>
                                  </div>
                              </div>
                          </div>
                      </li>


                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x11.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x11s.png">
                                      <p>幸运水瓶座</p>
                                      <div class="bt">繁殖中</div>
                                  </div>
                              </div>
                          </div>
                      </li>

                      <li>
                          <div class="box">
                              <div class="top-list">
                                  <p><span class="c1">价值：</span><span class="c2">100-300</span></p>
                                  <p><span class="c1">领养时间：</span><span class="c2">11:00-11:30</span></p>
                                  <p><span class="c1">预约/即抢领养积分：</span><span class="c2">2/4</span></p>
                                  <p><span class="c1">智能合约收益：</span><span class="c2">5天/15%</span></p>
                                  <p><span class="c1">可挖LUCKY：</span><span class="c2">1枚</span></p>
                                  <p><span class="c1">可挖GTC：</span><span class="c2">1%</span></p>
                              </div>
                              <div class="bottoms">
                                  <div class="txt1"><img src="@/assets/img/x12.png"></div>
                                  <div class="txt2"><img src="@/assets/img/x12s.png">
                                      <p>幸运双鱼座</p>
                                      <div class="bt">繁殖中</div>
                                  </div>
                              </div>
                          </div>
                      </li>
      -->

            </ul>
        </div>

        <PageFooter/>
    </div>
</template>

<script>

    import PageHeader from '@/components/PageHeader.vue'
    import PageFooter from '@/components/PageFooter.vue'
    import {dealWithTime} from '@/tools.js'

    console.log(dealWithTime);
    export default {
        name: 'home',
        components: {
            PageHeader,
            PageFooter
        },
        data() {
            return {
                GoodsList: '',
                realTime: '',
                totalTime: 60,
                count:'',
                timer2: null,
                timer1: null
            }
        },
        created() {
            this.getGoodsList()
        },

        mounted() {
            // 页面加载完后显示当前时间
            this.realTime = dealWithTime(new Date())
            // 定时刷新时间
            let _this = this
            // 定时器
            this.timer1 = setInterval(function () {
                _this.realTime = dealWithTime(new Date()) // 修改数据date
                if (_this.realTime.H==11&&_this.realTime.Min>=29&&_this.realTime.Min<30) {
                    _this.getCode()
                }
            }, 1000)

            // if(this.)
        },
        methods: {
            // 60秒倒计时
            getCode() {
                const TIME_COUNT = 60;
                if (!this.timer2) {
                    this.count = TIME_COUNT;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
            // 首页list
            getGoodsList() {
                this.$fetch('api?m=Api&c=Goods&a=goodsList').then(({result}) => {
                    this.GoodsList = result.goods_list
                })
            },
            // 抢购
            rushOrder(item){
                this.$post('api?m=api&c=Order&a=add_order_jin',{
                    token:localStorage.getItem("token"),goods_id:item.goods_id
                }).then(({result}) => {
                    // 处理获取成功的文子
                    console.log(result)
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .banner {
        padding: 10px;
    }

    /*首页*/
    .index-p {
        max-width: 720px;
        padding: 0 5px;
    }

    .index-p li {
        float: left;
        width: 50%;
        padding: 10px 5px;
    }

    .index-p li .box {
        background: url('~@/assets/img/index-p-bg.png') no-repeat;
        background-size: 100% 100%;
        width: 100%;
        padding: 5px 10px;
        font-size: 12px;
        overflow: hidden;
    }

    .index-p li .box .top-list {
        width: 100%;
        padding-bottom: 5px;
        border-bottom: #fff 1px dashed;
        overflow: hidden;
    }

    .index-p li .box .top-list p {
        width: 100%;
        line-height: 20px;
    }

    .index-p li .box .top-list p .c1 {
        color: #32b7ec;
        padding-right: 0px;
        font-size: 12px;
    }

    .index-p li .box .top-list p .c2 {
        color: #fff;
    }

    .bottoms {
        width: 100%;
        padding-top: 15px;
        padding-bottom: 5px;
        color: #FFF;
        position: relative;
        overflow: hidden;
    }

    .bottoms .txt1 {
        float: left;
        width: 40%;
        text-align: center;
        vertical-align: bottom;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .bottoms .txt1 img {
        max-height: 70px;
    }

    .bottoms .txt2 {
        float: right;
        width: 60%;
        text-align: center;
    }

    .bottoms .txt2 img {
        max-height: 20px;
    }

    .bottoms .txt2 p {
        line-height: 26px;
    }

    .bottoms .txt2 .bt {
        margin: auto;
        width: 70px;
        height: 24px;
        line-height: 24px;
        background-color: #7ecef4;
        border-radius: 10px;
        font-size: 15px;
    }

    .bottoms .txt2 .bt.on1 {
        background-color: #e69848;
    }

    .bottoms .txt2 .bt.on2 {
        background-color: #6a4995;
    }

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        color: #c9caca;
    }

    input:-moz-placeholder, textarea:-moz-placeholder {
        color: #c9caca;
        font-size: 16px;
    }

    input::-moz-placeholder, textarea::-moz-placeholder {
        color: #c9caca;
        font-size: 16px;
    }

    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        color: #c9caca;
    }

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

    @media screen and (max-width: 360px) {
        .index-p li .box .top-list p {
            overflow: hidden;
            font-size: 12px;
            padding: 5px 0;
            line-height: 16px;
        }
    }
</style>
