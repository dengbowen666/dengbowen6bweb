<template>
 
    <el-container>
 
  
      <el-header> <mymenu></mymenu></el-header>
      <el-scrollbar height="800px">
      <el-main >
        <div>
        <router-view></router-view>
    
        </div>
      </el-main>
      </el-scrollbar>
      <el-footer>
    

        <webFooter></webFooter></el-footer>
  
      </el-container>
 

 
</template>
<script setup>
import { computed, ref } from 'vue';
import mymenu from './mymenu.vue';
import webFooter from './webFooter.vue';

import { RouterView } from 'vue-router';
</script>
<style scoped>

</style>