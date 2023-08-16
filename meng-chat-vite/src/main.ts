import { createApp } from "vue";
import "../src/style/index.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router/index";
import './permission'
import pinia from "./store/index";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(pinia);

app.mount("#app");
