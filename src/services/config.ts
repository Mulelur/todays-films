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
		timeout: 180000,
	});

	return axiosInstance;
};

export const axiosObject = axios;

export default Axios;
