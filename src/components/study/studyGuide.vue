<template>
    <div class="learning-path">
        <div v-for="stage in stages" 
        :key="stage.name" 
        class="stage"
        style="margin-left: 100px;margin-right: 100px"
        >
            <transition 
     name="animate__animated animate__bounce" 
     appear
     enter-active-class="animate__lightSpeedInRight"
     >
            <h2>{{ stage.name }}</h2>
        </transition>
        
    <el-collapse 
    v-model="activeNames" 
    @change="handleChange"
    style="margin-right: 0px"
    >
            <el-collapse-item 
            :title="stage.description"
            style="margin-left: 20px;margin-right: 20px"
            >
            <div>
                {{stage.details}}
            <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>
            <el-button type="primary">详情</el-button>
            </div>
            </el-collapse-item>
            </el-collapse>
          
            <ul>
                <li v-for="resource in stage.resources" :key="resource.name">
                    <el-link href="resource.url" type="primary">{{ resource.name }}</el-link>
                </li>
            </ul>
            
        </div>
        <el-divider>
          已经到底了~
        </el-divider>
    </div>
    <!--
    <el-carousel :interval="4000" type="card" height="340px" style="margin-left:145px ;margin-right: 145px;">
        <el-carousel-item v-for="stage in stages" :key="stage.name">
                  <transition 
         name="animate__animated animate__bounce" 
         appear
         enter-active-class="animate__lightSpeedInRight"
         >
                <h2>{{ stage.name }}</h2>
            </transition>
        
        <el-collapse 
        v-model="activeNames" 
        @change="handleChange"
        style="margin-right: 0px"
        >
                <el-collapse-item 
                :title="stage.description"
                style="margin-left: 20px;margin-right: 20px"
                >
                <div>
                    {{ stage.details }}
                <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>
                <el-button type="primary">详情</el-button>
                </div>
                </el-collapse-item>
                </el-collapse>
          
                <ul>
                    <li v-for="resource in stage.resources" :key="resource.name">
                        <el-link href="resource.url" type="primary">{{ resource.name }}</el-link>
                    </li>
                </ul>
            
            
            </el-carousel-item>
      </el-carousel>


-->
   
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
const handleChange = (val) => {
    console.log(val)
}
let code = `let a = 1\nconsole.log(a)`
const stages = ref([
    {
        name: 'HTML',
        description: 'Web开发的基础，掌握HTML使用。',
        resources: [
            { name: 'W3Schools HTML教程', url: 'https://www.w3schools.com/html/&#39'  },
                       
        ],
        details: '超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用来结构化 Web 网页及其内容的标记语言。网页内容可以是：一组段落、一个重点信息列表、也可以含有图片和数据表。',
        
       
    },
    {
        name: 'CSS',
        description: 'Web开发的基础，定制网页样式。',
        resources: [
            { name: 'W3Schools CSS教程', url: 'https://www.w3schools.com/css/&#39' }
        ],
         details: '层叠样式表（Cascading Style Sheets，缩写为 CSS）是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式。CSS 描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。'
    },
    {
        name: 'JavaScript',
        description: '学习JavaScript编程，理解前端逻辑。',
        resources: [
            { name: 'MDN JavaScript指南', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide&#39' }
        ],
        details:'JavaScript 是一种脚本编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新——交互式的地图、2D/3D 动画、滚动播放的视频等等——JavaScript 就在其中。它是标准 Web 技术蛋糕的第三层'
    },
    {
        name: 'Vue.js',
        description: '深入Vue.js框架，掌握组件化开发。',
        resources: [
            { name: 'Vue.js官方文档', url: 'https://vuejs.org/v2/guide/&#39'  }
        ],
        details:'一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。'
    },
     {
        name: 'VuePress',
        description: 'Vue 驱动的静态网站生成器',
        resources: [
            { name: 'Vue.js官方文档', url: 'https://vuepress.vuejs.org/zh/' }
        ]
    }
])
</script>



<style scoped>
/* 基础样式 */
body {
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    color: #333;
}

.learning-path {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.stage {
    background: rgba(254, 254, 254, 0.952);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
}

.stage:hover {
    transform: translateY(-10px) scale(1.1);

}

.stage h2 {
    font-size: 1.5em;
    margin: 0;
    padding: 10px;
    background: #1c0abbbb;
    color: white;
    border-radius: 8px 8px 0 0;
}

.stage p {
    padding: 15px;
    font-size: 1em;
    border-bottom: 1px solid #ddd;
}

.stage ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}

.stage li {
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
}

.stage li:last-child {
    border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .stage {
        margin: 20px;
    }
}
</style>