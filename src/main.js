import { createApp } from "vue";
import App from "./App.vue";
import { formatDate } from "./utils/format_date";

const app = createApp(App);

app.config.globalProperties.$formatDate = formatDate;

app.mount("#app");
