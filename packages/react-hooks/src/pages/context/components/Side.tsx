import { useRequest } from 'ahooks'
import cls from 'classnames'


import { findSessionByName } from '@/api'

import { useSessionContext } from '../hooks';

const Side = () => {

	const { currentSession, setCurrentSession } = useSessionContext();
	const { data } = useRequest(() => findSessionByName())

	const list = useMemo(() => {
		return data?.data.list ?? [];
	}, [data])

	return (
		<div className="flex flex-col gap-2 p-4 overflow-auto scrollbar">
			{
				list.map((session) => {
					return (
						<button 
							key={session.id}
							className={cls(
									'flex justify-center items-center p-2 border border-solid border-yellow-200 cursor-pointer hover:text-yellow-400',
									{
										'text-white bg-yellow-600': currentSession.id === session.id
									}
								)
							}
							type='button'
							onClick={() => setCurrentSession(session)}
						>
							{session.topic}
					</button>
					)
				})
			}

	</div>
	)
}


export default Side;
