<template>
	<div id="home-view">
		<img
			role="img"
			alt="Vue App logo"
			src="../assets/logo.png"
			style="filter: hue-rotate(100deg) contrast(1.5)"
		/>
		<HelloWorld ref="test" msg="Welcome to this Vue.js App"/>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello_world.vue'

export default {
	name: 'home',
	components: {
		HelloWorld,
	},
}
</script>
