const friendlyWords = require("friendly-words");

const Reader = require('@maxmind/geoip2-node').Reader;

exports.handler = function(event, context, callback) {
	Reader.open('/usr/local/share/GeoIP/GeoIP2-Country.mmdb').then(reader => {
	  callback(null, {
	  	headers: {
	  		'Access-Control-Allow-Origin': '*',
	  		'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
	  		'Access-Control-Allow-Headers': '*'
	  	},
	  	statusCode: 200,
	  	body: reader.country()
	  });
	});
};