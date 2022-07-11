<template>
  <div
    class="detail"
    v-if="obj"
  >
    <div class="titile">
      <div class="left">
        <div class="imga">
          <img
            :src="arr[0]"
            alt=""
          >
        </div>
        <ul class="imgs">
          <li
            v-for="(imga,i) in arr"
            :key="imga"
            v-show="i<5"
          ><img
              :src="imga"
              alt=""
            > </li>
        </ul>
      </div>
      <div class="right">
        <div class="tit">
          <h1>{{obj.title}}</h1>
          <p>{{obj.salePoint}}</p>
          <div>{{obj.supplier}}</div>
        </div>
        <div class="xingxi">
            <p class="box-price">售价:<span class="price">￥{{obj.priceStr}}</span>生产周期:<span>{{obj.leadTime}}</span></p>
            <div>
                <p>尺码</p>
                <p v-for="ci in arrci" :key="ci" class="bd">{{ci}}</p>
            </div>
            <div class="vx">微信扫码购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { getDetail } from '@/util'
import { useRoute } from 'vue-router'
const route = useRoute()
let obj = ref(null)
let arr = ref([])
let arrci = ref([])
onBeforeMount(() => {
  let result = getDetail(route.params.id)
  result.then(res => {
    if (res.status === 200) {
      console.log(res.data[0]);
      arrci.value=JSON.parse(res.data[0].sizeList)
      arr.value = JSON.parse(res.data[0].imgs)
      obj.value = res.data[0]
    }
  })
})
</script>

<style lang="scss" scoped>
.detail {
  width: 1080px;
  margin: 30px auto;
  .titile {
    display: flex;
    width: 1080px;
    height: 500px;
    .left {
      display: flex;
      margin-right: 15px;
      .imga {
        width: 460px;
        height: 460px;
        margin-right: 15px;
        border: 1px solid #cccccc;
        img {
          width: 460px;
        }
      }
      .imgs {
        li {
          width: 80px;
          height: 80px;
          margin-bottom: 13px;
          border: 1px solid #cccccc;
          img {
            width: 80px;
          }
        }
      }
    }
    .right{
        .tit{
            width: 460px;
            border-bottom: 1px solid #cccccc;
            padding-bottom: 10px;
            h1{
                margin-bottom: 14px;
            }
            p{
                font-size: 14px;
                color: #999999;
                margin-bottom: 14px;
            }
            div{
                padding: 3px 8px;
                background-color: #f7f1e8;
                font-size: 12px;
                color: #bf9e6b;
                display: inline-block;
            }
        }
        .xingxi{
            .box-price{
                margin-left: 15px;
                display: flex;
                height: 51px;
                align-items: center;
                font-size: 14px;
                color: #666666;
                .price{
                    margin: 0px 20px;
                    font-size: 28px;
                    color: #f85453;
                }
                span{
                    margin: 0 10px;
                }
            }
            div{
                display: flex;
                align-items: center;
                margin-top: 30px;
                p{
                    margin-right: 15px;
                }
                .bd{
                    padding: 5px 15px;
                    border: 1px solid #cccccc;
                    
                }
            }
            .vx{
                background-color: #523669;
                width: 150px;
                color: #fff;
                padding: 10px 10px;
                padding-left: 50px;
                cursor: pointer;
                position: relative;
            }
            .vx::after{
                content: '';
                width: 180px;
                height: 230px;
                position: absolute;
                background-image: url('./Home/Snipaste_2022-07-11_23-48-13.png');
                display: none;
                top: -233px;
                left: 20px;
            }
            .vx:hover::after{
                display: block;
            }
        }
    }
  }
}
</style>