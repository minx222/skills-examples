// import { News } from "@packages/components";
import clx from "classnames";
import { Suspense } from "react";

const News2 = lazy(() => import("http://localhost:3000/components/index.js"))
const NewsPage = () => {
	return (
		<div>
			<span className="new">Nes pages</span>
			{/* <News 
				title="测试标题" 
				content="测试内容"
				titleClassName={clx('flex items-center')} 
			/> */}
			<Suspense>

			<News2 title="测试标题" 
				content="测试内容"
				titleClassName={clx('flex items-center')}  />
			</Suspense>
		</div>
	)
}


export default NewsPage;
