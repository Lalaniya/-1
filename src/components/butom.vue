<template>
    <div class="footer">
        <div class="footer-main clearfix">
            <ul class="footer-detail clearfix">
                <li>
                    <div class="gzh"></div>
                    <ul class="clearfix">
                        <li>扫码关注必要微信公众号</li>
                        <li>关注必要微信公众号</li>
                        <li>实时了解必要平台政策</li>
                        <li>人才招聘信息</li>
                    </ul>
                </li>
                <li>
                    <div class="app"></div>
                    <ul class="clearfix">
                        <li>扫码下载必要APP</li>
                        <li>随时随地掌握上新信息</li>
                        <li>浏览、购买更便捷</li>
                        <li>体验更多黑科技</li>
                        <li>与必要面对面沟通</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="footer-info">
            <p>
                <a href="http://static.biyao.com/pc/www/html/xieyi.html" target="_blank">《用户服务协议》</a>
                <span>|</span>
                <a href="http://static1.biyao.com/pc/www/html/yinsi.html" target="_blank">《隐私政策》</a>
                <span>|</span>
                <a href="http://static2.biyao.com/pc/www/html/zhishichanquan.html" target="_blank">知识产权</a>
                <span>|</span>
                <a href="http://www.biyao.com/promulgate/promulgate.html" target="_blank">平台公示</a>
                <span>|</span>
                <a href="http://www.biyao.com/ipr/institution.html" target="_blank" id="biyaoRules">规则中心</a>
            </p>
            <p>
                <span id="year">Copyright © 2022, BIYAO.COM</span>

                <span>珠海必要科技有限公司</span>
                <span>
                    <a href="http://static3.biyao.com/pc/www/img/footer/ww.png" target="_blank"><img width="14"
                            height="14" src="http://static4.biyao.com/pc/www/img/footer/whjy.png?v=biyao_f5f3976"></a>
                    粤网文〔2018〕0969-419号
                </span>
                <span>
                    <img width="14" height="14" src="http://static.biyao.com/pc/www/img/footer/ghs.png?v=biyao_d0289dc">
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44049102496139"
                        target="_blank">粤公网安备44049102496139号</a>
                </span>
                <span>
                    <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备13088531号 </a>
                </span>
            </p>
            <p>
                <span><a href="http://static1.biyao.com/pc/www/img/footer/by_licence.png"
                        target="_blank">营业执照</a></span>
                <span><a href="/home/businesslicense" target="_blank">增值电信业务经营许可证 粤B2-20170518</a></span>
                <span><a href="http://static2.biyao.com/pc/www/img/footer/by_drugs.png"
                        target="_blank">互联网药品信息服务资格证书</a></span>
                <span><a href="http://static3.biyao.com/pc/www/img/footer/ylqx.png"
                        target="_blank">医疗器械网络交易服务第三方平台备案凭证</a></span>
                <span><a href="http://static4.biyao.com/pc/www/img/footer/by_food.png"
                        target="_blank">食品经营许可证</a></span>
            </p>
            <p>
                <span><a href="javascript:;">（粤）网械平台备字（2018）第00007号</a></span>
                <span><a href="http://static.biyao.com/pc/www/img/footer/publish.png"
                        target="_blank">出版物发行业务提供服务的网络交易平台备案</a></span>
                <span><a href="http://static1.biyao.com/pc/www/img/footer/wlfood.png" target="_blank">网络食品交易第三方备案凭证
                        备案号GDWS10009</a></span>
            </p>
            <p><span>公司地址：珠海市唐家湾镇哈工大路1号1栋E301-15</span><span>公司电话：0756-3635580</span></p>
            <p>必要商城提示您，产品“由某制造商出品”仅为陈述制造商既往生产经历，并不意味着相应产品与特定品牌产品相同或近似。</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.footer{
    text-align: center;
    padding-top: 50px;
    background-color: #fff;
}
.clearfix {
    display: block;
}

.footer-info {
    margin-top: 60px;
    padding-bottom: 10px;
    font-size: 12px;
    color: gray;
}

.footer-detail>li:first-child {
    border-right: 2px solid #bbb;
}

.footer-detail>li {
    display: inline-block;
    width: 378px;
    height: 120px;
}

.footer-detail>li div.gzh {
    background: rgba(0, 0, 0, 0) url(http://static3.biyao.com/pc/www/img/footer/public_code.png?v=biyao_4651e82) no-repeat scroll center center / 100% 100%;
}

.footer-detail>li div {
    display: inline-block;
    float: left;
    width: 120px;
    height: 120px;
    margin-left: 50px;
}

.footer-detail>li ul {
    display: inline-block;
    float: left;
    margin-left: 15px;
    text-align: left;
}

.footer-detail>li ul li:first-child {
    color: #4A4A4A;
}

.footer-detail>li ul li {
    line-height: 24px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #bbb;
    letter-spacing: 0;
}

.footer-info p {
    margin-bottom: 10px;
}

.footer-info a {
    color: gray;
}

.footer-info span {
    display: inline-block;
    margin: 0 3px;
}

span {
    font-weight: 400;
}
</style>