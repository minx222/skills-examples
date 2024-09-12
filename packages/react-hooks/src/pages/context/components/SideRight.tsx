import { useSessionContext } from '../hooks'
const SideRight = () => {

	const { currentSession } = useSessionContext();

	return (
		<div className="flex flex-col gap-3 items-center justify-center w-full h-full">
			<div className='w-full h-full'>
				{JSON.stringify(currentSession)}
			</div>
		</div>
	);
};

export default SideRight;
