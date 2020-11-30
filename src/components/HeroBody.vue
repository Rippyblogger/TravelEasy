<template>
	<section class="hero is-fullheight hero-background">
		<Navbar />
		<!-- Hero content: will be in the middle -->
		<div class="hero-body">
			<div class="container has-text-centered">
				<p class="title">
					TRAVEL EASY
				</p>
				<p class="subtitle">
					Plan priceless experiences with ease
				</p>
			</div>
		</div>

		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot">
			<nav class="tabs">
				<div class="container">
					<ul>
						<li><a>Contact</a></li>
						<li><router-link to="/SignUp">Sign Up</router-link></li>
						<li><a>Login</a></li>
					</ul>
				</div>
			</nav>
		</div>
	</section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
	name: "HeroBody",
	components: {
		Navbar,
	},
};
</script>

<style scoped>
* {
	@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300&display=swap");
	font-family: "Lato", sans-serif;
}



/* Hero-text */
.title {
	color: white;
	font-size: 4rem;
}

.subtitle {
	color: white;
	font-size: 1.5rem;
}

/* Footer */
.tabs ul {
	justify-content: center;
}

.tabs a {
	color: white;
}

.tabs a:hover {
	color: #087fde;
	text-decoration: underline;
}

.tabs li:hover {
	text-decoration: underline;
	border-bottom-color: #1b372c;
}
</style>
