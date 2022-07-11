<template>
  <div class="day">
    <div class="day-left">
        <p :style="{color:sscc.roundColor,border: '1px solid' + sscc.roundColor}" class="yq">{{sscc.content}}</p>
        <h3 class="texs">{{props.item.title}}</h3>
        <p class="texs price">￥{{props.item.priceStr}}</p>
        <p class="texs">{{props.item.salePoint}}</p>
    </div>
    <div class="day-right">
        <img :src="props.item.imageUrl" alt="">
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(['item'])
let sscc = JSON.parse(props.item.labels)[0]
</script>

<style lang="scss" scoped>
.day{
    width: 1080px;
    margin: 0 auto;
    height: 335px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    background-color: #fff;
    cursor: pointer;
    .day-left{
        width: 430px;
        height: 100%;
        .yq{
            width: 50px;
            height: 20px;
            padding: 0;
            margin-left: 20px;
            margin: 30px;
        }
        h3{
            color: #4a4a4a;
            padding-top: 20px;
            font-size: 18px;
            font-size: 400;
            padding-bottom: 10px;
        }
        .price{
            font-size: 24px;
            color: #f7a701;
            height: 30px;
            border-bottom: 1px solid #f2f2f2;
        }
        p{
            color: #808080;
            padding-top: 20px;
        }
        .texs{
            width: 240px;
            text-align: center;
            margin: 0 auto;
        }
    }
    .day-right{
        width: 650px;
        height: 100%;
        overflow: hidden;
        img{
            width: 650px;
        }
    }
}
</style>