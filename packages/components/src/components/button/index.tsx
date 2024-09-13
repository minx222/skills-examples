// biome-ignore lint/style/useImportType: react注入
import React from 'react';
import { useState } from 'react';
import cls from 'classnames';
import type { ComponentProps } from '@/types'


const News: ComponentProps<{
	children: React.ReactNode
}> = (props) => {
	const { children, className, ...attr } = props

	const [count, setCount] = useState(0)

  return (
		<div className={cls('flex justify-center gap-2 p-2 w-full', className)} {...attr}>
			<span className='w-9 p-2 bg-light-200 text-yellow-900 border border-yellow-500 rounded'>{count}</span>
			<button onClick={() => setCount(count + 1)} className={cls('p-3 border border-solid border-green-500 bg-green-300 text-gray-950')}>
				{children}
			</button>
		</div>
  );
};

export default News;
