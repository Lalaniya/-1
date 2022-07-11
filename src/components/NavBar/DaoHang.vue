<template>
  <div class="nav">
    <router-link to="/" custom v-slot="{navigate}"><span @click="navigate">首页</span></router-link>
    <router-link to="/newlist" custom v-slot="{navigate}"><span @click="navigate">每日上新</span></router-link>
    <span>|</span>
    <router-link to="/" custom v-slot="{navigate}"><span @click="navigate">了解必要</span></router-link>
    <router-link to="/" custom v-slot="{navigate}"><span @click="navigate">购物车</span></router-link>
    <span>|</span>
    <router-link to="/" custom v-slot="{navigate}"><span @click="navigate">登录</span></router-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav{
    width: 1080px;
    margin-top: 10px;
    cursor: pointer;
    span{
        margin-left: 45px;
    }
}
</style>