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
		name: 'Test PWA',
		themeColor: '#ff0055',
		msTitleColor: '#ff0055',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: '#ff0055',
	},
	baseUrl: process.env.NODE_ENV === 'production' ? '/pwa_test/' : '/',
}
