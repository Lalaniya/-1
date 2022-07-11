<template>
  <div class="listgood">
    <div class="list" v-for="items in arrTitle" :key="items">
        <TitleNav ref="_DOM">{{items}}</TitleNav>
        <template v-for="item in arrList" :key="item.Id" >
           <GoodList v-if="item.type_two===items" :item="item"></GoodList>
        </template>
    </div>
    <ul class="side">
        <li v-for="(name,i) in arrTitle" 
        :key="name" 
        :class="{red:i==index}"
        @click="add(i)"
        >{{name}}</li>
    </ul>
  </div>
</template>

<script setup>
import GoodList from '@/components/GoodList.vue'
import TitleNav from '@/components/TitleNav.vue'
import { useRoute } from 'vue-router'
import http from '@/util/http'
import { onBeforeMount, ref } from 'vue'
import { set } from 'lodash'
const route = useRoute()
let arrList = ref([])
let arrTitle = ref([])
let index = ref(0)
const _DOM = ref(null)
onBeforeMount( () => {
    http({
        url:'http://127.0.0.1:9527/api/goodList?type_one='+route.params.name,
    }).then( res => {
       if (res.status === 200) {
        let arr = []
         arr = res.data.map(item => {
            return item.type_two
         })
         arr=[...new Set(arr)]
         arrList.value=res.data
         arrTitle.value = arr
       }
    })
})
const add = (i) => {
    index.value=i
    _DOM.value[i].$el.scrollIntoView()
}
window.onscroll = () => {
    let st = document.documentElement.scrollTop
    let wh = window.innerHeight
    _DOM.value.forEach((el,i) => {
        if (st+wh/2>el.$el.offsetTop) {
           index.value=i
        }
    });
}
</script>

<style lang="scss" scoped>
.listgood{
    .list{
        width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        ul{
            margin-right: 10px;
        }
    }
    .side{
        width: 130px;
        text-align: center;
        position: fixed;
        left: 30px;
        top: 200px;
        border: 1px solid rgb(156, 156, 156);
        li{
            line-height: 30px;
            height: 30px;
            overflow: hidden;
        }
        .red{
            background-color: rgb(204, 169, 206);
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-weight: 500;
        }
    }
}
</style>