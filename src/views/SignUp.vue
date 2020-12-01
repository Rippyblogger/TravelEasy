<template>
	<div class="background">
		<div>
			<NavbarAlt />
		</div>

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">First Name</label>
					<div class="control ">
                        
						<input class="input" type="text" placeholder="e.g Adeboye" />
					</div>
				</div>

                <div class="field">
					<label class="label">Last Name</label>
					<div class="control">
						<input class="input" type="text" placeholder="e.g Adeotan" />
					</div>
				</div>

				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input class="input" type="email" placeholder="e.g. boyeadeotan@gmail.com"/>
					</div>
				</div>

                <div class="field">
					<label class="label">Date Of Birth</label>
					<div class="control">
						<input class="input" type="date" />
					</div>
				</div>
			</div>

			<div class="column">
				<figure class="image">
					<img src="../assets/Trip-pana.png" />
				</figure>
			</div>
		</div>
	</div>
</template>

<script>
import NavbarAlt from "@/components/NavbarAlt.vue";
export default {
	name: "SignUp",
	components: {
		NavbarAlt,
	},
};
</script>

<style scoped>
* {
	background-color: white;
}

.column{
    padding: 1rem;
    margin: 1rem;
}
</style>
