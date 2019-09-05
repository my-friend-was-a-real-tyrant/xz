<template>
    <div class="tansfer-article">
        <div class="header">
            <div class="top-left">
                <a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
                    <div class="return">
                        <img src="@/assets/img/return.png"/>
                    </div>
                </a>
            </div>
            <div class="top-m">订单确认</div>
        </div>
        <div class="btxt">
            <div class="txt">温馨提示：确认好信息在确认</div>
        </div>

        <div id="tabtxt" style="min-height:750px;">
            <div class="mybank">
                <div class="payt">
                    <span>区块星座编号：{{artInfo.order_sn}}</span>
                </div>
                <div class="list-a1">
                    <div class="titles" style="padding:10px 0 0 0">
                        星座：
                        <span style="color:#fff">{{artInfo.goods_name}}</span>
                    </div>
                    <div class="titles" style="padding:10px 0 0 0">
                        价值：
                        <span style="color:#fff">{{artInfo.order_money}}</span>
                    </div>
                    <div class="titles" style="padding:10px 0 0 0">
                        智能合约收益：
                        <span style="color:#fff">{{artInfo.profit_interval}}</span>
                    </div>
                    <div class="titles" style="padding:10px 0 0 0">
                        匹配时间：
                        <span style="color:#fff">{{artInfo.pipei_time}}</span>
                    </div>
                    <div class="titles" style="padding:10px 0 0 0">
                        状态：
                        <span style="color:#fff" v-if="artInfo.qr_zt == 0">待确认</span>
                        <span style="color:#fff" v-if="artInfo.qr_zt == 1">已确认</span>
                    </div>
                </div>
                <div class="list-a1">
                            <div class="payt">
                                <span>打款人信息：</span>
                            </div>
                            <div class="titles" style="padding:10px 0 0 0">姓名：<span style="color:#fff">{{artInfo.zhifu_info}}</span></div>
                            <div class="titles" style="padding:10px 0 0 0">对方打款截图:</div>
                            <div class="ipt" style="text-align:center;padding:20px 0;">
                                <img :src="_imgUrl + artInfo.image"></div>
                            <div class="bst-submit" v-if="artInfo.qr_zt == 0"><input type="button" @click="submitTransfer()" value="确认已打款"></div>
                        </div>
            </div>
        </div>

        <PageFooter/>
    </div>
</template>

<script>
    import PageFooter from "@/components/PageFooter.vue";

    export default {
        name: "TransferArticle",
        components: {
            PageFooter
        },
        data() {
            return {
                orderid: '',
                userinfo: {},
                artInfo: []
            };
        },
        created() {
            this.orderid = localStorage.getItem('arorderid') || '';
            this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {}
            this.getInfo()
        },
        methods: {
            getInfo() {
                const data = {
                    token: this.userinfo.token,
                    order_id: this.orderid
                }
                this.$post('/api?m=Api&c=Order&a=chu_detail', data).then((res) => {
                    if (res.status === 1) {
                        console.log(res)
                        this.artInfo = res.result
                    }
                })
            },
            submitTransfer(){
                 const data = {
                    token: this.userinfo.token,
                    order_id: this.orderid
                }
                console.log(data)
                this.$post('/api?m=api&c=Order&a=order_conf', data).then((res) => {
                    if (res.status === 1) {
                        this.Toast(res.msg);
                        setTimeout(() => {
                            this.$router.replace('/tr')
                        }, 1500);
                    }
                })
            }
        }
    };
</script>
<style lang="scss" scoped>

    .bar {
        background-color: rgba(0, 0, 0, 1);
        position: fixed;
        z-index: 99;
        left: 0;
        top: 0px;
        padding-top: 70px;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .bar img {
        max-width: 80%;
        border-radius: 12px;
    }

    .bar p {
        padding-top: 10px;
    }

    .bar p img {
        width: 33px;
    }

    .bar .ttop {
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 50px;
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

    .bst-submit {
        padding: 20px 10px;
    }

    .bst-submit input {
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

    .mybank {
        background-color: #412c70;
        border-radius: 12px;
        margin: 10px;
        padding: 10px 10px 15px 10px;
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
        border-top: #a599be 1px solid;
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
