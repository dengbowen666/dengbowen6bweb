<template>
 
   
  <el-container>
 
  
  <el-header> <mymenu></mymenu></el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  <el-footer><webFooter></webFooter></el-footer>
  </el-container>








    
</template>
<script  setup >
import mymenu from './components/webStructure/mymenu.vue';
import webFooter from './components/webStructure/webFooter.vue';
import webHeader from './components/webStructure/webHeader.vue';
import { computed, ref } from 'vue';
import { RouterView } from 'vue-router';
</script>

<style>
.el-container{
    background: #894a4a;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 700px;
    height:00px;
    
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.btn-edit {
    color: #fff;
    background-color: #7fb7d9;
    border: 1px solid #062233;
    margin-right: 5px;
}
  .title{
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg,gray,white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
     }
     
     .guide{
       display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
 

     }
    .guide a {
         display:block;
         text-align: center;
         width: 190px;
         height: 40px;
         line-height: 35px;
         border-radius: 10px;
         background-color: rgb(133, 177, 202);
         text-decoration: none;
         color: white;
         font-size: 18px;
         letter-spacing: 5px;


    }
    .guide a.active{

      background-color: #4f6a51;
      color: #ffc268;
      font-weight: 900;
      text-shadow: 0 0 1px black;
      font-family: 微软雅黑;
    }
    .content{
       margin: 0 auto;
       margin-top: 30px;
       border-radius: 10px;
       width: 90%;
       height: 400px;
       border: 1px solid;
       

    }
   .show{
    width: auto;
   margin-top: 20px;
   }
    .menu{
        position: fixed;
        left: 30%;
       top:0%
    }
.frame{
    top:10%;
    position: fixed;
    left: 20%;
    display: block;
    width: 1000px;
    
}
.el-container{
    background:url("src/assets/img/R.jpg");
width:100%;			
height:100%;		
position:fixed;
background-size:100% 100%;
}
</style>