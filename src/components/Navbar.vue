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
						<router-link to="/" class="navbar-item nav-item-color is-active">
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
	name: "Navbar",
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
	color: white;
	font-size: 1.5rem;
	font-weight: 700;
}

.brandname:hover {
	color: white;
	transform: scale(1.1);
}

.navbar-burger {
	color: white;
}

.navbar-end > .navbar-item {
	color: white;
	font-size: 1.1rem;
}

.navbar-end > .navbar-item:hover {
	color: #087fde;
	font-size: 1.1rem;
}

@media screen and (max-width: 1023px) {
	.navbar-menu {
		background-color: transparent;
		/* color: #087fde */
	}
}

a.navbar-item.is-active {
	background-color: transparent;
}

a.navbar-item.is-active:hover {
	background-color: white;
}
</style>
