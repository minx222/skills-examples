import React from 'react';
import cls from 'classnames';
import type { ComponentProps } from '@/types'

export type NewsProps = {
  title: string;
  content: string;

  titleClassName?: string;
  contentClassname?: string;
};

const News: ComponentProps<NewsProps> = (props) => {
  const { title, content, className, style, ...attr } = props;

  return (
    <div className={cls("flex flex-col", className)} style={style} { ...attr }>
      <h1 className='flex justify-center pb-4 text-3xl'>{title}</h1>
      <p className='p-2 whitespace-pre text-dark-400'>{content}</p>
    </div>
  );
};

export default News;
