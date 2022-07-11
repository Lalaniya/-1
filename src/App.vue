<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <butom></butom>
  <HUIdao></HUIdao>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import butom from '@/components/butom'
import HUIdao from '@/components/HUIdao'
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
body{
    background-color:#f9f9f9;
}
ul,ol{
    list-style: none;
}
button,input{
    border: none;
}
input{
    outline: none;
}
a{
    text-decoration: none;
}
</style>
