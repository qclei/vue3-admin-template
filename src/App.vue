<template>
  <div class="box">
    <h1>Hello work</h1>
  </div>
</template>

<script setup lang="ts">
const str = '我爱你祖国'
for(let i=0;i<100;i++)
{
  console.log(i)
}
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 400px;
  background: black;
  h1 {
    color: white;
  }
}
</style>
