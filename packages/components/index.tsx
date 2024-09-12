import React from 'react';
import type { FC } from 'react';

export type NewsProps = {
  title: string;
  content: string;

  titleClassName?: string;
  contentClassname?: string;
};

const News: FC<NewsProps> = (props) => {
  const { title, content, titleClassName, contentClassname } = props;

  return (
    <div className="news-warpper">
      <h1 className={titleClassName}>{title}</h1>
      <p className={contentClassname}>{content}</p>
    </div>
  );
};

export default News;
