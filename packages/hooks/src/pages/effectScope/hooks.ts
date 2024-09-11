import { useContext } from '@/hooks'
import type { Session } from "./types";

export const [useSession] = useContext(() => {

	const currentSession = ref<Partial<Session>>({});
	
	return {
		currentSession,
	};
});
