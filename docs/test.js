import { createApp } from "vue";
import TestDiv from "../components/TestDiv.vue";

const app2 = document.createElement("div");
app2.id = "app2";
const body = document.body;
body.appendChild(app2);

const app = createApp(TestDiv);

app.mount("#app2");
