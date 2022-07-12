<template>
  <div class="search">
    <div
      class="show"
      v-show="!list.length"
    >
      <h1>没有搜索的商品请重新试一试</h1>
    </div>
    <GoodList
      v-for="item in list"
      :key="item.Id"
      :item="item"
      class="list"
      @click="goDetail(item.Id)"
    ></GoodList>
  </div>
</template>

<script setup>
import { getSearch } from '@/util'
import { onBeforeMount, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import GoodList from '@/components/GoodList.vue'
const router = useRouter()
const route = useRoute()
let list = ref([])
onBeforeMount(() => {
  let reslut = getSearch(route.params.text)
  reslut.then(res => {
    if (res.status === 200) {
      console.log(res);
      list.value = res.data
    }
  })
})
// 去详情
const goDetail = (id) => {
  router.push({
    name: 'detail',
    params: {
      id
    }
  })
}
onBeforeRouteUpdate(() => {
  let reslut = getSearch(route.params.text)
  reslut.then(res => {
    if (res.status === 200) {
      console.log(res);
      list.value = res.data
    }
  })
})
</script>

<style lang="scss" scoped>
.search {
  width: 1080px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  .show {
    width: 1080px;
    height: 800px;
    margin: 0 auto;
  }
  .list {
    margin-left: 10px;
  }
}
</style>