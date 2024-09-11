/**
 * Any function
 */

// biome-ignore lint/suspicious/noExplicitAny: 函数参数any
// biome-ignore lint/suspicious/noConfusingVoidType: 函数返回值需要any ｜ void
export type AnyFn<T extends Array<any> = any[], R = void | any> = (...args: T) => R;

export interface Session {
  id?: number;

	/**
	 * @name 标题
	 */
  topic: string;
}