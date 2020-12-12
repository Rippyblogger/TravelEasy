<template>
	<div class="home">
		<HeroBody />
	</div>
</template>

<script>
// @ is an alias to /src
import HeroBody from "@/components/HeroBody.vue";

export default {
	name: "Home",
	components: {
		HeroBody,
	},
};
</script>

<style scoped>
.home {
	background-image: url(../assets/seaview.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
