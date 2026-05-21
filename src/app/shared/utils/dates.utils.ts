import { format, isAfter, isDate, parse } from 'date-fns';

export const formatDatewithSlash: (date: Date) => string = (date: Date): string => {
  return format(date, 'yyyy/MM/dd');
};

export const subDays: (date: Date, days: number) => Date = (date: Date, days: number): Date => {
  return subDays(date, days);
};
export const isAfterDate = (date: Date, dateToCompare: Date): boolean => {
  return isAfter(date, dateToCompare);
};

export const isDateValid = (date: unknown): boolean => {
  let finalValue: any;
  if (typeof date === 'string') {
    finalValue = parse(date);
  } else {
    finalValue = date as Date;
  }
  return isDate(date);
};
