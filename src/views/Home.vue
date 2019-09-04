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
                            <p><span class="c1">预约/即抢积分：</span><span class="c2">{{item.spu}}/{{item.sku}}</span></p>
                            <p><span class="c1">智能合约收益：</span><span
                                    class="c2">{{item.order_day}}天/{{item.order_rate}}%</span></p>
                            <p><span class="c1">可挖LUCKY：</span><span class="c2">{{item.can_lucky}}枚</span></p>
                            <p><span class="c1">可挖GTC：</span><span class="c2">{{item.can_gtc}}%</span></p>
                        </div>
                        <div class="bottoms">
                            <div class="txt1"><img :src="_imgUrl+item.goods_images"></div>
                            <div class="txt2"><img src="@/assets/img/x1s.png">
                                <p>{{item.goods_name}}</p>
                                <!--is_on_sale 上架 order_on 预约-->
                                <div v-if="item.is_on_sale">
                                    <div class="bt" v-if="showTime<item.start_time_unix" @click="rushOrder(item,1)">
                                        {{item.order_on==0?"预约":"预约中"}}
                                    </div>
                                    <div class="bt on2" @click="rushOrder(item,2)"
                                         v-else-if="showTime>(item.start_time_unix)&&showTime<(item.end_time_unix-60*1000)">
                                        <span></span>
                                        <!--                                        {{item.order_on==2?'抢购成功':'抢购'}}-->
                                        {{item.order_on==1?'蜕变中':item.order_on==2?'抢购成功':'抢购'}}
                                    </div>
                                    <div class="bt "
                                         v-else-if="showTime>(item.end_time_unix-60*1000)&&showTime<(item.end_time_unix)">
                                        倒计时{{parseInt((item.end_time_unix-showTime)/60000)}}
                                    </div>

                                    <div class="bt on1" v-else>繁殖中</div>
                                </div>
                                <div class="bt on1" style="background-color: #ddd" v-else>蜕变中</div>
                                --
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

        <PageFooter/>
    </div>
</template>

<script>
    import PageHeader from '@/components/PageHeader.vue'
    import PageFooter from '@/components/PageFooter.vue'
    // import {dealWithTime} from '@/tools.js'

    export default {
        name: 'home',
        components: {
            PageHeader,
            PageFooter
        },
        data() {
            return {
                showTime: '',
                GoodsList: [],
                realTime: '',
                totalTime: 60,
                count: '',
                thisTime: '',
                timer2: null,
                timer1: null,
                userinfo:{}
            }
        },
        created() {
            this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
        },
        computed: {},
        mounted() {
            this.compareTime()
            this.getGoodsList()
        },
        methods: {
            // 当前时间
            compareTime() {
                let timer1 = setInterval(() => {
                          this.showTime = this.getCurrentTime()
                }, 1000)
            },
            getCurrentTime: function () {
                let data = new Date()
                let Y = data.getFullYear()
                let M = data.getMonth() + 1
                let D = data.getDate()
                let H = data.getHours()
                let Min = data.getMinutes()
                let S = data.getSeconds()
                if (Min == '29' || Min == '59') {
                    if(S=='59'){
                        this.getGoodsList()
                    }
                }
                return new Date(Y + '-' + M + '-' + D + '- ' + H + ':' + Min + ':' + S).getTime()
                // return Y + '-' + M + '-' + D + '- ' + H + ':' + Min + ':' + S
            },
            // 首页list
            getGoodsList() {
                this.$fetch('api?m=Api&c=Goods&a=goodsList',
                    {token: this.userinfo.token}).then(({result}) => {
                    this.GoodsList = result.goods_list
                })
            },
            // 抢购 预约
            rushOrder(item, type) {
                // 预约过的 不能抢
                if (item.order_on == 1) return
                this.$post('api?m=api&c=Order&a=add_order_jin', {
                    token: this.userinfo.token,
                    goods_id: item.goods_id,
                    type: type
                }).then(({result}) => {
                    this.getGoodsList()
                })
            }
        },
        beforeDestroy() {
            //清除定时器
            clearInterval(this.timer1);
            clearInterval(this.timer2);
        },
        destroyed() {
            //清除定时器
            clearInterval(this.timer1);
            clearInterval(this.timer2);
        },
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
