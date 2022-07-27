import { DataProp } from 'editorjs-blocks-react-renderer';

export const parseEditorJSData = (jsonStringData?: string): DataProp | null => {
  if (!jsonStringData) {
    return null;
  }
  let data;
  try {
    data = JSON.parse(jsonStringData);
  } catch (e) {
    return null;
  }

  if (!data.blocks?.length) {
    // No data to render
    return null;
  }

  // Path for compatibility with data from older version od EditorJS
  if (!data.time) {
    data.time = Date.now().toString();
  }
  if (!data.version) {
    data.version = '2.22.2';
  }

  return data;
};

export const capitalize = (stringData: string): string => {
  return stringData.charAt(0).toUpperCase() + stringData.substring(1);
};

export const composeFullName = (firstName: string, lastName: string): string => {
  return capitalize(firstName) + ' ' + capitalize(lastName);
};
