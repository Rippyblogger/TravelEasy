<template>
	<!-- Hero head: will stick at the top -->
	<div class="hero-head">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item brandname">
						<p class="">TRAVEL EASY</p>
					</a>
					<span class="navbar-burger burger" data-target="navbarMenuHeroA">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div id="navbarMenuHeroA" class="navbar-menu">
					<div class="navbar-end">
						<router-link to="/" class="navbar-item nav-item-color is-active">
							Home
						</router-link>

						<a class="navbar-item">
							About
						</a>
						<a href="" class="navbar-item">Book Travel</a>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "NavbarAlt",
};
</script>

<style >
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
	color: #087fde;
	font-size: 1.1rem;
}
</style>
