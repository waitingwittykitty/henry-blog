import React from 'react';
import cx from 'clsx';
import parse from 'html-react-parser';

export interface RichTextProps {
  value?: string;
}

export function RichText({ value }: RichTextProps) {
  const data = parse(value!);

  if (!data) {
    return null;
  }

  return (
    <article
      className={cx(
        'prose-base prose-ul:marker:list-disc first-letter:text-7xl',
        'first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3',
        'first-letter:float-left prose-ul:list-disc prose-ol:list-decimal'
      )}
    >
      {data}
    </article>
  );
}

export default RichText;
