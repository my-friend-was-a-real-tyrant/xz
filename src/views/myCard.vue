<template>
    <div>
        <div class="header">
            <div class="top-left"><a href="javascript:;" onclick="javascript:history.go(-1);return false;" title="后退">
                <div class="return"><img src="@/assets/img/return.png"></div>
            </a></div>
            <div class="top-m">我的银行卡</div>
        </div>

        <div class="btxt">
            <div class="txt">实名基本条件温馨提示：需要添加两种或以上正确收款方式才给予审核通过！只有一种，不给予通过！</div>
        </div>


        <!--        <script src="@/assets/js/slide-tabtxt.js"></script>-->
        <div id="tabtxt" style="min-height:750px;">
            <div class="mybank">
                <div class="payt hover-click" data-key="zfb"><span>支付宝</span>
                    <div class="rtd"><span id="">{{cardInfoList.alipay_complete==1?"已完成":"未完善"}}</span><img
                            src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1">
                    <div class="titles">支付宝账号</div>
                    <!--:disabled="cardInfoList.alipay_complete==1"-->
                    <div class="ipt"><input type="text" name="" v-model="cardInfoList.alipay_account"
                                            :disabled="cardInfoList.alipay_complete==1"
                    ></div>

                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" v-model='cardInfoList.real_name'
                                            :disabled="cardInfoList.alipay_complete==1"></div>
                    <div class="titles">收款二维码</div>
                    <div v-if="!cardInfoList.alipay_code" class="ipt" style="text-align:center;padding:20px 0;">
                        <van-uploader  multiple :max-count="1" :before-read="sendInfo"
                                      :after-read="onRead">
                            <img src="@/assets/img/uploads.png">
                        </van-uploader>
                    </div>
                    <div class="ipt" v-else style="text-align:center;padding:20px 0;"><img
                            :src="_imgUrl+cardInfoList.alipay_code"></div>
                </div>
            </div>

            <div class="mybank">
                <div class="payt hover-click" data-key="wx"><span>微信</span>
                    <div class="rtd"><span id="">{{cardInfoList.wx_complete==1?"已完成":"未完善"}}</span><img
                            src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">微信账号</div>
                    <div class="ipt"><input type="text" name="" v-model="cardInfoList.wx_account"
                                            :disabled="cardInfoList.wx_complete==1"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" v-model="cardInfoList.real_name"
                                            :disabled="cardInfoList.wx_complete==1"></div>
                    <div class="titles">收款二维码</div>
                    <div v-if="!cardInfoList.wx_code" class="ipt" style="text-align:center;padding:20px 0;">
                        <van-uploader  multiple :max-count="1" :before-read="sendInfo"
                                      :after-read="onRead">
                            <img src="@/assets/img/uploads.png">
                        </van-uploader>
                    </div>
                    <div class="ipt" v-else style="text-align:center;padding:20px 0;"><img
                            :src="_imgUrl+cardInfoList.wx_code"></div>
                </div>
            </div>

            <div class="mybank">
                <div class="payt hover-click" data-key="yh"><span>银行</span>
                    <div class="rtd"><span id="">{{cardInfoList.bank_complete==1?"已完成":"未完善"}}</span><img
                            src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">银行账号</div>
                    <div class="ipt"><input type="text" name="" v-model="cardInfoList.bank_account"
                                            :disabled="cardInfoList.bank_complete==1"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" v-model="cardInfoList.bank_real_name"
                                            :disabled="cardInfoList.bank_complete==1"></div>
                    <div class="titles">银行名</div>
                    <div class="ipt"><input type="text" name="" v-model="cardInfoList.bank_name"
                                            :disabled="cardInfoList.bank_complete==1"></div>
                    <div class="titles">开户行</div>
                    <div class="ipt"><input type="text" name="" v-model="cardInfoList.bank_address" placeholder="开户行全称"
                                            :disabled="cardInfoList.bank_complete==1"></div>

                    <div style="text-align: center;margin-top: 10px" @click="sendInfo()&&postCardAlinfo({
                    bank_account:cardInfoList.bank_account,
                    bank_address:cardInfoList.bank_address,
                    bank_real_name: cardInfoList.bank_real_name,
                    bank_name: cardInfoList.bank_name,
                    type:3
                    })">
                        <b v-if="!cardInfoList.bank_complete==1">提交银行卡</b>
                    </div>
                </div>
            </div>

            <div class="mybank">
                <div class="payt"><span>USDT-OMNI</span>
                    <div class="rtd"><span id="">未开放</span><img src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">USDT-OMNI账号</div>
                    <div class="ipt"><input type="text" name="" value="123@qq.com"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" value="王小二"></div>
                    <div class="titles">收款二维码</div>
                    <div class="ipt" style="text-align:center;padding:20px 0;"><img src="@/assets/img/uploads.png"></div>
                </div>
            </div>


            <div class="mybank">
                <div class="payt"><span>USDT-ERC20</span>
                    <div class="rtd"><span id="">未开放</span><img src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">USDT-ERC20账号</div>
                    <div class="ipt"><input type="text" name="" value="123@qq.com"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" value="王小二"></div>
                    <div class="titles">收款二维码</div>
                    <div class="ipt" style="text-align:center;padding:20px 0;"><img src="@/assets/img/uploads.png"></div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import PageHeader from '@/components/PageHeader.vue'
    import PageFooter from '@/components/PageFooter.vue'

    export default {
        name: "myCard",
        components: {
            PageHeader,
            PageFooter
        },
        created() {
            this.getInfoList()
        },
        data() {
            return {
                cardInfoList: '', fileList: [],
                dataMsg: {},winKey : 'zfb'
            }
        },
        methods: {
            init(){
                this.winKey = 'zfb'
                var Accordion = function (el, multiple) {
                    this.el = el || {};
                    this.multiple = multiple || false;

                    // Variables privadas
                    var links = this.el.find('.hover-click');
                    // Evento
                    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
                }
                Accordion.prototype.dropdown = function (e) {
                    var $el = e.data.el,
                        $this = $(this),
                        $next = $this.next();
                    this.winKey = $this.get(0).dataset.key
                    console.log(this.winKey)
                    $next.slideToggle();
                    $this.parent().toggleClass('open');

                    if (!e.data.multiple) {
                        $el.find('.list-a1').not($next).slideUp().parent().removeClass('open');
                    }
                }
                var accordion = new Accordion($('#tabtxt'), false);
                $('.hover-click2').click(function () {
                    $(this).next(".list-a2").slideToggle();
                    $(this).toggleClass('open2');
                });
            },
            // 获取默认值
            getInfoList() {
                this.$post('api?m=api&c=user&a=getinfoList', {token:JSON.parse(localStorage.getItem('userinfo')||{}).token}).then(({result}) => {
                    this.cardInfoList = result
                })
            },
            // https://api.dzccn.com/index.php?m=api&c=user&a=upload_allinfo
            // 提交最后一步
            postCardAlinfo(data) {
                this.$post('api/?m=api&c=user&a=upload_allinfo', {
                    token: JSON.parse(window.localStorage.getItem('userinfo') || {}).token, ...data
                }).then(res => {
                    this.getInfoList()
                })
            },
            // 选择文件前
            sendInfo() {
                let data = {}
                switch (this.winKey) {
                    case 'zfb':
                        if (!this.cardInfoList.alipay_complete) {
                            if (!this.cardInfoList.alipay_account) {
                                this.Toast('支付宝账号不能空')
                                return
                            }
                            if (!this.cardInfoList.real_name) {
                                this.Toast('收款人不能空')
                                return
                            }
                            data = {
                                alipay_account: this.cardInfoList.alipay_account,
                                real_name: this.cardInfoList.real_name,
                                type:1
                            }
                        }

                        break
                    case 'wx':
                        if (!this.cardInfoList.wx_complete) {
                            if (!this.cardInfoList.wx_account) {
                                this.Toast('微信账号不能空')
                                return false
                            }
                            if (!this.cardInfoList.real_name) {
                                this.Toast('收款人不能空')
                                return false
                            }
                            data = {
                                wx_account: this.cardInfoList.wx_account,
                                real_name: this.cardInfoList.real_name,
                                type:2
                            }
                            break
                        }
                    case 'yh':
                        if (!this.cardInfoList.bank_complete) {
                            if (!this.cardInfoList.bank_real_name) {
                                this.Toast('真实姓名不能空')
                                return false
                            }
                            if (!this.cardInfoList.bank_account) {
                                this.Toast('银行卡号不能空')
                                return false
                            }
                            if (!this.cardInfoList.bank_name) {
                                this.Toast('银行名不能空')
                                return false
                            }
                            if (!this.cardInfoList.bank_address) {
                                this.Toast('开户行地址不能空')
                                return false
                            }
                            data = {
                                //bank_name
                                bank_account: this.cardInfoList.bank_account,
                                bank_real_name: this.cardInfoList.bank_real_name,
                                bank_address: this.cardInfoList.bank_address,
                                bank_name: this.cardInfoList.bank_name,
                                type:3
                            }
                        }
                        break
                }
                this.dataMsg = data
                return true
            },
            // 文件提交
            onRead(file) { // 上传图片到图片服务器
                this.sendInfo()
                let url = 'api?m=api&c=user&a=upload_code'
                let fd = new FormData()
                let fileUrl={}
                fd.append('file', file.file)
                this.$file(url, fd, {
                    headers: {
                        'Content-Type': 'Content-Type:application/x-www-form-urlencoded'
                    }
                }).then(({result}) => {
                    if(this.winKey=='zfb'){
                        fileUrl={alipay_code:result}
                    }else {
                        fileUrl={wx_code:result}
                    }
                    this.postCardAlinfo({...fileUrl, ...this.dataMsg})
                }).catch(err => {
                    alert(err)
                })
            },
            // 表单提交
            submitBank() {

            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.init()
            })
        }
    }
</script>

<style scoped>
    /*我的银行卡*/
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
