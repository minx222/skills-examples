import { useContext } from '@/hooks'
import type { Session } from "./types";

export const [useSession, scope] = useContext(() => {

	const currentSession = ref<Partial<Session>>({});
	
	watch(() => currentSession.value.id ,() => {
		console.log(currentSession.value, '当前会话有改变,请各自组件做出相对应改变')
	})

	return {
		currentSession,
	};
});
