import { AxiosResponse } from 'axios';
import Axios from './config';

const Ajax = () => {
	const instance = Axios();

	return instance;
};

/**
 * Get data to backend API
 *
 * @return a promise in json format
 */
export const Get = async (
	url: string,
	data?: Record<string, unknown>
): Promise<AxiosResponse<any>> => {
	const inputData = data || {};

	const response = await Ajax().get(url, {
		params: inputData,
	});

	return response;
};

/**
 * Posts data to backend API
 *
 * @return a promise in json format
 */
export const Post = async (
	url: string,
	data?: Record<string, unknown>,
): Promise<AxiosResponse<any>> => {
	const response = await Ajax().post(url, data);

	return response;
};

/**
 * Posts form data to backend API
 *
 * @param monitor whether to monitor the request session
 * @return a promise in json format
 */
export const FormPost = async (
	url: string,
	data: FormData,
	timeout?: number,
): Promise<AxiosResponse<any>> => {
	const response = await Ajax().post(url, data, {
		timeout,
		headers: { 'Content-Type': 'multipart/form-data' },
	});

	return response;
};

/**
 * Updates data on backend API
 *
 * @param monitor whether to monitor the request session
 * @return promise - a promise in json format
 */
export const Update = async (
	url: string,
	data?: Record<string, unknown>,
): Promise<AxiosResponse<any>> => {
	const response = await Ajax().put(url, data);

	return response;
};

/**
 * Deletes data from backend API
 *
 * @param monitor whether to monitor the request session
 * @return promise - a promise in json format
 */
export const Delete = async (
	url: string,
	data?: Record<string, unknown>,
): Promise<AxiosResponse<any>> => {
	const inputData = data || {};

	const response = await Ajax().delete(url, {
		data: inputData,

	});

	return response;
};
