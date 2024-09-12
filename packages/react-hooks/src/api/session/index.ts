import type { Session } from '@/pages/context/types'

import { request } from '@packges/common'
export const findSessionByName = (sessionName?: string) => {
	return request.post<{
		list: Session[]
	}>("/session/findSessionByName", {
		topic: sessionName
	})
}
