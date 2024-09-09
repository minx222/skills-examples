import type { RequestMethodEnum } from "@/enums";

interface Result {
	code: number;
	msg: string;
}

export interface ResultData<T = string> extends Result {
	data: T;
}

export interface CreateAxiosOptions {
	baseURL?: string;
	default_method?: RequestMethodEnum;
	timeout?: number;
	withCredentials?: true;
}
