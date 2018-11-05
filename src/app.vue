<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/another-page">Another Page</router-link>
		</div>
		<router-view @testVarChanged="testVarChanged"/>
	</div>
</template>

<script>
export default {
	name: 'App',
	methods: {
		testVarChanged (e) {
			console.log('testVar changed to:', e)
		},
	},
}
</script>

<style lang="stylus">
#app
	font-family: 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #000

#nav
	padding: 30px
	a
		margin: .5rem
		padding: .5rem
		color: #000
		font-weight: bold
		text-decoration: none
		opacity: .4
		&:hover
			opacity: 1
		&.router-link-exact-active
			color: #ff0055
			opacity: 1
</style>
