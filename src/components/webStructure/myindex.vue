<template>
 
    <el-container>
 
  
       <mymenu v-show="isHide"  ></mymenu>
      <el-scrollbar height="650px">
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
import { computed, onMounted, ref } from 'vue';
import mymenu from './mymenu.vue';
import webFooter from './webFooter.vue';

import { RouterView } from 'vue-router';

   const oldScrollTop=ref(0)
const isHide = ref(false)

const classObject = computed(() => ({
  isHide: isHide.value
}));



  // 头部导航做鼠标滚动优化

onMounted(() => {
  // 监听页面滚动事件
    // 滚动条距文档顶部的距离（做兼容处理）===》不懂的可以结合画图理清逻辑
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      let scrollStep = scrollTop - oldScrollTop.value;
      oldScrollTop.value = scrollTop;
      // 根据滚动方向更新isHide的值
      isHide.value = scrollStep > 0;


    });
  });
</script>
<style>
 .isHide {
    top: -104px;
  }

</style>