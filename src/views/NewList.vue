<template>
  <div class="new">
    <TitleNav>每日新品</TitleNav>
    <NewDay v-for="item in NewLists" :key="item.Id"
    :item="item"
    @click="goDetail(item.Id)"
    ></NewDay>
  </div>
</template>

<script setup>
import NewDay from '@/components/NewDay.vue'
import TitleNav from '@/components/TitleNav.vue'
import { computed, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
onBeforeMount( () => {
    store.dispatch('NewList/reqNewList')
})
const NewLists = computed( () => {
    return store.state.NewList.NewList
})
const goDetail = (id) => {
    router.push({
        name: 'detail',
        params:{
            id
        }
    })
}
</script>

<style>

</style>