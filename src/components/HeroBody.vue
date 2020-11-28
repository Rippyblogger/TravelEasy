<template>
	<section class="hero is-fullheight hero-background">
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
							<a class="navbar-item nav-item-color is-active">
								Home
							</a>

							<a class="navbar-item">
								About
							</a>
							<a href="" class="navbar-item">Book Travel</a>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<!-- Hero content: will be in the middle -->
		<div class="hero-body">
			<div class="container has-text-centered">
				<p class="title">
					TRAVEL EASY
				</p>
				<p class="subtitle">
					Plan for wonderful experiences with ease
				</p>
			</div>
		</div>

		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot">
			<nav class="tabs">
				<div class="container">
					<ul>
						<li><a>Contact</a></li>
						<li><a>Sign Up</a></li>
						<li><a>Login</a></li>
					</ul>
				</div>
			</nav>
		</div>
	</section>
</template>

<script>
export default {
	name: "HeroBody",
};
</script>

<style scoped>
* {
	@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300&display=swap");
	font-family: "Lato", sans-serif;
}
.hero-background {
	background-image: url(../assets/seaview.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.page-title {
	font-size: 4rem;
}

.brandname {
	color: white;
	font-size: 1.5rem;
	font-weight: 700;
}

.navbar-end > .navbar-item {
	color: white;
	font-size: 1.1rem;
}

.navbar-end > .navbar-item:hover {
	color: #087fde;
	font-size: 1.1rem;
}

.navbar-burger {
	color: white;
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

.tabs a:hover,
a:active {
	color: #087fde;
}
</style>
