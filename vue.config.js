module.exports = {
	devServer: {
		watchOptions: {
			poll: true
		},
		port: 80,
		host: "0.0.0.0",
		hot: false,
	},
	pwa: {
		name: 'Progressive Web App Test',
		themeColor: '#03f',
		msTitleColor: '#03f',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: '#03f',
	},
	baseUrl: process.env.NODE_ENV === 'production' ? '/pwa_test/' : '/',
}
