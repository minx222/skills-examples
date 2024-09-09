import axios from "axios";
import type {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";
import qs from "qs";

import { RequestMethodEnum, ResultEnum } from "@/enums/request";
import type { CreateAxiosOptions } from "@/types";

import type { ResultData } from "../types";

export class AxiosService {
	private axiosInstance: AxiosInstance;
	private readonly options: CreateAxiosOptions;

	constructor(options: CreateAxiosOptions) {
		this.options = options;
		this.axiosInstance = axios.create(options);
		this.setupInterceptors();
	}

	private setupInterceptors() {
		this.axiosInstance.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				if (!config.method) {
					config.method = this.options.default_method;
				}
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			},
		);
		this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
			const { data, status } = response;
			if (status !== ResultEnum.SUCCESS) {
				console.error(data);
				Promise.reject(data);
			}
			if (data.code !== ResultEnum.SUCCESS) {
				console.error(data.message);
				return Promise.reject(data);
			}
			return data;
		});
	}

	get<T>(url: string, params?: object): Promise<ResultData<T>> {
		return this.axiosInstance({
			url: url + qs.stringify(params),
			method: RequestMethodEnum.GET,
		});
	}
	post<T>(url: string, data: unknown): Promise<ResultData<T>> {
		return this.axiosInstance({
			url: url,
			method: RequestMethodEnum.POST,
			data,
		});
	}
}
