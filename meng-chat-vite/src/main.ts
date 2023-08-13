import { createApp } from "vue";
import "../src/style/index.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router/index";
import './permission'
import pinia from "./store/index";

//注册全局组件
import gloablComponent from './components/index'



const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(pinia);
app.use(gloablComponent)
app.mount("#app");
