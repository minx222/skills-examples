import { createContext } from 'react';
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'

import type { Session } from '../types';

const SessionContext = createContext<{
	currentSession: Partial<Session>
	setCurrentSession: Dispatch<SetStateAction<Partial<Session>>>
}>({
	currentSession: {},
	setCurrentSession: () => void 0
});

export const sessionContextProvider = () => {
	const [currentSession, setCurrentSession] = useState<Partial<Session>>({});

	const Provider: FC<PropsWithChildren> = ({children}) => (
		<SessionContext.Provider value={{
			currentSession,
			setCurrentSession
		}}>
			{children}
		</SessionContext.Provider>
	)

	// const ctx = useContext()

	return {
		Provider,
		currentSession,
		setCurrentSession
	}
}

export const useSessionContext = () => {
	const ctx = useContext(SessionContext);

	return {
		...ctx
	}
}
