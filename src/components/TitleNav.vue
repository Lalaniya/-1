<template>
  <div class="title">
        <p><slot></slot></p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.title{
    width: 1080px;
    height: 80px;
    margin: 15px auto;
    background-color: rgb(255, 255, 255);
    text-align: center;
    p{
        display: inline-block;
        margin-top: 15px;
        line-height: 40px;
        height: 40px;
        font-size: 22px;
        font-weight: 600;
        border-bottom: 1px solid #000;
    }
}
</style>