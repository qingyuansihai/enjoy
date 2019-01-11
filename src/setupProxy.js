const proxy = require('http-proxy-middleware');

module.exports = function(app) {

	app.use(proxy('/hub', {
		target: 'https://api.ricebook.com',
		changeOrigin: true
	}));

	app.use(proxy('/product', {
		target: 'https://api.ricebook.com',
		changeOrigin: true
	}));

	app.use(proxy('/4', {
		target: 'https://api.ricebook.com',
		changeOrigin: true
	}));

	app.use(proxy('/redkeep', {
		target: 'https://api.ricebook.com',
		changeOrigin: true
	}));



};