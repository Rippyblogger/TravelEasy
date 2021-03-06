import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner);
Vue.component("font-awesome-icon", FontAwesomeIcon);
import { fas } from "@fortawesome/free-solid-svg-icons";

//font-awesome
library.add(fas);

//req bulma
require("@/assets/main.scss");

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
