<template>
  <div class="nav">
    <router-link
      to="/"
      custom
      v-slot="{navigate}"
    ><span @click="navigate">首页</span></router-link>
    <router-link
      to="/newlist"
      custom
      v-slot="{navigate}"
    ><span @click="navigate">每日上新</span></router-link>
    <span>|</span>
    <router-link
      to="/"
      custom
      v-slot="{navigate}"
    ><span @click="navigate">了解必要</span></router-link>
    <span @click="goshop">购物车</span>
    <span>|</span>
    <router-link
      to="/login"
      custom
      v-slot="{navigate}"
    ><span @click="navigate">{{str}}</span></router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { useStore } from 'vuex'
let str = ref('登录')
const store = useStore()
const router = useRouter()
watch(store.state.home, () => {
  if (store.state.home.token) {
    console.log(1111);
    str.value = '欢迎光临'
  } else {
    str.value = '登录'
  }
})
const goshop = () => {
  if (localStorage.getItem('token')) {
    router.push('/shoplist')
  } else {
    alert('未登录，请登录')
    router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 1080px;
  margin-top: 10px;
  cursor: pointer;
  span {
    margin-left: 45px;
  }
}
</style>