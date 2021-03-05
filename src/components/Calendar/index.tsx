import format from 'date-fns/format';
import styles from './style.module.css';
import { isBefore, isSameDay, sub } from 'date-fns';
import React, {useContext, useEffect, useState} from 'react';
import { calendarBuild } from './build';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {Context} from "../../context";

export const Calendar=()=>{
    const [calendar,setCalendar]=useState<Date[][]>([])
    const {currentDay,setUserData,userData,setCurrentDay}:any=useContext(Context)

    useEffect(()=>{
        setCalendar(calendarBuild(currentDay))
    },[currentDay])
    
    const isSelected=(day:Date)=>{
        return isSameDay(currentDay,day)
    }

    const updateDay=(day:Date)=>{
        let dayNumber=format(day,"d");
        const dataToUpdate={...userData,day:dayNumber}
        setUserData(dataToUpdate)
        setCurrentDay(day)
    }

    const isToday=(day:Date)=>{
        return isSameDay(new Date(),day)
    }

    const isBeforeToday=(day:Date)=>{
        return isBefore(day, new Date())
    }

    const dayStyles=(day:Date)=>{
        if(isToday(day)) return styles.today
        if(isBeforeToday(day)) return styles.before
        if(isSelected(day)) return styles.selected
        return ""
    }

    const currMonth=()=>{
      return format(currentDay, "MMMM")
    }

    const currYear=()=>{
      return format(currentDay, "yyy")
    }

    const prevMonth=()=>{
      return sub(currentDay,{months: 1})
    }

    return(
        <div className={styles.body}>
            <div className={styles.header}>
                <ArrowLeftIcon onClick={()=>prevMonth()} className={styles.icon}/>
                <div>{currMonth()} {currYear()}</div>
                <ArrowRightIcon className={styles.icon}/>
            </div>
            <div className={styles.calendar}>{
            calendar.map((week:Date[]) => <div>{
                week.map((day:Date) => <button className={styles.day} onClick={()=>updateDay(day)}>
                    <div className={dayStyles(day)}>{format(day,"d")}</div></button>)}</div>)
        }</div>
        </div>
    )
}