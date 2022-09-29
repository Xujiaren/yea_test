import qs from 'query-string';
import config from '../config/param';

function filterStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		error.type = 'http';
		throw error;
	}
}

function filterJSON(response) {
	return response.json();
}

function filterResult(result) {

	if (result.status) {
		return result.data;
	} else {
		throw result.message;
	}
}

var request = {

	get(url, params) {
		url = config.api + url;

		var cp = '?';
		if (url.indexOf(cp) > -1) {
			cp = '&';
		}

		if (params) {
			url += `${cp}${qs.stringify(params)}`;
		}

		if (__DEV__) {
			console.info('GET: ', url);
			console.info('Params: ', params);
		}

		return fetch(url, {
			headers: {
				'Request-Type': '',
				'access_token': window.token,
			},
		}).then(filterStatus).then(filterJSON).then(filterResult);
	},

	post(url, params,val) {
		url = config.api + url;

		if (__DEV__) {
			console.info('POST: ', url);
			console.info('Body: ', params);
		}
		return fetch(url, {
			method: 'POST',
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded',
				'Request-Type': '',
				'access_token': window.token,
			},
			body: qs.stringify(params),
		}).then(filterStatus).then(filterJSON).then(filterResult);
	},

	upload(url,params){
		url = config.api + url;

		// params = Object.assign({}, {token: window.token}, params);
		if (__DEV__) {
			console.info('POST: ', url);
			console.info('Body: ', params);
		}

		return fetch(url, {
			method: 'POST',
			mode:'cors',
			credentials:'include',
			// headers: {
			// 	'Accept': 'application/json',
			// 	'Content-Type':'multipart/form-data',
			// 	'Request-Type':'',
			// 	'access_token': window.token,
			// },
			body: params.file,
		}).then(filterStatus).then(filterJSON).then(filterResult);
    },
};

module.exports = request;