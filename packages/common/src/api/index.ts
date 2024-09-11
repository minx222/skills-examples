import { RequestMethodEnum } from "../enums";
import { AxiosService } from "../utils";

export const request = new AxiosService({
	default_method: RequestMethodEnum.GET,
	withCredentials: true,
	timeout: 5000,
	baseURL: "dev-test",
});
