import dynamic from 'next/dynamic';
import React from 'react';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

interface ContentEditorProps {
  name?: string;
  value?: string;
  onChange: Function;
}

function ContentEditor({ value, onChange }: ContentEditorProps) {
  const handleChange = (content: string) => {
    onChange(content);
  };

  return (
    <QuillNoSSRWrapper
      onChange={handleChange}
      defaultValue={value}
      formats={formats}
      modules={modules}
      theme="snow"
    />
  );
}

export default ContentEditor;
