import { Side, SideRight } from './components'
import { useSessionContext, sessionContextProvider } from './hooks'
const Context = () => {

	const { currentSession } = useSessionContext();

	return (
		<div className="flex flex-col gap-3 items-center justify-center w-full h-full">
			<Side />
			<div className='w-full h-full'>
				{JSON.stringify(currentSession)}
			</div>
			<SideRight />
		</div>
	);
};

const ContextProvider = () => {
	const { Provider } = sessionContextProvider();
	return (
		<Provider>
			<Context />
		</Provider>
	)
}

export default ContextProvider;
