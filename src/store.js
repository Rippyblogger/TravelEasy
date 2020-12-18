import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		apikey: "_ABSIQNv9ze8M7XC6NX25JBOSQAmB7Ds",
		locale: "en-US",
		resultsFilterNumber: [
			{ filNumber: "Number of results" },
			{ filNumber: 10 },
			{ filNumber: 20 },
			{ filNumber: 30 },
			{ filNumber: 40 },
			{ filNumber: 50 },
		],
		destination: "",
		locationResult: "",
	},
	mutations: {
		saveLocation(state, payload) {
			state.locationResult = payload;
		},
		updateMessage(state, message) {
			state.obj.message = message;
		},
	},
	actions: {},
	getters: {},
});
