<template>
	<header role="menu">
		<nav role="menubar">
			<router-link
			v-for="route in $router.options.routes"
			:key="route.name"
			:to="route.path"
			class="route"
			role="menuitem">
				{{ route.displayName }}
			</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="stylus">
#app header
	position: sticky
	left: 0
	top: 0
	display: flex
	flex-flow: row nowrap
	flex: 1 1 100%
	justify-content: center
	background-color: #fff
	box-shadow:
		0 0 50px rgba(#000, .1),
		0 0 0 1px rgba(#000, .025)
	z-index: 10
	nav
		padding: 1rem
		.route
			margin: .5rem
			padding: .5rem
			font-weight: 900
			color: #000
			text-decoration: none
			opacity: .3
			&:hover
				opacity: 1
			&.router-link-exact-active
				color: #03f
				opacity: 1
</style>
