<template>
	<div id="another-page-view">
		<h3>{{ testVar }}</h3>
		<span class="status">{{ isNotEmpty ? 'Not empty' : 'Empty' }}</span>
		<input type="text" v-model="testVar">
		<button @click="clearVar()">Emtpy variable</button>
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
	h3
		min-height: 1.6rem
	input
		display: block
		margin: auto auto 1rem auto
	.status
		text-transform: uppercase
		font-weight: 900
		font-size: .75rem
</style>
