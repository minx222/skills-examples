import { createContext } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react'

import type { Session } from '../types';

const SessionContext = createContext<{
	currentSession: Partial<Session>
	setCurrentSession: Dispatch<SetStateAction<Partial<Session>>>
}>({
	currentSession: {},
	setCurrentSession: () => void 0
});

SessionContext.Provider

export const useSessionContext = () => {
	const [currentSession, setCurrentSession] = useState<Partial<Session>>({});

	return {
		Provider: (children: ReactNode) => (
			<SessionContext.Provider value={{
				currentSession,
				setCurrentSession
			}}>
				{children}
			</SessionContext.Provider>
		),
		currentSession,
		setCurrentSession
	}
}
