<template>
  <div
    class="top"
    @click="goTop"
  >
    <el-icon><Dessert /></el-icon>
  </div>
</template>

<script setup>
const goTop = () => {
    document.documentElement.scrollTop=0
}
</script>

<style lang="scss" scoped>
.top {
  width: 50px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  line-height: 50px;
  position: fixed;
  right: 60px;
  bottom: 30%;
  cursor: pointer;
}
</style>