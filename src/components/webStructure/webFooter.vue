<template>
  <div style="display:flex;
flex-direction:row;"> 
  <div class="font-text">请给个好评吧！
    <el-rate v-model="value" allow-half />
    </div>
    
     <el-affix :offset="120" style="margin-left:75%;">
    </el-affix>
  
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