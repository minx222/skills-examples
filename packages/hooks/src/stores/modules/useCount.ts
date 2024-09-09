export const useCountStore = defineStore(
	"count",
	() => {
		const count = ref(0);
		const doubleCount = computed(() => count.value * 2);
		function increment() {
			count.value++;
		}
		return { count, doubleCount, increment };
	},
	{
		persist: {
			enabled: true,
		},
	},
);
