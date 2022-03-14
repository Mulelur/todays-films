import axios from 'axios';

const Axios = () => {

	/**
	 * Base url for API calls
	 */
	const axiosInstance = axios.create({
		baseURL: '',
		validateStatus: (status: number) => {
			let correct = false;

			if (status >= 200 && status < 300) {
				correct = true;
			} else if (status >= 400 && status < 500) {
				correct = true;
			}

			return correct;
		},
		timeout: 180_000,
	});

	return axiosInstance;
};



export default Axios;

export {default as axiosObject} from 'axios';