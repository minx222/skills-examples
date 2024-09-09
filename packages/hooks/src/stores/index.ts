import { PiniaColada } from "@pinia/colada";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import type { App } from "vue";

const stores = createPinia();
stores.use(piniaPersist);

const setupStore = (app: App) => {
	app.use(stores);
	app.use(PiniaColada);
};

export { stores, setupStore };
