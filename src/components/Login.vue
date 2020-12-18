<template>
	<div :class="{ 'modal': classActive, 'is-active': modalShow }">
		<div class="modal-background"></div>
		<div class="modal-content">
			<form action="">
				<div>
					<p class="errorcolour" id="error"></p>
				</div>

				<div class="field">
					<label class="label label-color">Username/Email Address</label>
					<div class="control">
						<input
							id="username"
							v-model="username"
							class="input"
							type="text"
							placeholder=""
							autocomplete="username"
							required
						/>
					</div>
				</div>

				<div class="field">
					<label class="label label-color">Password</label>
					<div class="control">
						<input
							id="password"
							v-model="password"
							class="input"
							type="password"
							placeholder=""
							autocomplete="password"
							required
						/>
					</div>
				</div>

				<div class="control">
					<button id="submit" class="button" @click="checkAuth()">
						Submit
					</button>
				</div>
			</form>
		</div>
		<button class="modal-close is-large" aria-label="close" @click="closeSignUp"></button>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	props: ["modalShow"],
	name: "Login",
	data: function() {
		return {
			classActive: true,
			username: "",
			password: "",
		};
	},
	methods:{
		closeSignUp: function(){
			this.$emit('modal-close')
		},

		checkAuth: function(){
			axios.get('/users.json')
			.then (res => console.log(res))
			.catch(error => console.log(error))
			
			

		}
	},

};
</script>

<style scoped>
.label-color {
	color: white;
}

input {
	border: 2px solid #087fde;
}

button {
	background-color: #087fde;
	color: white;
	border: 1px solid #087fde;
}
</style>
