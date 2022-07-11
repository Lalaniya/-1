<template>
  <div>
    <BanNar></BanNar>
    <TitleNav>热销排行</TitleNav>
    <div class="list">
      <GoodList
        v-for="item in List"
        :key="item.Id"
        :item="item"
        @click="goDetail(item.Id)"
      ></GoodList>
    </div>
  </div>
</template>

<script setup>
import BanNar from './Home/BanNar.vue'
import TitleNav from '@/components/TitleNav.vue'
import GoodList from '@/components/GoodList.vue'
import { useStore } from 'vuex'
import { onBeforeMount, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
// 获取首页商品列表
let i = ref(1)
onBeforeMount(() => {
  store.dispatch('home/getListHome', i.value)
})
const List = computed(() => {
  return store.state.home.HomeList
})
window.onscroll = function () {
  let wh = window.innerHeight;
  let wenH = document.documentElement.scrollHeight;
  let st = document.documentElement.scrollTop;
  if (wh + st >= wenH) {
      i.value++
    store.dispatch('home/getListHome', i.value)
  }
}
// 去详情
const goDetail = (id) => {
    router.push({
        name: 'detail',
        params:{
            id
        }
    })
}
</script>

<style lang="scss" scoped>
.list {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>