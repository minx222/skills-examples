import { Suspense } from "react";
import DynamicComponent from './utils';

const NewsPage = () => {
	return (
		<div>
			<span className="new">Nes pages</span>
			<Suspense>
				<DynamicComponent 
					title="测试标题" 
					content="测试内容" 
				url="http://localhost:3000/components/index.js" />

			</Suspense>
		</div>
	)
}


export default NewsPage;
