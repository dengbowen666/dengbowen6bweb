<template>
    <el-menu ellipsis class="el-menu-popper-demo" mode="horizontal" :popper-offset="16" style="background-color:rgb(1, 1, 20);max-width: 100%;
    "
    router="true"
    
    >
        <el-menu-item index="/myhomepage"><el-icon><House /></el-icon>首页</el-menu-item>
        <el-sub-menu index="2">
            <template #title><span style="color:rgb(124, 161, 229);"><el-icon><Menu /></el-icon>作品</span></template>
            <el-menu-item index="/myTodolist.vue">todolist</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3" :popper-offset="8">
            <template #title><span class="title-text"><el-icon><Tools /></el-icon>常用工具</span></template>
            <el-menu-item index="/mycalendar.vue">日历</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
            <el-sub-menu index="3-4" :popper-offset="20">
                <template #title>override child</template>
                <el-menu-item index="3-4-1">item one</el-menu-item>
                <el-menu-item index="3-4-2">item two</el-menu-item>
                <el-menu-item index="3-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="4" >
    <template #title><span class="title-text"><el-icon><Notebook /></el-icon>学习</span></template>
                <el-menu-item index="/studyGuide">前端概览</el-menu-item>
                <el-sub-menu index="3-2">
                <template #title></template>
                <el-menu-item index="3-3">item three</el-menu-item>
                </el-sub-menu>
             </el-sub-menu>       


        <el-menu-item index="/mygame"><el-icon><SwitchFilled /></el-icon>游戏</el-menu-item>



     
         
         <el-menu-item index="4" ><el-icon><Notebook /></el-icon>我的博文</el-menu-item>
         
         <el-menu-item index="4" ><el-icon><User /></el-icon>个人介绍</el-menu-item>
         
         <el-menu-item index="4"> <el-input
            v-model="input"
            style="width: 240px;margin: auto;"
            placeholder="输入关键词搜索"
            clearable
            size='small'/>
            <el-icon><Search /></el-icon>
            </el-menu-item>
         
       
  
         <el-menu-item index="/myset"><span class="title-text"><el-icon><Operation /></el-icon>设置</span></el-menu-item>
     <el-menu-item disabled ><span>为拉妮变成狼人模样</span></el-menu-item>
    <el-avatar style="margin-left: 0%;margin-top: 4px;"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </el-menu>
  
          
          />
        
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const input = ref('')
</script>
<style scoped>
.el-menu-item{
   color: rgb(124, 161, 229)!important
}
.title-text{
    color:rgb(124, 161, 229)
}
</style>

