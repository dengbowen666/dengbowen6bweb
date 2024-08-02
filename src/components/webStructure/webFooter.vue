<template>
  <div class="font-text">请给个好评吧！
    <el-rate v-model="value" allow-half />
    </div>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref()
  </script>
  
<style>
.font-text{
  font-family: "阿里妈妈东方大楷 Regular";
  color: aqua;
}

</style>