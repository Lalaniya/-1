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
            <p
              v-for="(ci,index) in arrci"
              :key="ci"
              class="bd"
              :class="{bds:i===index}"
              @click="chima(index)"
            >{{ci}}</p>
          </div>
          <div class="vx"
          @click="addShop(obj.Id)"
          >添加购物车</div>
        </div>
      </div>
    </div>
    <div class="section-view">
      <div class="view-title">
        <div class="view-left">{{obj.addressName}}</div>
        <div
          :class="{bdb:shows==='s'}"
          @click="shows='s'"
        >商品信息</div>
        <div
          :class="{bdb:shows==='z'}"
          @click="shows='z'"
        >商品评价</div>
      </div>
      <div class="view-conent">
        <div class="conent-top">
          <template
            v-for="(item,i) in lists"
            :key="item.Id"
          >
            <GoodList
              v-if="i<5"
              class="list"
              :item="item"
              @click="goDetail(item.Id)"
            ></GoodList>
          </template>
        </div>
        <ul
          class="conent-middle"
          :class="{show:shows==='z'}"
        >
          <li
            v-for="item in description"
            :key="item.text"
          >
            <span class="title">{{item.title}}</span>
            <span class="text">{{item.text}}</span>
          </li>
        </ul>
        <ul
          class="conent-bottom"
          :class="{show:shows==='s'}"
        >
          <li
            v-for="(item,i) in pl"
            :key="i"
          >
            <div class="li-left">
              <p><img
                  :src="item.userPic"
                  alt=""
                ></p>
              <p>{{item.userName}}</p>
              <p class="vip">{{item.vip}}</p>
            </div>
            <div class="li-right">
              <p>{{item.text}}</p>
              <p>{{item.time}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { getDetail, getSearch , AddShop} from '@/util'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { useStore } from 'vuex'
import GoodList from '@/components/GoodList.vue'
const store = useStore()
const route = useRoute()
const router = useRouter()
let obj = ref(null)
let arr = ref([])
let arrci = ref([])
let i = ref(0)
let shows = ref('s')
let pl = ref([])
let description = ref([])
// 其他分类
let lists = ref([])
// 
// 发送请求
onBeforeMount(() => {
  let result = getDetail(route.params.id)
  result.then(res => {
    if (res.status === 200) {
      arrci.value = JSON.parse(res.data[0].sizeList)
      arr.value = JSON.parse(res.data[0].imgs)
      obj.value = res.data[0]
      pl.value = JSON.parse(res.data[0].comment)
      description.value = JSON.parse(res.data[0].description)
      // 其他分类
      let resultList = getSearch(obj.value['type_two'])
      resultList.then((res) => {
        lists.value = res.data
      })
    }
  })
})
// 选择尺码
const chima = (index) => {
  i.value = index
}
const goDetail = (id) => {
  router.push({
    name: 'detail',
    params: {
      id
    }
  })
}
onBeforeRouteUpdate(() => {
  let result = getDetail(route.params.id)
  result.then(res => {
    if (res.status === 200) {
      arrci.value = JSON.parse(res.data[0].sizeList)
      arr.value = JSON.parse(res.data[0].imgs)
      obj.value = res.data[0]
      pl.value = JSON.parse(res.data[0].comment)
      description.value = JSON.parse(res.data[0].description)
      // 其他分类
      let resultList = getSearch(obj.value['type_two'])
      resultList.then((res) => {
        lists.value = res.data
      })
    }
  })
})
// 添加购物车

const addShop = (id) => {
  let token = localStorage.getItem('token')
  if (token) {
    console.log(token,id);
    let result =  AddShop(id,token)
    result.then(res=>{
      console.log(res.data);
      if (res.status===200) {
        if (res.data.code===1) {
          alert('加入成功')
        }
      }
    })
  } else {
    alert('未登录请登录')
    router.push('/login')
  }
}
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
    .right {
      .tit {
        width: 460px;
        border-bottom: 1px solid #cccccc;
        padding-bottom: 10px;
        h1 {
          margin-bottom: 14px;
        }
        p {
          font-size: 14px;
          color: #999999;
          margin-bottom: 14px;
        }
        div {
          padding: 3px 8px;
          background-color: #f7f1e8;
          font-size: 12px;
          color: #bf9e6b;
          display: inline-block;
        }
      }
      .xingxi {
        .box-price {
          margin-left: 15px;
          display: flex;
          height: 51px;
          align-items: center;
          font-size: 14px;
          color: #666666;
          .price {
            margin: 0px 20px;
            font-size: 28px;
            color: #f85453;
          }
          span {
            margin: 0 10px;
          }
        }
        div {
          display: flex;
          align-items: center;
          margin-top: 30px;
          p {
            margin-right: 15px;
          }
          .bd {
            padding: 5px 15px;
            border: 1px solid #cccccc;
            cursor: pointer;
          }
          .bds {
            border: 1px solid rgb(255, 0, 0);
          }
        }
        .vx {
          background-color: #523669;
          width: 150px;
          color: #fff;
          padding: 10px 10px;
          padding-left: 50px;
          cursor: pointer;
          position: relative;
        }
      }
    }
  }
  .section-view {
    width: 1080px;
    margin: 0 auto;
    .view-title {
      height: 62px;
      width: 1080px;
      background-color: #eeecef;
      display: flex;
      align-items: center;
      .view-left {
        width: 241px;
        height: 62px;
        border-right: 1px solid #cccccc;
      }
      div {
        text-align: center;
        width: 180px;
        height: 62px;
        line-height: 62px;
        border: 1px solid #cccccc;
      }
      .bdb {
        border-bottom: 2px solid #523669;
        background-color: #fff;
      }
    }
    .view-conent {
      width: 1080px;
      border: 1px solid #cccccc;
      display: flex;
      .show {
        display: none;
      }
      .conent-top {
        width: 240px;
        padding-right: 4px;
        border-right: 1px solid #cccccc;
        display: flex;
        flex-wrap: wrap;
        .list {
          transform: scale(0.45) translateX(-315px);
          height: 240px;
        }
      }
      .conent-middle {
        width: 740px;
        li {
          margin-bottom: 10px;
          margin-top: 20px;
          margin-left: 20px;
          display: flex;
          border-bottom: 1px dotted #000;
          .title {
            width: 160px;
            margin-right: 20px;
          }
          .text {
            width: 630px;
            display: inline-block;
          }
        }
      }
      .conent-bottom {
        width: 840px;
        box-sizing: border-box;
        padding-top: 30px;
        li {
          height: 125px;
          border-top: 1px solid #eeeeee;
          margin-left: 50px;
          box-sizing: border-box;
          padding-top: 15px;
          display: flex;
          .li-left {
            width: 100px;
            text-align: center;
            .vip {
              background-color: #ffdd80;
              color: #a27a48;
              width: 30px;
              margin-left: 37px;
            }
          }
          .li-right {
            width: 600px;
          }
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>