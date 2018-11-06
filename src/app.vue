<template>
	<div id="app">
		<app-header/>
		<router-view
			class="app-viewport"
			@testVarChanged="testVarChanged"
		/>
	</div>
</template>

<script>
import Header from '@/components/header.vue'

export default {
	name: 'App',
	components: {
		'app-header': Header,
	},
	methods: {
		testVarChanged (e) {
			console.log('testVar changed to:', e)
		},
	},
}
</script>

<style lang="stylus">
html, body, #app
	position: relative
	left: 0
	top: 0
	margin: 0
	padding: 0
	background: none

div, input, button, textarea, svg,
span, a, p, q, b, i, label,
html, header, nav, body, article, footer, section,
h1, h2, h3, h4, h5, h6,
ol, ul, li,
.clear-el
	margin: 0
	padding: 0
	border: none
	background: none
	outline: none
	transition: all cubic-bezier(.22, .61, .36, 1) 250ms
	box-sizing: border-box
	&:before, &:after
		margin: 0
		padding: 0
		border: none
		background: none
		outline: none
		transition: @transition
		box-sizing: border-box

#app
	display: flex
	font-family: 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	flex-flow: row wrap
	justify-content: center
	align-content: flex-start
	align-items: center
	color: #000
	> *
		flex: 1 1 100%

.app-viewport
	display: block
	padding: 2rem 0
	text-align: center
</style>
