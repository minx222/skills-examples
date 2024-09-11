/**
 * @name 获取一个永远成功的promise
 * @param fn
 * @returns
 */
export const resolvePromise = <T>(fn: Promise<T> | (() => Promise<T>)) => {
  return new Promise<[T, null] | [T, Error]>((resolve) => {
		const promise = typeof fn === 'function' ? fn() : fn;
    promise.then((res) => {
      resolve([res, null]);
    }).catch((err) => {
			// 处理结构类型不安全问题
			// @ts-ignore
      resolve([null, err instanceof Error ? err : new Error(err)]);
    });
  });
};
