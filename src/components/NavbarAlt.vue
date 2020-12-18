<template>
	<!-- Hero head: will stick at the top -->
	<div class="hero-head">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<router-link to="/" class="navbar-item brandname">
						<p class="">TRAVEL EASY</p>
					</router-link>
					<span
						class="navbar-burger burger"
						data-target="navbarMenuHeroA"
						@click="showNav = !showNav"
					>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div
					id="navbarMenuHeroA"
					:class="{ 'navbar-menu': showClass, 'is-active': showNav }"
				>
					<div class="navbar-end">
						<router-link to="/" class="navbar-item nav-item-color">
							Home
						</router-link>

						<router-link to="/about" class="navbar-item nav-item-color">
							About
						</router-link>

						<router-link to="/BookTrip" class="navbar-item nav-item-color">
							Book Trip
						</router-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "NavbarAlt",
	data: function() {
		return {
			showNav: false,
			showClass: true,
		};
	},
};
</script>

<style scoped>
.brandname p {
	color: #087fde;
	font-size: 1.5rem;
	font-weight: 700;
}

.brandname:hover {
	color: #087fde;
	transform: scale(1.1);
}

.navbar-burger {
	color: #087fde;
}

.navbar-end > .navbar-item {
	color: #087fde;
	font-size: 1.1rem;
}

.navbar-end > .navbar-item:hover {
	background-color: #087fde;
	color: white;
	font-size: 1.1rem;
}
</style>
