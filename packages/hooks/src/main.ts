import { setupRouter } from "@/router";
import App from "./App.vue";
import { setupStore } from "./stores";
export const app = createApp(App);

import "./styles";

const setup = () => {
	setupRouter(app);
	setupStore(app);
	app.mount("#app");
};
setup();
