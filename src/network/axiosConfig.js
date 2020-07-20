import axios from 'axios';

var instance = axios.create({
	baseURL: 'http://localhost:3000'
});

//Intercept all the request
instance.interceptors.request.use((request) => {
	return request;
});

//Intercept all the response
instance.interceptors.response.use(
	function(config) {
		return config;
	},
	function(error) {
		var status = error.response.status;

		switch (status) {
			case 401:
				//alert(status);
				break;
			case 403:
				//alert(status);
				break;
			case 404:
				//alert(status);
				break;
			case 500:
				//alert(status);
				break;
			case 503:
				//alert(status);
				break;
			default:
				//alert(status);
				break;
		}

		return Promise.reject(error);
	}
);

export default instance;
