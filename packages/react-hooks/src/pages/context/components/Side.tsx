import { useRequest } from 'ahooks'
import cls from 'classnames'


import { findSessionByName } from '@/api'

const Side = () => {
	const { data } = useRequest(() => findSessionByName())

	const list = useMemo(() => {
		return data?.data.list ?? [];
	}, [data])

	return (
		<div className="flex flex-col gap-2 p-4 overflow-auto scrollbar">
			{
				list.map((session) => {
					return (
						<div 
							key={session.id}
							className={cls(
								'flex justify-center items-center p-2 border border-solid border-yellow-200 cursor-pointer hover:text-yellow-400',
								)
							}
						>
					</div>
					)
				})
			}

	</div>
	)
}


export default Side;
