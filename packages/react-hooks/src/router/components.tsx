import { Suspense } from 'react'
export const Home = lazy(() => import('@/pages/home'))
export const About = lazy(() => import('@/pages/about'))
export const Context = lazy(() => import('@/pages/context'))
export const News = lazy(() => import('@/pages/news'))

export const RouterMap =  {
	home: <Home />,
	about: <About />,
	context: <Context />,
	news: <News />
}

export const  LazyComponent = ({component}: {
	component: keyof typeof RouterMap
}) => {
	return (
		<Suspense fallback="loading">{RouterMap[component]}</Suspense>
	)
}
