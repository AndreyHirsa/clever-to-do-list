import {
  startOfISOWeek,
  startOfMonth,
  lastDayOfISOWeek,
  lastDayOfMonth,
  addDays,
  isBefore,
} from 'date-fns';

export const calendarBuild = (currentDay: Date): Date[][] => {
  const startDay = startOfISOWeek(startOfMonth(currentDay));
  const lastDay = lastDayOfISOWeek(lastDayOfMonth(currentDay));
  const calendar = [];
  let day = new Date(startDay);
  const isEqual = require('date-fns/isEqual');

  while (isBefore(day, lastDay)) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(
          (item, key) => (day = addDays(day, !key && isEqual(startDay, day) ? 0 : 1)),
        ),
    );
  }

  return calendar;
};
