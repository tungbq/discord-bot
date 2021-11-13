/* Example in Node.js ES6 using request-promise */

require('dotenv').config();
const rp = require('request-promise');
const requestOptions = {
	method: 'GET',
	uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
	qs: {
		start: '1',
		limit: '20',
		convert: 'USD',
	},
	headers: {
		'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
	},
	json: true,
	gzip: true,
};

rp(requestOptions)
	.then((response) => {
		console.log('API call response:', response);
	})
	.catch((err) => {
		console.log('API call error:', err.message);
	});
