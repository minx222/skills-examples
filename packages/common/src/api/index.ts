import { RequestMethodEnum } from "@/enums";
import { AxiosService } from "@/utils";

export const AdminReuqest = new AxiosService({
	default_method: RequestMethodEnum.GET,
	withCredentials: true,
	timeout: 5000,
	/**
	 * 网关地址
	 */
	baseURL: "http://localhost",
});
