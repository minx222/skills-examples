import type { Ref } from 'vue';
import { resolvePromise } from '@packges/common'
/**
 * @name promise请求
 * @param fn
 * @returns
 */
export const useRequest = <P, T>(fn: ((params: P) => Promise<T>), config?: {
	initialValue?: T
}) => {
  const data = ref<T | undefined>(config?.initialValue);
	const loading = ref(true);
	const error = ref<Error>();

	const reload = async (params: P) => {
		loading.value = true;
		const [res, err] = await resolvePromise(() => fn(params));
		if (err) {
			error.value = err;
		} else {
			console.log(res, 'res');
			data.value = res;
		}
		loading.value = false;
	}

	return {
		data: data as Ref<T>,
		loading,
		error,
		reload,
	}
};
