import { DateTime, DurationUnit } from 'ts-luxon';

export const capitalize = (stringData: string): string => {
  if (!stringData) return '';

  return stringData.charAt(0).toUpperCase() + stringData.substring(1);
};

export const composeFullName = (
  firstName?: string | { firstName?: string | null; lastName?: string | null },
  lastName?: string
): string => {
  if (typeof firstName === 'string') {
    return capitalize(firstName!) + ' ' + capitalize(lastName!);
  } else {
    return capitalize(firstName?.firstName!) + ' ' + capitalize(firstName?.lastName!);
  }
};

export const composeDate = (date: Date | string): string => {
  let composableDate = date;

  if (typeof date === 'string') {
    composableDate = new Date(date);
  }

  return DateTime.fromJSDate(composableDate as Date).toLocaleString(DateTime.DATE_FULL);
};

export const composeDateTime = (date: Date | string): string => {
  const parsed = DateTime.fromJSDate(new Date(date));

  return parsed.toFormat("LLL d, yyyy 'at' H:mm");
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
    const roundedDiff = Math.round(Math.abs(diffSize));

    if (roundedDiff !== 0) {
      if (roundedDiff === 1 || roundedDiff === -1) {
        return format.at(roundedDiff)!;
      }

      return `${roundedDiff} ${format[0]} ${diffSize < 0 ? 'from now' : 'ago'}`;
    }
  }

  return 'right now';
};

export const stripTags = (html: string): string => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};
