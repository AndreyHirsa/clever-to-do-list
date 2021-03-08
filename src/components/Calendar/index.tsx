import format from 'date-fns/format';
import {
  add, isBefore, isSameDay, sub,
} from 'date-fns';
import React, { useEffect, useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch } from 'react-redux';
import { calendarBuild } from './build';
import styles from './style.module.css';
import { patchUserData } from '../../redux/actions/userDataActions';

export const Calendar = () => {
  const [calendar, setCalendar] = useState<Date[][]>([]);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    setCalendar(calendarBuild(calendarDate));
  }, [calendarDate]);

  const isSelected = (day:Date) => isSameDay(currentDay, day);

  const updateDay = (day:Date) => {
    const dayNumber = format(day, 'd');
    dispatch(patchUserData({ day: dayNumber }));
    setCurrentDay(day);
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

  const currMonth = () => format(calendarDate, 'MMMM');

  const currYear = () => format(calendarDate, 'yyy');

  const prevMonth = () => {
    const newDate = sub(calendarDate, { months: 1 });
    setCalendarDate(newDate);
  };

  const nextMonth = () => {
    const newDate = add(calendarDate, { months: 1 });
    setCalendarDate(newDate);
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <ArrowLeftIcon onClick={prevMonth} className={styles.icon} />
        <div>
          {`${currMonth()} ${currYear()}`}
        </div>
        <ArrowRightIcon onClick={nextMonth} className={styles.icon} />
      </div>
      <div className={styles.calendar}>
        <div className={styles.dayNames}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => <div>{day}</div>)}
        </div>
        {
            calendar.map((week:Date[]) => (
              <div className={styles.days}>
                {
                week.map((day:Date) => (
                  <button type="button" disabled={isSelected(day)} className={styles.day} onClick={() => updateDay(day)}>
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
