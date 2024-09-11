import type { EffectScope } from 'vue'
/**
 * @name AnyFunction
 */
// biome-ignore lint/suspicious/noExplicitAny: 函数参数any
// biome-ignore lint/suspicious/noConfusingVoidType: 函数返回值需要any ｜ void
export type AnyFn<T extends Array<any> = any[], R = void | any> = (...args: T) => R;

export const useContext = <Fn extends AnyFn, T extends object>
(stateFactory: Fn,): [Fn, EffectScope] => {
	let initialized = false;
	let state: T;
	const scope = effectScope(true);

	const use: Fn = ((...args) => {
		if (!initialized) {
			state = scope.run(() => stateFactory(...args));
			initialized = true;
		}
		return state;
	}) as Fn;

	return [use, scope];
};
