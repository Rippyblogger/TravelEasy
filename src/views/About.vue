<template>
	<div class="about">
		<NavbarAlt />
		<section class="hero hero-back is-medium">
			<div class="hero-body">
				<div class="container"></div>
			</div>
		</section>

		<div class="columns columns-marg">
			<div class="column is-one-fifth"></div>

			<div class="column is-three-fifth col_col">
				<div>
					<p class="title title_head">
						ABOUT US
					</p>
				</div>

        <div>
				<p class="subtitle subtitle_head">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					posuere odio sed tristique elementum. Phasellus rutrum vehicula libero
					vel accumsan. In a arcu nec nisi bibendum congue a quis lectus.
					Praesent euismod ex id condimentum sollicitudin. Pellentesque habitant
					morbi tristique senectus et netus et malesuada fames ac turpis
					egestas. Cras convallis, enim in vulputate accumsan, ex orci
					scelerisque augue, eu pharetra nisl odio a orci. Nulla vehicula congue
					mauris sit amet vulputate. Proin tempor sit amet nisl pellentesque
					eleifend. Vivamus cursus ullamcorper metus, eget tincidunt lectus
					ullamcorper vitae. Morbi sed justo hendrerit, tincidunt nunc sit amet,
					pellentesque felis. Curabitur rhoncus justo at dolor facilisis, eget
					porttitor leo lobortis. Aenean vehicula mattis sem, in pulvinar diam
					tincidunt id. Maecenas nulla tortor, dignissim a enim eu, consequat
					vulputate est. Praesent arcu neque, bibendum vel rutrum quis, commodo
					eget massa. Maecenas auctor, urna in pellentesque sollicitudin, est mi
					pharetra neque, suscipit malesuada nulla leo lacinia enim. In aliquet
					libero vel venenatis condimentum. Aenean sagittis, sapien at congue
					euismod, purus turpis rutrum tortor, vitae sodales velit ligula vel
					urna. Vestibulum diam ex, viverra vitae aliquam at, finibus ut dui.
					Suspendisse placerat risus ac massa bibendum bibendum. Nam ac sem
					lectus. Praesent finibus efficitur ligula ac fringilla. Maecenas
					suscipit risus ut tortor dignissim commodo. Praesent aliquam eu enim
					non pellentesque. Vestibulum sed interdum orci. Mauris ullamcorper
					turpis orci, et mattis massa sagittis ac. Proin venenatis metus nunc,
					nec semper orci imperdiet sit amet. Sed velit magna, accumsan ac sem
					quis, scelerisque gravida dui. Curabitur commodo sit amet leo eu
					dapibus. Nunc ac imperdiet justo. Nam dictum pellentesque dictum. Cras
					non tellus nec enim eleifend cursus eu sit amet est. Donec varius leo
					ac felis tincidunt placerat. Pellentesque a ante scelerisque, pulvinar
					enim vitae, porttitor arcu. Fusce sagittis volutpat sem, a mollis
					lectus sagittis ac. Suspendisse tempus scelerisque nulla, ut rhoncus
					dolor condimentum id. Sed sit amet suscipit lacus. Donec bibendum
					aliquam volutpat. Proin aliquet finibus mattis. Vivamus fringilla
					lacinia velit, sed pharetra tellus elementum at. Nullam nec nibh in
					ante finibus consequat aliquam eu ligula. Nunc eu risus elit. Praesent
					eget enim vel nulla tempor auctor. Morbi facilisis finibus
					pellentesque. Suspendisse vitae mattis augue, vel hendrerit risus.
					Duis ullamcorper ut ligula nec vulputate. Curabitur tortor arcu,
					facilisis quis sem tempor, tempus dictum nisl. Phasellus a consequat
					justo, nec volutpat risus. Curabitur in libero sagittis, condimentum
					ex nec, blandit eros. Donec sit amet varius leo. Sed at dui mi.
					Phasellus aliquet sollicitudin nunc quis facilisis. Sed eget urna sit
					amet elit rhoncus bibendum at vitae quam.
				</p>
			</div>
			</div>

			<div class="column is-one-fifth"></div>
		</div>
	</div>
</template>

<script>
import NavbarAlt from "@/components/NavbarAlt.vue";

export default {
	name: "About",
	components: {
		NavbarAlt,
	},
};
</script>

<style scoped>
.about {
	background-color: white;
}

.hero-back {
	background-image: url(../assets/about_hero.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.title {
	color: #087fde;
}

/* .col_col {
	border: 1px solid black;
} */

.columns-marg {
	margin: 1rem;
}

.title_head {
	color: #087fde;
	text-align: center;
}

.subtitle_head{
  color: black;
  margin: 1rem;
  text-align: justify;
  text-justify: inter-word;
}
</style>
