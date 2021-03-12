import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import {
  add, isBefore, isSameDay, sub,
} from 'date-fns';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch } from 'react-redux';
import { patchUserData } from 'redux/actions/userDataActions';
import { calendarBuild } from './build';
import styles from './style.module.css';

export const Calendar = () => {
  const [calendar, setCalendar] = useState<Date[][]>([]);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    setCalendar(calendarBuild(calendarDate));
  }, [calendarDate]);

  const isSelected = (day:Date) => isSameDay(currentDay, day);

  const updateDay = (newDay:Date) => {
    const day = format(newDay, 'd');
    const month = format(newDay, 'MMMM');
    const year = format(newDay, 'yyy');
    dispatch(patchUserData({ day, year, month }));
    setCurrentDay(newDay);
  };

  const isToday = (day:Date) => isSameDay(new Date(), day);

  const isBeforeToday = (day:Date) => isBefore(day, new Date());

  const dayStyles = (day:Date) => {
    if (isToday(day)) return styles.today;
    if (isBeforeToday(day) && day === currentDay) return `${styles.before} ${styles.selected}`;
    if (isBeforeToday(day)) return styles.before;
    if (isSelected(day)) return styles.selected;
    return '';
  };

  const currMonth = format(calendarDate, 'MMMM');

  const currYear = format(calendarDate, 'yyy');

  const prevMonth = () => {
    setCalendarDate((prevDate) => sub(prevDate, { months: 1 }));
  };

  const nextMonth = () => {
    setCalendarDate((prevDate) => add(prevDate, { months: 1 }));
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <ArrowLeftIcon
          onClick={prevMonth}
          className={styles.icon}
        />
        <div>
          {`${currMonth} ${currYear}`}
        </div>
        <ArrowRightIcon
          onClick={nextMonth}
          className={styles.icon}
        />
      </div>
      <div className={styles.calendar}>
        <div className={styles.dayNames}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => <div>{day}</div>)}
        </div>
        {
            calendar.map((week:Date[]) => (
              <div className={styles.days}>
                {
                week.map((day:Date) => (
                  <button
                    type="button"
                    disabled={isSelected(day)}
                    className={styles.day}
                    onClick={() => updateDay(day)}
                  >
                    <div className={dayStyles(day)}>{format(day, 'd')}</div>
                  </button>
                ))
                }
              </div>
            ))
        }
      </div>
    </div>
  );
};
