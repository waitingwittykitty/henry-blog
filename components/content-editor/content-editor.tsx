import React, { ChangeEvent, forwardRef, Ref, useEffect, useState } from 'react';
import clsx from 'clsx';

interface ContentEditorProps {
  name?: string;
  value?: string;
  onChange: Function;
}

function ContentEditor(
  { value, onChange, name, ...rest }: ContentEditorProps,
  ref: Ref<HTMLTextAreaElement>
) {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(value!);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    setContent(e.target.value!);
  };

  return (
    <div className="content-editor">
      <textarea
        className={clsx(
          'appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5',
          'sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12',
          'pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2',
          'focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20',
          'dark:focus:ring-sky-500 dark:text-white'
        )}
        rows={10}
        onChange={handleChange}
        value={content}
        name={name}
        ref={ref}
        {...rest}
      />
    </div>
  );
}

export default forwardRef(ContentEditor);
