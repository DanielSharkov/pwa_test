import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import AnotherPage from './views/another_page.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: Home,
			displayName: 'Home',
		},{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/about.vue'),
			displayName: 'About',
		},{
			path: '/another-page',
			name: 'AnotherPage',
			component: AnotherPage,
			displayName: 'Another Page',
	}]
})
