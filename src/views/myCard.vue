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
                <div class="payt hover-click"><span>支付宝</span>
                    <div class="rtd"><span id="">已完成</span><img src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1">
                    <div class="titles">支付宝账号</div>
                    <div class="ipt"><input type="text" name="" value="123@qq.com"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" value="王小二"></div>
                    <div class="titles">收款二维码</div>
                    <div class="ipt" style="text-align:center;padding:20px 0;"><img src="@/assets/img/ewm.jpg"></div>
                </div>
            </div>

            <div class="mybank">
                <div class="payt hover-click"><span>微信</span>
                    <div class="rtd"><span id="">已完成</span><img src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">微信账号</div>
                    <div class="ipt"><input type="text" name="" value="123@qq.com"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" value="王小二"></div>
                    <div class="titles">收款二维码</div>
                    <div class="ipt" style="text-align:center;padding:20px 0;"><img src="@/assets/img/ewm.jpg"></div>
                </div>
            </div>

            <div class="mybank">
                <div class="payt hover-click"><span>银行</span>
                    <div class="rtd"><span id="">未完善</span><img src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">银行账号</div>
                    <div class="ipt"><input type="text" name="" value="123@qq.com"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" value="王小二"></div>
                    <div class="titles">开户行</div>
                    <div class="ipt"><input type="text" name="" value="" placeholder="开户行全称"></div>
                </div>
            </div>

            <div class="mybank">
                <div class="payt hover-click"><span>USDT-OMNI</span>
                    <div class="rtd"><span id="">未完善</span><img src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">USDT-OMNI账号</div>
                    <div class="ipt"><input type="text" name="" value="123@qq.com"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" value="王小二"></div>
                    <div class="titles">收款二维码</div>
                    <div class="ipt" style="text-align:center;padding:20px 0;"><img src="@/assets/img/ewm.jpg"></div>
                </div>
            </div>


            <div class="mybank">
                <div class="payt hover-click"><span>USDT-ERC20</span>
                    <div class="rtd"><span id="">未完善</span><img src="@/assets/img/pd.png"></div>
                </div>
                <div class="list-a1" style="display:none;">
                    <div class="titles">USDT-ERC20账号</div>
                    <div class="ipt"><input type="text" name="" value="123@qq.com"></div>
                    <div class="titles">收款人</div>
                    <div class="ipt"><input type="text" name="" value="王小二"></div>
                    <div class="titles">收款二维码</div>
                    <div class="ipt" style="text-align:center;padding:20px 0;"><img src="@/assets/img/ewm.jpg"></div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import PageHeader from '@/components/PageHeader.vue'
    import PageFooter from '@/components/PageFooter.vue'
    $(function () {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.hover-click');
            // Evento
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el,
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.list-a1').not($next).slideUp().parent().removeClass('open');
            };
        }
        var accordion = new Accordion($('#tabtxt'), false);
        $('.hover-click2').click(function () {
            $(this).next(".list-a2").slideToggle();
            $(this).toggleClass('open2');
        });
    });
    export default {
        name: "myCard",
        components: {
            PageHeader,
            PageFooter
        },
    }
</script>

<style scoped>
    /*我的银行卡*/
    .btxt{background-color:#583c84;width:100%;height:auto;margin:12px 0;}
    .btxt .txt{color:#e69848;line-height:26px;padding:10px;}

    .mybank{background-color:#412c70;border-radius:12px;margin:10px;padding:10px 10px 15px 10px;}
    .mybank .payt{color:#fff;font-size:16px;font-weight:normal; height:35px;line-height:35px;}
    .mybank .payt .rtd{float:right;color:#fff;cursor:pointer;}
    .mybank .payt .rtd img{margin-left:5px;height:6px;transition:all 0.5s;}
    .mybank .list-a1{width:100%;border-top:#a599be 1px solid;overflow:hidden;}
    .mybank .list-a1 .titles{color:#7ecef4; padding:20px 0 10px 0;}
    .mybank .list-a1 .ipt{background-color:#3b2669;line-height:42px; padding:0 15px;border-radius:15px;}
    .mybank .list-a1 .ipt input{color:#c9caca;height:38px;line-height:28px;background:none;border:0;outline:none; width:100%;}
    .mybank .list-a1 .ipt img{max-height:120px;}
    .mybank.open .hover-click img{color:#103f99;-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);transform:rotate(180deg);-o-transform:rotate(180deg);transition:all 0.5s;}
    .bank-submit{padding:20px 10px;}
    .bank-submit input{background-color:#3b2669;font-size:16px;text-align:center;width:100%; height:45px; line-height:45px;color:#c9caca;border-radius:15px;border:0;outline:none;}

</style>
