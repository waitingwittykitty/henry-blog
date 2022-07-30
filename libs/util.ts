import { DataProp } from 'editorjs-blocks-react-renderer';
import { DateTime, DurationUnit } from 'ts-luxon';

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
  if (!stringData) return '';

  return stringData.charAt(0).toUpperCase() + stringData.substring(1);
};

export const composeFullName = (firstName: string, lastName: string): string => {
  return capitalize(firstName) + ' ' + capitalize(lastName);
};

export const composeDate = (date: Date | string): string => {
  let composableDate = date;

  if (typeof date === 'string') {
    composableDate = new Date(date);
  }

  return DateTime.fromJSDate(composableDate as Date).toLocaleString(DateTime.DATE_FULL);
};

export const composeDateTimeDiff = (date: Date | string): string => {
  const DIFF_FORMATS = [
    ['years', 'last year', 'next year'],
    ['months', 'last month', 'next month'],
    ['days', 'yesterday', 'tomorrow'],
    ['hours', '1 hour ago', '1 hour from now'],
    ['minutes', '1 minute ago', '1 minute from now'],
  ];

  const parsed = DateTime.fromJSDate(new Date(date));
  const diff = DateTime.now()
    .diff(parsed, ['minutes', 'hours', 'days', 'months', 'years'])
    .toObject();

  for (let format of DIFF_FORMATS) {
    const diffSize = diff[format[0] as DurationUnit]!;

    if (diffSize !== 0) {
      if (diffSize === 1 || diffSize === -1) {
        return format.at(diffSize)!;
      }

      return `${Math.round(Math.abs(diffSize))} ${format[0]} ${
        diffSize < 0 ? 'from now' : 'ago'
      }`;
    }
  }

  return 'right now';
};
