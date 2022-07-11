<template>
    <div class="bannar">
        <ul class="ban-left">
            <li v-for="i in 8" :key="i">
              <p>
                <span @click="goList(classList[i-1])">{{classList[i-1]}}</span>
                <span class="geduan">/</span>
                <span @click="goList(classList[i])">{{classList[i]}}</span>
                <span class="geduan">/</span>
                <span @click="goList(classList[i+1])">{{classList[i+1]}}</span>
              </p>
            </li>
        </ul>
        <div class="bottom">
            <div><img src="http://static4.biyao.com/pc/www/img/new_master/ptzc_character.png?v=biyao_e95bcd0" alt="">
                 <span>大牌品质</span>
            </div>
            <div><img src="http://static.biyao.com/pc/www/img/new_master/ptzc_price.png?v=biyao_6786c61" alt="">
                 <span>工厂价格</span>
            </div>
            <div><img src="http://static1.biyao.com/pc/www/img/new_master/ptzc_payment.png?v=biyao_75208ed" alt="">
                 <span>分期支付</span>
            </div>
            <div><img src="http://static2.biyao.com/pc/www/img/new_master/ptzc_sf.png?v=biyao_4abee91" alt="">
                 <span>顺丰包邮</span>
            </div>
            <div><img src="http://static3.biyao.com/pc/www/img/new_master/ptzc_refund.png?v=biyao_54de047" alt="">
                 <span>无忧退款</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useStore()
// 像仓库发送请求获取分类
onBeforeMount( () => {
    store.dispatch('home/getTypeOneLsit')
})
const classList = computed( () => {
    return store.state.home.ClassList
})
const goList = (name) => {
    router.push({
      name: 'listgood',
      params: {
        name
      }
    })
}
</script>

<style lang="scss" scoped>
.bannar{
    width: 1080px;
    margin: 20px auto;
    background-image: url('http://static1.biyao.com/pc/www/img/new_master/banner2.png?v=biyao_ded5987');
    background-size: 100%;
    font-size: 14px;
    color: #fff;
    .ban-left{
        width: 250px;
        height: 360px;
        background-color: #554d5d;
        box-sizing: border-box;
        padding: 10px 30px;
        cursor: pointer;
        p{
            height: 38px;
            line-height: 38px;
            .geduan{
                margin: 0px 8px;
            }
        }
    }
    .bottom{
        width: 1020px;
        background-color: rgb(255, 255, 255);
        height: 40px;
        padding: 0px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            width: 95px;
            height: 100%;
            line-height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            color:#9687a4;
        }
    }
}
</style>