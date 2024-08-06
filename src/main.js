
import './assets/app.css'
import eventBus from '../plugins/eventBus'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import Element from 'element-plus' 
//动画库
import 'animate.css'
import { kinesisPlugin } from '@letstri/kinesis';
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import './assets/fonts/font.css'
import hljsVuePlugin from '@highlightjs/vue-plugin'

// 引入wangeditor的css样式
//import './wangeditor/editor/dist/css/style.css'
//看板娘



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.provide('eventBus', eventBus);
app.use(Element)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(kinesisPlugin);
app.use(hljsVuePlugin)



app.mount('#app')
