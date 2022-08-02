import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import clsx from 'clsx';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

interface ContentEditorProps {
  name?: string;
  value?: string;
  onChange: Function;
}

function ContentEditor({ value, onChange }: ContentEditorProps) {
  const [content, setContent] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (global.window) {
      const converted = require('html-to-draftjs').default(String(value ?? ''));

      setContent(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(converted.contentBlocks, converted.entityMap)
        )
      );
    }
  }, [value]);

  const handleChange = (editorState: EditorState) => {
    console.error({ editorState });
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setContent(editorState);
  };

  return (
    <div className="content-editor">
      <Editor
        editorState={content}
        wrapperClassName={clsx(
          'appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5',
          'sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12',
          'pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2',
          'focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20',
          'dark:focus:ring-sky-500 dark:text-white'
        )}
        onEditorStateChange={handleChange}
      />
    </div>
  );
}

export default ContentEditor;
