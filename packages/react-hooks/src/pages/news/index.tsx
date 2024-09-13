import { Suspense } from "react";

import type { NewsProps } from '@packages/components'

import DynamicComponent from './utils';
import { loadStyles } from "@/utils";

const NewsPage = () => {

	useEffect(() => {
		loadStyles("http://localhost:3000/components/css/tailwind.css");
	}, [])

	return (
		<div>
			<span className="new">Nes pages</span>
			<Suspense>
				<DynamicComponent<NewsProps>
					title="测试标题" 
					content="测试内容"
					url="http://localhost:3000/components/news/index.js"
				/>
				<DynamicComponent 
					url="http://localhost:3000/components/button/index.js"
				>
					+1
				</DynamicComponent>

			</Suspense>
		</div>
	)
}


export default NewsPage;
