<template>
	<div id="another-page-view">
		<h3 class="testVar">
			<input type="text" v-model="testVar"/>
		</h3>
		<span class="status">{{ isNotEmpty ? 'Not empty' : 'Empty' }}</span>
		<button role="button" @click="clearVar()" class="empty-var">
			Emtpy variable
		</button>
	</div>
</template>

<script>
export default {
	data () {
		return {
			testVar: 'This is a test var',
		}
	},
	computed: {
		isNotEmpty () {
			return this.testVar.length >= 1
		},
	},
	methods: {
		clearVar () {
			this.testVar = ''
		},
	},
	watch: {
		testVar (val) {
			console.log('Event emited')
			this.$emit('testVarChanged', val)
		},
	},
}
</script>

<style lang="stylus">
#another-page-view
	.testVar input
		min-height: 1.6rem
		padding: .5rem 1rem
		border: none
		font-size: inherit
		border-radius: .2rem
		outline: none 
		text-align: center
		box-shadow: 0 0 0 1px rgba(#000, .1)
		&:hover
			background-color: rgba(#000, .03)
		&:focus
			box-shadow:
				0 0 0 1px rgba(#000, .25),
				inset 0 2px 10px rgba(#000, .1)
			background-color: rgba(#000, .03)
	input
		display: block
		margin: auto auto 1rem auto
	.status
		display: block
		text-transform: uppercase
		font-weight: 900
		font-size: .75rem
	.empty-var
		padding: .25rem .5rem
		border-radius: .2rem
		background-color: rgba(#000, .05)
		cursor: pointer
		&:hover
			background-color: rgba(#000, .1)
		&:active
			background-color: #03f
			color: #fff
</style>
