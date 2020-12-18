import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from "../views/SignUp.vue";
import About from '../views/About.vue';
import BookTrip from "../views/BookTrip.vue";
import axios from "axios";

Vue.use(axios);

axios.defaults.baseURL = "https://ivory-nectar-234618-default-rtdb.firebaseio.com";

Vue.use(VueRouter);

/* const store = createStore({
	state() {
		return {
			test: "works",
		};
	},
}); */



const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/About",
		name: "About",
		component: About,

		// path: "/about",
		// name: "About",
		// // route level code-splitting
		// // this generates a separate chunk (about.[hash].js) for this route
		// // which is lazy-loaded when the route is visited.
		// component: () =>
		// 	import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/SignUp",
		name: "SignUp",
		component: SignUp,
	},
	{
		path: "/BookTrip",
		name: "BookTrip",
		component: BookTrip,
	},
];

const router = new VueRouter({
  routes
})

export default router
