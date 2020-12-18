<template>
	<div class="background">
		<NavbarAlt />
		<section class="section">
			<div class="container">
				<div class="field is-horizontal">
					<label class="label" for="">
						Destination
					</label>
					<input
						class="input"
						type="text"
						name=""
						v-model="message"
						id="destination"
						placeholder="Enter destination city"
					/>

					<label class="label" for="">
						Departure
					</label>
					<input class="input" type="date" name="" id="" />

					<label class="label" for="">
						Arrival
					</label>
					<input class="input" type="date" name="" id="" />

					<div class="control">
						<div class="select is-small">
							<select>
								<option
									v-for="item in $store.state.resultsFilterNumber"
									:key="item.index"
									>{{ item.filNumber }}</option
								>
							</select>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import NavbarAlt from "@/components/NavbarAlt.vue";
import axios from "axios";

export default {
	name: "BookTrip",
	components: {
		NavbarAlt,
	},
	data: function() {
		return {};
	},
	methods: {
		getData: function() {},
	},
	computed: {
		destination:{
			get(){
				return this.$store.state.obj.destination
			},
			set (value){
				this.$store.commit('updatemessage', value)
			}
		}
	},
	created() {
		axios
			.get(
				"https://tequila-api.kiwi.com/locations/query?term=PRG&locale=en-US&location_types=airport&limit=100&active_only=true",
				{
					params: {
						apikey: this.$store.state.apikey,
					},
				}
			)
			.then((res) => this.$store.commit("saveLocation", res))
			.catch((err) => console.log(err));
	},
};
</script>

<style>
.background {
	background-color: white;
}

.label {
	padding: 0rem 0.5rem 0rem 0.5rem;
	vertical-align: auto;
}

.entrySpan > * {
	display: flex;
	padding: 0.5rem 1rem 0.5rem 1rem;
}

input {
	text-align: center;
}

.label {
	margin-top: 0.5em;
}

.borderShow {
	border: 1px solid grey;
}

.select {
	margin: 5px;
}
</style>
