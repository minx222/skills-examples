export const deepCopy = <T>(object: T): T => {
	// 判断是否需要深拷贝
	if (!object || typeof object !== "object") {
		return object;
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	let result: any;

	// 判断是否是数组
	if (Array.isArray(object)) {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		result = [] as any[];
		for (let i = 0; i < object.length; i++) {
			const temp = deepCopy(object[i]);
			result.push(temp);
		}
	} else {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		result = {} as any;
		for (const key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				result[key] = deepCopy(object[key]);
			}
		}
	}

	return result as T;
};
