import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store/index.js";
import BaseCart from "@/components/UI/BaseCart.vue";
import BaseBtn from "@/components/UI/BaseBtn.vue";
import route from "@/router/Index.js";

const app = createApp(App);
app.use(store);
app.use(route);
app.component("base-cart", BaseCart);
app.component("base-btn", BaseBtn);
app.mount("#app");
